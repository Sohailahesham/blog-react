import { Link } from "react-router";

export default function FloatingAddButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <div className="absolute inset-0 rounded-full bg-primary/40 blur-md scale-110 group-hover:scale-125 transition-transform duration-300 pointer-events-none" />

      <Link
        to="/create-post"
        className="relative btn btn-circle btn-lg btn-primary shadow-lg shadow-primary/40 group-hover:scale-110 group-hover:shadow-primary/60 transition-all duration-300"
      >
        <svg
          aria-label="New post"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-6"
        >
          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>
      </Link>
    </div>
  );
}