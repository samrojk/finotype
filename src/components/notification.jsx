import React, { useEffect, useState } from "react";
import { FiWifi, FiWifiOff, FiX } from "react-icons/fi";

const Notification = () => {
  // State to track if user is online or offline
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // State to control visibility of the notification
  const [visible, setVisible] = useState(false);

  // Timer reference for auto-hide
  let offlineTimer;

  useEffect(() => {
    // Function when user comes back online
    const handleOnline = () => {
      setIsOnline(true);
      setVisible(true);

      // Hide notification automatically after 5 seconds
      setTimeout(() => setVisible(false), 5000);
    };

    // Function when user goes offline
    const handleOffline = () => {
      setIsOnline(false);
      setVisible(true);

      // Auto-hide offline notification after 60 seconds if not closed manually
      offlineTimer = setTimeout(() => setVisible(false), 60000);
    };

    // Listen to online/offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners + timer
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearTimeout(offlineTimer);
    };
  }, []);

  return (
    <div
      // Smooth transition for showing/hiding notification
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      <div
        // Glass effect + color-coded styling
        className={`flex items-center p-4 text-sm rounded-lg border backdrop-blur-md transition-all duration-300 ease-in-out
        ${
          isOnline
            ? "text-green-600 border-green-300 bg-green-200/40 dark:bg-green-200/30"
            : "text-red-600 border-red-300 bg-red-300/40 dark:bg-red-200/30"
        }`}
        role="alert"
      >
        {/* Icon for status */}
        <span className="shrink-0 w-5 h-5">
          {isOnline ? <FiWifi size={20} /> : <FiWifiOff size={20} />}
        </span>

        {/* Notification message */}
        <div className="ms-3 font-medium">
          {isOnline
            ? "You are back online."
            : "You are offline. Check your connection."}
        </div>

        {/* Close button (no focus ring) */}
        <button
          type="button"
          className="ms-[4px] -mx-1.5 -my-1.5 rounded hover:opacity-75 transition-opacity duration-200 inline-flex items-center justify-center h-8 w-8"
          onClick={() => setVisible(false)}
        >
          <FiX size={14} />
        </button>
      </div>
    </div>
  );
};

export default Notification;
