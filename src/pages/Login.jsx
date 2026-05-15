import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import api from "../api/axios";
import { useNavigate, Link } from "react-router";
import toast from "react-hot-toast";
import { validate } from "../validations/validate";
import { loginSchema } from "../validations/schemas";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate(loginSchema, form, setErrors)) return;
    try {
      const res = await api.post("/auth/login", form);
      login(res.data.token);
      toast.success("Welcome back!");
      navigate("/");
    } catch (err) {
      console.log(err);
      const data = err.response?.data;
      let msg = data.error.message || "Login failed";

      toast.error(msg);
      setErrors((prev) => ({ ...prev, server: msg }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 flex items-center justify-center px-4 py-12">
      <div className="fixed -top-32 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -bottom-32 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md bg-base-100 border border-base-200 rounded-3xl shadow-xl p-8 md:p-10">
        <div className="text-center mb-8">
          <div className="badge badge-primary badge-outline text-xs font-semibold tracking-widest px-4 py-2 mb-4">
            ✦ Welcome Back
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Sign In</h1>
          <p className="text-base-content/50 text-sm mt-1">
            Good to see you again
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-base-content/70">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={`input input-bordered w-full focus:input-primary transition-all ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && (
              <p className="text-error text-xs mt-0.5">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-base-content/70">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={form.password}
              onChange={handleChange}
              className={`input input-bordered w-full focus:input-primary transition-all ${errors.password ? "input-error" : ""}`}
            />
            {errors.password && (
              <p className="text-error text-xs mt-0.5">{errors.password}</p>
            )}
          </div>

          {errors.server && (
            <div className="alert alert-error py-2 px-4 text-sm rounded-xl">
              <span>⚠ {errors.server}</span>
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-full mt-2 shadow-md shadow-primary/30"
          >
            Sign In →
          </button>

          <p className="text-center text-sm text-base-content/50 mt-1">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
