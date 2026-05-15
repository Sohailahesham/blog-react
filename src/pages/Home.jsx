import { useContext, useEffect, useState } from "react";
import api from "../api/axios.js";
import FloatingAddButton from "../components/FloatingAddButton";
import { AuthContext } from "../providers/AuthProvider";
import PostsList from "../components/PostsList";
import Spinner from "../components/Spinner";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);

  const { user } = useContext(AuthContext);

  if (posts.length === 0) return <Spinner />;

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 border-b border-base-200">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-center justify-center text-center py-20 px-4 gap-4">
          {/* Badge */}
          <div className="badge badge-primary badge-outline font-semibold tracking-widest text-xs uppercase px-4 py-3">
            ✦ Latest Stories
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">
            Welcome to Our Blog
          </h1>

          <p className="text-base-content/60 text-lg max-w-md">
            Discover fresh ideas, stories, and insights — curated just for you.
          </p>

          {/* Divider with shine */}
          <div className="mt-2 w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70" />
        </div>
      </div>

      {/* Posts Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-6 rounded-full bg-primary inline-block" />
          <h2 className="text-xl font-bold text-base-content/80 tracking-tight">
            Recent Posts
          </h2>
        </div>

        <PostsList posts={posts} fetchPosts={fetchPosts} />
      </div>

      {user && <FloatingAddButton />}
    </div>
  );
}
