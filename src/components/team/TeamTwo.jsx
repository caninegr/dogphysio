import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1-m",
    title: "Στέλλα Κεχαγιά",
    designation: "PT/CCRP/cert.Acu",
    link: "#",
  },
  {
    delayAnimation: "100",
    img: "team-2-m",
    title: "Βασίλειος Παππάς",
    designation: "Εκπαίδευση & Εκγύμναση",
    link: "https://cane.gr",
  },
  {
    delayAnimation: "200",
    img: "team-3-m",
    title: "Χρύσουλα Πίχλιαβα",
    designation: "Το Χρυσό Κορίτσι / Endless Support",
    link: "#",
  },
  {
    delayAnimation: "300",
    img: "team-4-m",
    title: "Κέτσαπ",
    designation: "Emotional Support",
    link: "#",
  },
  {
    delayAnimation: "400",
    img: "new-member",
    title: "",
    designation: "",
    link: "/contact",
  },
];

const TeamTwo = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <a href={val.link}>
                {" "}
                <img
                  src={`/assets/img/root/team/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="#">{val.title}</a>
              </h6>
              <p className="ptf-team-member__function">{val.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamTwo;
