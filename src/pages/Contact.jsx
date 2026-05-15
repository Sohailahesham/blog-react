export default function Contact() {
  const contacts = [
    { icon: "📧", label: "Email", value: "hello@myblog.com" },
    { icon: "🐦", label: "Twitter", value: "@myblog" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/myblog" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 flex items-center justify-center px-4 py-12">
      {/* Glow blobs */}
      <div className="fixed -top-32 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -bottom-32 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-3">
          <div className="badge badge-primary badge-outline text-xs font-semibold tracking-widest px-4 py-2">
            ✦ Reach Out
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-base-content/50 text-sm max-w-sm">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-base-100 border border-base-200 rounded-3xl shadow-xl p-8 md:p-10">
          <form className="flex flex-col gap-5">
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-base-content/70">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full focus:input-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-base-content/70">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full focus:input-primary transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-base-content/70">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                className="textarea textarea-bordered w-full focus:textarea-primary transition-all resize-none leading-relaxed"
              />
            </div>

            {/* Divider */}
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60" />

            <button
              type="submit"
              className="btn btn-primary w-full shadow-md shadow-primary/30 hover:shadow-primary/50 transition-all"
            >
              Send Message →
            </button>
          </form>

          {/* Contact info strip */}
          <div className="mt-8 pt-6 border-t border-base-200 grid sm:grid-cols-3 gap-4">
            {contacts.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-1"
              >
                <span className="text-xl">{icon}</span>
                <span className="text-xs font-bold text-base-content/40 uppercase tracking-widest">
                  {label}
                </span>
                <span className="text-sm text-base-content/60 font-medium">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
