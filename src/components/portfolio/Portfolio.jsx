import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const portfolioContent = [
  {
    img: "justin/work-1",
    categorie: "Justin",
    title: "Δυσπλασία Ισχίων",
    link: "/works-showcase-1",
  },  
  {
    img: "freud/work-1",
    categorie: "Freud",
    title: "Διάχυτο Νευρομυϊκό Νόσημα",
    link: "/works-showcase-2",
  },
  {
    img: "pongo/work-1",
    categorie: "Pongo",
    title: "Οστεοαρθρίτιδα / Γηριατρικό",
    link: "/works-showcase-3"
  },
  {
    img: "elmo/work-1",
    categorie: "Elmo",
    title: "Ρήξη Χιαστού",
    link: "/works-showcase-4",
  },
  {
    img: "najac/work-1",
    categorie: "Najac",
    title: "Προληπτική Φυσικοθεραπεία",
    link: "/works-showcase-5",
  },
  {
    img: "simba/work-1",
    categorie: "Simba",
    title: "Νευρολογικό Περιστατικό",
    link: "/works-showcase-6",
  },
  {
    img: "wolfgang/work-1",
    categorie: "Wolfgang",
    title: "Νευροχειρουργική Επέμβαση στον Αυχένα ",
    link: "/works-showcase-7",
  }  
];

const Portfolio = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="ptf-content-slider swiper-container slide-portfolio">
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {/* <!--Portfolio Item--> */}
          {portfolioContent.map((item, i) => (
            <article className="ptf-work ptf-work--style-3" key={i}>
              <div className="ptf-work__media">
                <Link to={item.link} className="ptf-work__link"></Link>
                <img
                  src={`/assets/img/portfolio/single-work/${item.img}.png`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="ptf-work__meta">
                <div className="ptf-work__category">{item.categorie}</div>
                <h4 className="ptf-work__title">
                  <Link to={item.link}>{item.title}</Link>
                </h4>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
