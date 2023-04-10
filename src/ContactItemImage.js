import React from "react";

function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact_item_image">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}

export default ContactItemImage;
