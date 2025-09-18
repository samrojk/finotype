import React from "react";
import { account } from "../lib/appwrite";

const delmodal = ({ isOpen, onClose, setIsLoggedIn }) => {
  if (!isOpen) return null;

  // Handle "Delete" → just logout (end session)
  const handleLogout = async () => {
    try {
      await account.deleteSession("current"); // log out
      setIsLoggedIn(false); // update state in App.jsx
      onClose(); // close modal
    } catch (err) {
      console.error("Logout (delete) failed:", err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-50">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6 text-center animate-fadeIn">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Confirm Account Deletion
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete your account? <br />
          This action <span className="font-semibold text-red-500">
            cannot
          </span>{" "}
          be undone.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            diabled
            onClick={async () => {
              await handleLogout();
              setTimeout(() => {
                window.location.reload();
              }, 300); // 0.3 second
            }}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default delmodal;
