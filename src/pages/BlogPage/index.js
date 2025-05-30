import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import MainLayout from "../../layouts/MainLayout";
import banner from "../../assets/img/breadcrumb.jpg";
import { Link } from "react-router-dom";
import { FaCalendar, FaComment, FaLongArrowAltRight } from "react-icons/fa";
import blogPosts from "../../data/blogs";
import SideBar from "../../components/sidebar";
import Search from "../../components/search";

const BlogPage = () => {
  return (
    <MainLayout>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideBar/>
            </div>
            <div className="col-lg-9">
              <Search/>
            </div>
          </div>
        </div>
      </section>
      <section className="breadcrumb-section set-bg">
        <img src={banner} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Blog</h2>
                <div className="breadcrumb__option">
                  <Link to="/">Home</Link>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span className="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Beauty (20)</a>
                    </li>
                    <li>
                      <a href="#">Food (5)</a>
                    </li>
                    <li>
                      <a href="#">Life Style (9)</a>
                    </li>
                    <li>
                      <a href="#">Travel (10)</a>
                    </li>
                  </ul>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Recent News</h4>
                  <div className="blog__sidebar__recent">
                    <a href="#" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src="img/blog/sidebar/sr-1.jpg" alt="" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          09 Kinds Of Vegetables
                          <br /> Protect The Liver
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src="img/blog/sidebar/sr-2.jpg" alt="" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          Tips You To Balance
                          <br /> Nutrition Meal Day
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src="img/blog/sidebar/sr-3.jpg" alt="" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          4 Principles Help You Lose <br />
                          Weight With Vegetables
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div className="blog__sidebar__item__tags">
                    <a href="#">Apple</a>
                    <a href="#">Beauty</a>
                    <a href="#">Vegetables</a>
                    <a href="#">Fruit</a>
                    <a href="#">Healthy Food</a>
                    <a href="#">Lifestyle</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {blogPosts.map((blog, index) => (
                  <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src={blog.img} alt="" />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li>
                            <FaCalendar /> {blog.date}
                          </li>
                          <li>
                            <FaComment /> {blog.comments}
                          </li>
                        </ul>
                        <h5>
                          <a href="#">{blog.title}</a>
                        </h5>
                        <p>
                          {blog.excerpt}{" "}
                        </p>
                        <a href="#" className="blog__btn">
                          READ MORE <span className="arrow_right"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-lg-12">
                  <div className="product__pagination blog__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">
                      <FaLongArrowAltRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
