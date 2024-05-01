import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { blogContent } from "../../data/blogs";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

const BlogMasonryGrid = ({ searchQuery }) => {
  const [filtered, setFiltered] = useState(blogContent);
  useEffect(() => {
    if (searchQuery) {
      const items = blogContent.filter(
        (elm) =>
          elm.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          elm.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFiltered(items);
    } else {
      setFiltered(blogContent);
    }
  }, [searchQuery]);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filtered.map((item, i) => (
          <div className="grid-item" key={i}>
            {/* <!--Blog Post--> */}
            <article className="ptf-post ptf-post--style-2">
              <div className="ptf-post__media">
                <img
                  src={`/assets/img/blog/masonry/${item.img}.png`}
                  alt=""
                  loading="lazy"
                />
                <div className="ptf-post__media__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta">
                      <span className="cat">{item.cat}</span>
                      <span className="date">{item.date}</span>
                    </div>
                    <h3 className="ptf-post__title">{item.title}</h3>
                  </header>
                </div>
              </div>
              {/* End .ptf-post */}
              <div className="ptf-post__content">
                <header className="ptf-post__header">
                  <div className="ptf-post__meta">
                    <span className="cat">{item.cat}</span>
                    <span className="date">{item.date}</span>
                  </div>
                  <h3 className="ptf-post__title">
                    <Link to={`/blog-details2/${item.id}`}>{item.title}</Link>
                  </h3>
                </header>
                <div className="ptf-post__excerpt">
                  <p>{item.description}</p>
                </div>
                <footer className="ptf-post__footer">
                  <Link
                    className="ptf-read-more-link"
                    to={`/blog-details2/${item.id}`}
                  >
                    Διαβασε
                  </Link>
                </footer>
              </div>
              {/* End .ptf-post__content */}
            </article>
          </div>
        ))}
      </Masonry>
      {!filtered.length && (
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          Δεν βρέθηκαν αποτελέσματα.
        </div>
      )}
    </>
  );
};

export default BlogMasonryGrid;
