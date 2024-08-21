import { PER_PAGE } from "./blog/page/[page]";
import Link from "next/link";
import Date from "@library/date";
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { getPaginatedPostsData } from "@library/posts";
import { industryObject } from "../data/sections/Industry";
import IndustrySlider from "../components/sliders/IndustrySlider";

const Blog = ({ posts, totalPosts, currentPage }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  console.log(industryObject);
  return (
    <Layouts>
      <PageBanner pageTitle={"Machineries"} pageDesc={""} />

      {/* Blog Style Three Start */}
      <section className="gap blog-style-one blog-style-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {industryObject?.map((item, key) => (
                <div className="col-lg-12" key={key}>
                  <div className="blog-post">
                    <figure>
                      <IndustrySlider imageArray={item.images} />
                    </figure>

                    <div>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Three End */}
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps() {
  const { posts, total } = getPaginatedPostsData(PER_PAGE, 1);

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1,
    },
  };
}
