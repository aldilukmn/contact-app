import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  return (
    <div className="contact_list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
