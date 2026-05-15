import { useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../providers/AuthProvider";
import FloatingAddButton from "../components/FloatingAddButton";
import PostsList from "../components/postsList";
import Spinner from "../components/Spinner";

export default function MyPosts() {
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    const getMyPosts = async () => {
      try {
        const res = await api.get("/posts/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMyPosts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getMyPosts();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-base-100 to-base-100">
      {/* Glow blobs */}
      <div className="fixed -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative border-b border-base-200 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-4">
          {/* Avatar */}
          <div className="avatar placeholder">
            <div className="bg-primary/15 text-primary font-black rounded-full w-16 text-2xl flex items-center justify-center ring-4 ring-primary/20">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
          </div>

          <div className="badge badge-primary badge-outline text-xs font-semibold tracking-widest px-4 py-2">
            ✦ Your Writing
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Posts
          </h1>

          <p className="text-base-content/50 text-sm">
            Everything published by{" "}
            <span className="text-primary font-semibold">{user?.username}</span>
          </p>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60" />
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {myPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center text-3xl">
              📝
            </div>
            <h2 className="text-xl font-bold text-base-content/60">
              No posts yet
            </h2>
            <p className="text-base-content/40 text-sm">
              Hit the + button to write your first story.
            </p>
          </div>
        ) : (
          <>
            {/* Post count pill */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-6 rounded-full bg-primary inline-block" />
              <h2 className="text-base font-bold text-base-content/60 tracking-tight">
                {myPosts.length} {myPosts.length === 1 ? "post" : "posts"}{" "}
                published
              </h2>
            </div>

            <PostsList posts={myPosts} />
          </>
        )}
      </div>

      <FloatingAddButton />
    </div>
  );
}
