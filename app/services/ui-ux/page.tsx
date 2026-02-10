import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function UiUxPage() {
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
          UI/UX Design
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          We design digital experiences that feel effortless, intuitive, and
          visually compelling. Every interface is crafted with the user at the
          center.
        </p>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Our UI/UX process starts with understanding user behavior, goals,
            and pain points. Through research, wireframing, and prototyping,
            we turn ideas into seamless experiences.
          </p>

          <p>
            We focus on usability, accessibility, and scalable design systems
            that evolve with your product.
          </p>
        </div>
      </section>
    </main>
  );
}
