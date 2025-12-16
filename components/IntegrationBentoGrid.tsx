"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const WhatsAppLogo = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const GoogleLogo = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

const ZoomLogo = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 5.5A2.5 2.5 0 016.5 3h11A2.5 2.5 0 0120 5.5v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 12.5v-7zm13 2.5l4-2v9l-4-2v-5z" />
  </svg>
)

const TallyLogo = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h4v18H3V3zm7 0h4v18h-4V3zm7 0h4v18h-4V3z" />
  </svg>
)

const XeroLogo = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.47l7 3.5v7.06l-7-3.5V9.47zm16 0v7.06l-7 3.5v-7.06l7-3.5z" />
  </svg>
)

const StripeLogo = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
  </svg>
)

const SlackLogo = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z" />
  </svg>
)

const TeamsLogo = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.625 8.127h-7.5a.376.376 0 00-.375.375v7.5c0 .207.168.375.375.375h7.5a.376.376 0 00.375-.375v-7.5a.376.376 0 00-.375-.375zM8.627 8.5H3.373A1.377 1.377 0 002 9.873v4.254a1.377 1.377 0 001.373 1.373h5.254A1.377 1.377 0 0010 14.127V9.873A1.377 1.377 0 008.627 8.5zm0 5.627H3.373V9.873h5.254v4.254z" />
    <circle cx="17.875" cy="6" r="2.25" />
    <circle cx="6" cy="6" r="2.25" />
    <path d="M17.875 8.5c-1.243 0-2.25 1.007-2.25 2.25v5.377h4.5V10.75c0-1.243-1.007-2.25-2.25-2.25z" />
  </svg>
)

const logos = [
  { name: "WhatsApp", Component: WhatsAppLogo },
  { name: "Google", Component: GoogleLogo },
  { name: "Zoom", Component: ZoomLogo },
  { name: "Tally", Component: TallyLogo },
  { name: "Xero", Component: XeroLogo },
  { name: "Stripe", Component: StripeLogo },
  { name: "Slack", Component: SlackLogo },
  { name: "Microsoft Teams", Component: TeamsLogo },
]

export const IntegrationBentoGrid = () => {
  return (
    <div className="w-full py-16 bg-white" id="integrations">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-12">
          <p
            className="text-lg text-[#1d326d] font-medium"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
            }}
          >
            Seamlessly integrated with 50+ tools you love
          </p>
        </div>

        {/* Logo Marquee Container */}
        <div className="relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-16 py-8 [&>*]:animate-marquee group-hover:[&>*]:pause">
            {/* First Set */}
            <div className="flex gap-16 shrink-0 animate-marquee group-hover:pause">
              {logos.map((logo, index) => {
                const LogoComponent = logo.Component
                return (
                  <div
                    key={`set1-${index}`}
                    className="flex flex-col items-center justify-center w-32 h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 text-slate-400 hover:text-[#1d326d]"
                  >
                    <LogoComponent />
                    <span className="text-xs mt-2 font-medium" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                      {logo.name}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex gap-16 shrink-0 animate-marquee group-hover:pause" aria-hidden="true">
              {logos.map((logo, index) => {
                const LogoComponent = logo.Component
                return (
                  <div
                    key={`set2-${index}`}
                    className="flex flex-col items-center justify-center w-32 h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 text-slate-400 hover:text-[#1d326d]"
                  >
                    <LogoComponent />
                    <span className="text-xs mt-2 font-medium" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                      {logo.name}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Third Set (Another duplicate for extra smoothness) */}
            <div className="flex gap-16 shrink-0 animate-marquee group-hover:pause" aria-hidden="true">
              {logos.map((logo, index) => {
                const LogoComponent = logo.Component
                return (
                  <div
                    key={`set3-${index}`}
                    className="flex flex-col items-center justify-center w-32 h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 text-slate-400 hover:text-[#1d326d]"
                  >
                    <LogoComponent />
                    <span className="text-xs mt-2 font-medium" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                      {logo.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link href="/integrations">
            <Button
              variant="outline"
              size="lg"
              className="text-base font-medium bg-transparent text-[#1d326d] border-[#1d326d] hover:bg-[#1d326d] hover:text-white"
            >
              View all integrations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
