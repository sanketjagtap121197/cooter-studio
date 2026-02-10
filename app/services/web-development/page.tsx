import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function WebDevelopmentPage() {
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
          Web Development
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          We build fast, scalable, and secure web applications using modern
          technologies that deliver long-term value.
        </p>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Our development process emphasizes performance, clean architecture,
            and maintainable codebases that grow with your business.
          </p>

          <p>
            We ensure responsive layouts, accessibility standards, and seamless
            integrations across platforms.
          </p>
        </div>
      </section>
    </main>
  );
}
