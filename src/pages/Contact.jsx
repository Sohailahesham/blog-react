export default function Contact() {
  const contacts = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill={"#422ad5"}
          viewBox={"2 2 20 20"}
          transform={"scale(-1,1) "}
        >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"></path>
        </svg>
      ),
      label: "Email",
      value: "hello@myblog.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill={"#03A9F4"}
          viewBox={"2 2 20 20"}
        >
          <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.04 4.04 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.03 4.03 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.02 4.02 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.46 11.46 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a8 8 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8 8 0 0 0 2.319-.624 8.7 8.7 0 0 1-2.019 2.083"></path>
        </svg>
      ),
      label: "Twitter",
      value: "@myblog",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill={"#0077B5"}
          viewBox={"2 2 20 20"}
        >
          <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376m4.254 6.034v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path>
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/myblog",
    },
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
                <span className="text-2xl">{icon}</span>
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
