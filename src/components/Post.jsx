import { Link } from "react-router";
import Update_Delete_btns from "./Update_Delete_btns";

export default function Post({ post, fetchPosts }) {
  return (
    <div className="card card-side bg-base-100 border border-base-200 shadow-md hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <figure className="w-48 shrink-0 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={post.image}
          alt={post.title}
        />
      </figure>

      {/* Body */}
      <div className="card-body gap-2 py-5">
        {/* Author badge */}
        <div className="flex items-center gap-2">
          <div className="avatar placeholder">
            <div className="bg-primary/10 text-primary rounded-full w-6 text-xs font-bold flex items-center justify-center">
              {post.author.username[0].toUpperCase()}
            </div>
          </div>
          <span className="text-xs text-base-content/50 font-medium tracking-wide">
            {post.author.username}
          </span>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg font-extrabold leading-snug group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-base-content/60 text-sm line-clamp-2 leading-relaxed">
          {post.description}
        </p>

        {/* Actions */}
        <div className="card-actions justify-end items-center mt-auto pt-2 border-t border-base-200">
          <Update_Delete_btns post={post} fetchPosts={fetchPosts} />
          <Link
            className="btn btn-primary btn-sm gap-1 shadow-sm shadow-primary/30"
            to={`/post/${post._id}`}
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
