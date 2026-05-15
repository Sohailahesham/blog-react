import { useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate, useParams, Link } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { validate } from "../validations/validate";
import { postSchema } from "../validations/schemas";

export default function PostForm({ mode = "create" }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = mode === "edit";
  const { token } = useContext(AuthContext);

  const [form, setForm] = useState({ title: "", description: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEdit && id) {
      const fetchPost = async () => {
        try {
          const res = await api.get(`/posts/${id}`);
          setForm({
            title: res.data.title,
            description: res.data.description,
            image: res.data.image,
          });
        } catch (err) {
          console.log(err);
        }
      };
      fetchPost();
    }
  }, [isEdit, id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate(postSchema, form, setErrors)) return;
    try {
      setLoading(true);
      if (isEdit) {
        await api.put(`/posts/${id}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Post updated successfully ✨");
      } else {
        await api.post("/posts", form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Post created successfully ✨");
      }
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 flex items-center justify-center px-4 py-12">
      <div className="fixed -top-32 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -bottom-32 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-base-content/50 hover:text-primary transition-colors mb-6"
        >
          ← Back to Home
        </Link>

        <div className="bg-base-100 border border-base-200 rounded-3xl shadow-xl p-8 md:p-10">
          <div className="mb-8">
            <div className="badge badge-primary badge-outline text-xs font-semibold tracking-widest px-4 py-2 mb-4">
              {isEdit ? "✦ Editing" : "✦ New Post"}
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              {isEdit ? "Update Your Post" : "Create a New Post"}
            </h1>
            <p className="text-base-content/50 text-sm mt-1">
              {isEdit
                ? "Make your changes below and save."
                : "Fill in the details to publish your story."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-base-content/70">
                Title
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Give your post a great title..."
                className={`input input-bordered w-full focus:input-primary transition-all ${errors.title ? "input-error" : ""}`}
              />
              {errors.title && (
                <p className="text-error text-xs">{errors.title}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-base-content/70">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Write your story here..."
                rows={5}
                className={`textarea textarea-bordered w-full focus:textarea-primary transition-all resize-none leading-relaxed ${errors.description ? "textarea-error" : ""}`}
              />
              {errors.description && (
                <p className="text-error text-xs">{errors.description}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-base-content/70">
                Image URL
              </label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className={`input input-bordered w-full focus:input-primary transition-all ${errors.image ? "input-error" : ""}`}
              />
              {errors.image && (
                <p className="text-error text-xs">{errors.image}</p>
              )}

              {form.image && !errors.image && (
                <div className="mt-2 rounded-2xl overflow-hidden border border-base-200 h-40">
                  <img
                    src={form.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              )}
            </div>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 my-1" />

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full shadow-md shadow-primary/30 hover:shadow-primary/50 transition-all"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : isEdit ? (
                "Save Changes →"
              ) : (
                "Publish Post →"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
 