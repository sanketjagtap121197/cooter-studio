export default function ServicesPage() {
    return (
        <main className="bg-white">
            {/* Header Section */}
            <section className="px-6 py-20 text-center max-w-6xl mx-auto">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                    Our Expertise
                </p>

                <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
                    Services We Provide
                </h1>

                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    We help brands grow by creating meaningful digital experiences.
                </p>
            </section>


            {/* Services Cards */}
            <section className="px-6 pb-24 max-w-6xl mx-auto">
                <div className="grid gap-10 md:grid-cols-3">
                    <div className="border rounded-2xl p-8 hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            UI/UX Design
                        </h3>
                        <p className="text-gray-600">
                            Intuitive, clean, and user-centered designs that improve user
                            engagement and experience.
                        </p>
                    </div>

                    <div className="border rounded-2xl p-8 hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Web Development
                        </h3>
                        <p className="text-gray-600">
                            High-performance websites built using modern frameworks and best
                            practices.
                        </p>
                    </div>

                    <div className="border rounded-2xl p-8 hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Brand Identity
                        </h3>
                        <p className="text-gray-600">
                            Visual identities that communicate your brand's story clearly and
                            consistently.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
