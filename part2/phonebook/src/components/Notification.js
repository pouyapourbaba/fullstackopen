import React from "react";

const Notification = ({ notification }) => {
  if (!notification.message) return null;

  const dynamicStyle =
    notification.type === "error" ? { color: "red" } : { color: "green" };

  console.log("dynamicStyle ", dynamicStyle);

  return (
    <div className="notification" style={dynamicStyle}>
      {notification.message}
    </div>
  );
};

export default Notification;
