export default function About() {
  const features = [
    {
      icon: "✍️",
      title: "Easy Publishing",
      desc: "Create and manage blog posts with a clean, modern experience.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Seamless experience across desktop, tablet, and mobile.",
    },
    {
      icon: "🌍",
      title: "Community Driven",
      desc: "Connect with readers and share meaningful content.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-base-100 to-base-100">
      <div className="fixed -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative overflow-hidden border-b border-base-200">
        <div className="max-w-3xl mx-auto text-center py-20 px-4 flex flex-col items-center gap-4">
          <div className="badge badge-primary badge-outline text-xs font-semibold tracking-widest px-4 py-2">
            ✦ Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Our Blog
          </h1>
          <p className="text-base-content/50 text-lg max-w-xl">
            A space where ideas, stories, and creativity come together.
          </p>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 mt-2" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
            👋
          </div>
          <div>
            <h2 className="text-2xl font-extrabold mb-3 tracking-tight">
              Who We Are
            </h2>
            <p className="text-base-content/60 text-lg leading-8">
              Welcome to our blog platform! We created this space for writers,
              developers, and creative minds to share their thoughts and
              experiences with the world.
            </p>
          </div>
        </section>

        <div className="border-t border-base-200" />

        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-2xl">
            🎯
          </div>
          <div>
            <h2 className="text-2xl font-extrabold mb-3 tracking-tight">
              Our Mission
            </h2>
            <p className="text-base-content/60 text-lg leading-8">
              Our mission is to make publishing simple, engaging, and accessible
              for everyone. Whether you're sharing tutorials, personal stories,
              or industry insights, this platform is designed to help your voice
              reach others.
            </p>
          </div>
        </section>

        <div className="border-t border-base-200" />

        <section>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-6 rounded-full bg-primary inline-block" />
            <h2 className="text-2xl font-extrabold tracking-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-base-100 border border-base-200 rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="font-extrabold text-lg mb-2">{title}</h3>
                <p className="text-base-content/55 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
