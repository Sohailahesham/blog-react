import Post from "./Post";

export default function PostsList({ posts, fetchPosts  }) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <div className="text-6xl">📭</div>
        <h1 className="text-2xl font-bold text-base-content/70">
          No posts found
        </h1>
        <p className="text-base-content/40 text-sm">
          Check back later for new stories.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <Post key={post._id} post={post} fetchPosts={fetchPosts} />
      ))}
    </div>
  );
}
