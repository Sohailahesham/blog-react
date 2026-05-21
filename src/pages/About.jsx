export default function About() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#422ad5"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      ),
      title: "Easy Publishing",
      desc: "Create and manage blog posts with a clean, modern experience.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#422ad5"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      title: "Responsive Design",
      desc: "Seamless experience across desktop, tablet, and mobile.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#422ad5 "
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
          />
        </svg>
      ),
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#422ad5"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="#422ad5"
              viewBox={"2 2 20 20"}
              transform={"scale(-1,1) "}
              className="size-8"
            >
              {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
              <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path>
              <path d="M13 4.07V2h-2v2.07A8 8 0 0 0 4.07 11H2v2h2.07A8 8 0 0 0 11 19.93V22h2v-2.07A8 8 0 0 0 19.93 13H22v-2h-2.07A8 8 0 0 0 13 4.07M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6"></path>
            </svg>
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
