import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function Update_Delete_btns({ post, fetchPosts }) {
  const { user } = useContext(AuthContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/posts/${post._id}`);

      setShowConfirm(false);

      toast.success("Post deleted successfully!");

      await fetchPosts();
    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
    }
  };

  if (!user || user.username !== post.author.username) return null;

  return (
    <>
      <div className="flex items-center gap-1">
        <Link
          to={`/edit/${post._id}`}
          className="btn btn-sm btn-ghost btn-square rounded-xl text-base-content/40 hover:text-primary hover:bg-primary/10 transition-all duration-200"
          aria-label="Edit post"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Link>

        <button
          className="btn btn-sm btn-ghost btn-square rounded-xl text-base-content/40 hover:text-error hover:bg-error/10 transition-all duration-200"
          onClick={() => setShowConfirm(true)}
          aria-label="Delete post"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>

      {showConfirm && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box rounded-2xl border border-base-200 shadow-xl">
            <div className="flex flex-col items-center text-center gap-3 py-2">
              <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-error"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg">Delete this post?</h3>
              <p className="text-base-content/50 text-sm">
                This action cannot be undone.
              </p>
            </div>
            <div className="modal-action justify-center gap-3 mt-4">
              <button
                className="btn btn-ghost btn-sm rounded-xl"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-error btn-sm rounded-xl shadow-md shadow-error/30"
                onClick={handleDelete}
              >
                Yes, delete it
              </button>
            </div>
          </div>
          <div
            className="modal-backdrop bg-base-300/50 backdrop-blur-sm"
            onClick={() => setShowConfirm(false)}
          />
        </dialog>
      )}
    </>
  );
}
