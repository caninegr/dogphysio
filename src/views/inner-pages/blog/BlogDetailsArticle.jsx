import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import RelatedPost from "../../../components/blog/RelatedPost";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import { blogContent } from "../../../data/blogs";
import HeaderDefault2 from "../../../components/header/HeaderDefault2";

const BlogDetailsArticle = () => {
  let params = useParams();

  const blog =
    blogContent.filter((elm) => elm.id == params.id)[0] || blogContent[0];
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>DogPhysio - {blog.title}</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault2 />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-single-post">
            {/* <!--Post Header--> */}
            <header className="ptf-single-post__header ptf-single-post__header--style-1">
              <div className="container-xxl">
                <h1 className="ptf-single-post__title">{blog.title}</h1>
                <div className="ptf-single-post__meta">
                  <span className="cat">{blog.cat}</span>
                  <span className="date">{blog.date}</span>
                </div>
              </div>
            </header>

            {/* <!--Post Media--> */}
            <div className="ptf-single-post__media">
              <div className="container-xxl">
                <img
                  src={`/assets/img/blog/masonry/${blog.img}.png`}
                  style={{
                    maxHeight: "calc(100vh - 100px)",
                    objectFit: "contain",
                  }}
                  alt="blog post"
                  loading="lazy"
                />
              </div>
            </div>

            {/* <!--Post Wrapper--> */}
            <div className="ptf-single-post__wrapper">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                    {/* <!--Post Info--> */}
                    <div className="ptf-single-post__info">
                      <a className="author" href="/contact">
                        <i className="lnil lnil-user"></i>από <span>Στέλλα Κεχαγιά</span>
                      </a>
                      {/*
                      <a className="view" href="#">
                        <i className="lnil lnil-eye"></i>5,6k Views
                      </a>
                      <a className="comments" href="#">
                        <i className="lnil lnil-comments"></i>3 Comments
                      </a>
                      <a className="report" href="#">
                        <i className="lnil lnil-warning"></i>Report
                      </a>
                      */}
                    </div>

                    {/* <!--Post Excerpt--> */}
                    <div className="ptf-single-post__excerpt">
                      {blog.description}
                    </div>

                    {/* <!--Post Content--> */}
                    <div className="ptf-single-post__content">
                    <img
                        src={`/assets/img/blog/masonry/${blog.img1}.png`}
                        style={{
                          maxHeight: "calc(100vh - 100px)",
                          objectFit: "contain",
                        }}
                        alt="blog post"
                        loading="lazy"
                      />  
                      <br /><br />                    
                      <p>
                        <div className="content" dangerouslySetInnerHTML={{__html: blog.text1}}></div>
                      </p>
                      <img
                        src={`/assets/img/blog/masonry/${blog.img2}.png`}
                        style={{
                          maxHeight: "calc(100vh - 100px)",
                          objectFit: "contain",
                        }}
                        alt="blog post"
                        loading="lazy"
                      /> <br /><br />                     
                      <p>
                        <div className="content" dangerouslySetInnerHTML={{__html: blog.text2}}></div>
                      </p>


                      <br />
                      <p>
                        <div className="content" dangerouslySetInnerHTML={{__html: blog.text3}}></div>
                      </p>
                      {/* <!--Spacer--> 
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>*/}

                      {/*<ImageGridTwo />*/}

                      {/* <!--Spacer--> 
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>*/}
                      <p>
                      <div className="content" dangerouslySetInnerHTML={{__html: blog.text4}}></div>
                      </p>

                    </div>

                    {/* <!--Related Posts--> 
                    <div className="ptf-related-posts">
                      <h2 className="ptf-related-posts__title">
                        Σχετικά άρθρα
                      </h2>
                      <div className="ptf-isotope-grid">
                        <div
                          className="row"
                          style={{ "--bs-gutter-y": "2rem" }}
                        >
                          <RelatedPost />
                        </div>
                      </div>
                    </div>
                    {/* End .ptf-related-posts */}

                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetailsArticle;
