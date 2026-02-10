"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PaintBrushIcon,
  CodeBracketIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "UI/UX Design",
    desc: "Intuitive, user-focused interfaces designed to enhance engagement and usability.",
    icon: PaintBrushIcon,
    href: "/services/ui-ux",
  },
  {
    title: "Web Development",
    desc: "Scalable, high-performance websites built with modern technologies.",
    icon: CodeBracketIcon,
    href: "/services/web-development",
  },
  {
    title: "Brand Identity",
    desc: "Strong visual identities that clearly communicate your brand story.",
    icon: SparklesIcon,
    href: "/services/brand-identity",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FAFAFA]">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-6 pt-32 pb-24 text-center max-w-6xl mx-auto"
      >
        <span className="inline-block mb-6 px-4 py-1.5 text-xs font-medium tracking-widest uppercase 
                         text-gray-500 bg-gray-100 rounded-full">
          Our Expertise
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Services We Provide
        </h1>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          We help brands grow by creating meaningful digital experiences that
          connect, convert, and inspire.
        </p>
      </motion.section>

      {/* Cards */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-10 md:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <Link key={i} href={service.href}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group cursor-pointer bg-white rounded-3xl p-10 border border-gray-100
                             hover:-translate-y-3 hover:shadow-2xl
                             transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl
                               bg-gray-100
                               group-hover:bg-gradient-to-br
                               group-hover:from-black
                               group-hover:via-purple-600
                               group-hover:to-pink-600
                               transition-all duration-500"
                  >
                    <Icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}
