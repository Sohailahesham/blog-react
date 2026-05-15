import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact-us", label: "Contact" },
  ];

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-primary font-bold"
      : "text-base-content/60 hover:text-primary transition-colors duration-200";

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-base-100/80 border-b border-base-200 shadow-sm">
      <div className="navbar max-w-6xl mx-auto px-4">
        {/* ── Logo ── */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md shadow-primary/30 group-hover:scale-110 transition-transform duration-200">
              <span className="text-primary-content font-black text-sm">B</span>
            </div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Blog
            </span>
          </Link>
        </div>

        {/* ── Desktop Nav ── */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-base-content/60 hover:bg-base-200 hover:text-base-content"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            {user && (
              <li>
                <NavLink
                  to="/my-posts"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-base-content/60 hover:bg-base-200 hover:text-base-content"
                    }`
                  }
                >
                  My Posts
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <div className="avatar placeholder">
                  <div className="bg-primary/15 text-primary font-extrabold rounded-full w-8 text-sm flex items-center justify-center">
                    {user.username?.charAt(0).toUpperCase()}
                  </div>
                </div>
                <span className="text-sm font-semibold text-base-content/70">
                  {user.username}
                </span>
              </div>

              <button
                onClick={logout}
                className="btn btn-sm btn-outline btn-error rounded-xl hover:shadow-md hover:shadow-error/20 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="btn btn-sm btn-ghost rounded-xl text-base-content/70 hover:text-primary"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="btn btn-sm btn-primary rounded-xl shadow-md shadow-primary/30 hover:shadow-primary/50 transition-all"
              >
                Get Started
              </Link>
            </div>
          )}
          
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm btn-square rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 border border-base-200 rounded-2xl shadow-xl z-50 mt-3 w-52 p-2 gap-1"
            >
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `rounded-xl text-sm font-medium ${isActive ? "bg-primary/10 text-primary font-bold" : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              {user && (
                <li>
                  <NavLink
                    to="/my-posts"
                    className={({ isActive }) =>
                      `rounded-xl text-sm font-medium ${isActive ? "bg-primary/10 text-primary font-bold" : ""}`
                    }
                  >
                    My Posts
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
