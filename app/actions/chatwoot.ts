"use server";

export async function submitToChatwoot(formData: any) {
  const API_URL = process.env.CHATWOOT_API_URL;
  const ACCESS_TOKEN = process.env.CHATWOOT_API_ACCESS_TOKEN;
  const ACCOUNT_ID = process.env.CHATWOOT_ACCOUNT_ID;
  const INBOX_ID = process.env.CHATWOOT_INBOX_ID;

  if (!API_URL || !ACCESS_TOKEN || !ACCOUNT_ID || !INBOX_ID) {
    console.error("Missing Chatwoot environment variables");
    return {
      success: false,
      message: "Configuration error. Please contact support.",
    };
  }

  const { firstName, lastName, email, message } = formData;
  const name = `${firstName} ${lastName}`;

  try {
    // 1. Search for existing contact
    const searchRes = await fetch(
      `${API_URL}/api/v1/accounts/${ACCOUNT_ID}/contacts/search?q=${email}`,
      {
        headers: { api_access_token: ACCESS_TOKEN },
      },
    );
    const searchData = await searchRes.json();
    let contactId;

    if (searchData.payload && searchData.payload.length > 0) {
      contactId = searchData.payload[0].id;
    } else {
      // 2. Create new contact
      const createContactRes = await fetch(
        `${API_URL}/api/v1/accounts/${ACCOUNT_ID}/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            api_access_token: ACCESS_TOKEN,
          },
          body: JSON.stringify({
            name,
            email,
          }),
        },
      );
      const contactData = await createContactRes.json();
      if (!createContactRes.ok) throw new Error("Failed to create contact");
      contactId = contactData.payload.contact.id;
    }

    // 3. Create conversation
    const conversationRes = await fetch(
      `${API_URL}/api/v1/accounts/${ACCOUNT_ID}/conversations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_access_token: ACCESS_TOKEN,
        },
        body: JSON.stringify({
          inbox_id: Number(INBOX_ID),
          contact_id: contactId,
          status: "open",
        }),
      },
    );
    const conversationData = await conversationRes.json();
    console.log(
      "Conversation API response:",
      JSON.stringify(conversationData, null, 2),
    );

    if (!conversationRes.ok) {
      console.error("Conversation creation failed:", conversationData);
      throw new Error("Failed to create conversation");
    }

    // Handle both possible response structures
    const conversationId = conversationData.id ?? conversationData.payload?.id;

    if (!conversationId) {
      console.error(
        "Could not extract conversation ID from response:",
        conversationData,
      );
      throw new Error("Failed to extract conversation ID");
    }

    console.log("Creating message for conversation:", conversationId);

    // 4. Create message
    const messageRes = await fetch(
      `${API_URL}/api/v1/accounts/${ACCOUNT_ID}/conversations/${conversationId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_access_token: ACCESS_TOKEN,
        },
        body: JSON.stringify({
          content: "[Contact Form]:" + message,
          message_type: 0, // 0 = incoming (from contact), 1 = outgoing (from agent)
          private: false,
        }),
      },
    );

    const messageData = await messageRes.json();
    console.log("Message creation response:", messageData);

    if (!messageRes.ok) {
      console.error("Message creation failed:", messageData);
      throw new Error("Failed to create message");
    }

    return { success: true };
  } catch (error) {
    console.error("Chatwoot submission error:", error);
    return { success: false, message: "Failed to send message." };
  }
}
