import React from "react";
import { Link } from "react-router-dom";

const footerItems = [
  { itemName: "Συχνές Ερωτήσεις", link: "/faq" },
  { itemName: "Όροι & Προϋποθέσεις", link: "/terms" },
  { itemName: "Πολιτική Απορρήτου", link: "/privacy" },
  { itemName: "Works", link: "" },
  { itemName: "Studio", link: "" },
  { itemName: "News", link: "" },
];

const FooterList = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
        <li key={i}>
          <Link to={item.link}>{item.itemName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
