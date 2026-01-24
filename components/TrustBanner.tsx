import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TrustBanner() {
  return (
    <section className="bg-blue-50 border-y border-dashed border-blue-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-lg font-medium text-center md:text-left">
            Trusted by leading medical practices in Sydney, Melbourne, and
            Brisbane
          </p>
          <Link
            href="/book-demo"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            Book Demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
