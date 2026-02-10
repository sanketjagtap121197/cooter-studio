import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BrandIdentityPage() {
  return (
    <main className="bg-[#FAFAFA]">
      <section className="px-6 pt-32 pb-28 max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500
                     hover:text-gray-900 transition mb-10"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Services
        </Link>

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Brand Identity
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          We craft brand identities that are distinctive, consistent, and
          emotionally engaging across all platforms.
        </p>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            From logo systems to typography and color palettes, we ensure your
            brand communicates clearly and confidently.
          </p>

          <p>
            Our branding work helps businesses stand out while staying true
            to their values and vision.
          </p>
        </div>
      </section>
    </main>
  );
}
