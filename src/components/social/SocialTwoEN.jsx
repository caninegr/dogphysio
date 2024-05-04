import React from "react";

const socialList = [
  {
    iconName: "socicon-flag",
    link: "/",
    target:"_self",
  },
  {
    iconName: "socicon-mail",
    link: "/contact",
    target:"_self",
  },
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/profile.php?id=100063698132030&sk=about",
    target:"_blank",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/dog_physio_stella_kechagia/",
    target:"_blank",
  }
];

const SocialTwo = () => {
  return (
    <>  
      
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target={val.target}
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
      <a class="ptf-social-icon ptf-social-icon--style-1" target='_self' href='/'><img src='/assets/img/root/flag-el.png' /></a>
    </>
  );
};

export default SocialTwo;
