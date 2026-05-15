import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import api from "../api/axios";
import Update_Delete_btns from "../components/Update_Delete_btns";
import Spinner from "../components/Spinner";

export default function OnePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  if (loading) return <Spinner />;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-6xl">🔍</div>
        <p className="text-xl font-bold text-error">Post not found</p>
        <Link to="/" className="btn btn-ghost btn-sm">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-base-100 to-base-100 py-12 px-4">
      <div className="max-w-3xl mx-auto mb-6">
        <Link
          to="/"
          className="btn btn-ghost btn-sm gap-2 text-base-content/60 hover:text-primary transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-base-100 rounded-3xl shadow-xl border border-base-200 overflow-hidden">
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-transparent to-transparent" />
        </div>

        <div className="p-8 md:p-12 -mt-8 relative">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {post.author && (
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-base-200">
              <div className="avatar placeholder">
                <div className="bg-primary/15 text-primary font-extrabold rounded-full w-12 text-lg flex items-center justify-center">
                  {post.author.username?.charAt(0).toUpperCase()}
                </div>
              </div>
              <div>
                <p className="font-bold text-base-content">
                  {post.author.username}
                </p>
                <p className="text-xs text-base-content/40 tracking-wide uppercase">
                  Blog Author
                </p>
              </div>

              <div className="ml-auto badge badge-primary badge-outline text-xs px-3 py-2 font-semibold tracking-wider">
                ✦ Article
              </div>
            </div>
          )}

          <p className="text-base-content/75 text-lg leading-9 tracking-wide">
            {post.description}
          </p>

          <div className="my-8 w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60" />

          <div className="flex justify-end">
            <Update_Delete_btns post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}
