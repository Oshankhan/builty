import Layouts from "@layouts/Layouts";

import { getAllPostsIds, getPostData, getRelatedPosts } from "@library/posts";
import Date from '@library/date';
import ImageView from "@components/ImageView";

import PageBanner from "@components/PageBanner";

const PostsDetail = ( props ) => {
  
  const postData = props.data;

  return (
    <Layouts>
      <PageBanner pageTitle={"Machinery Detail"} pageDesc={"Discover Our Professional-Grade Machinery for Superior Construction Performance"} />

      {/* Blog Style Three Start */}
      <section className="gap blog-style-one blog-detail detail-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post ">
                <div className="blog-image">
                  <figure>
                    <img src={postData.image} alt={postData.title} />
                  </figure>
                </div>
                <div className="blog-data">
                  <span className="blog-date"><Date dateString={postData.date} /></span>
                  <h2>{postData.title}</h2>
                  <div className="blog-author d-flex-all justify-content-start">
                    <div className="author-img">
                      <figure>
                        <img src={postData.author.avatar} alt={postData.author.name} />
                      </figure>
                    </div>
                    <div className="details">
                      <h3> <span>by</span> {postData.author.name}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                {typeof postData.gallery != "undefined" &&
                  <>
                    {postData.gallery.enabled == 1 &&
                      <div className="row justify-content-center">
                          {postData.gallery.items.map((item, key) => (
                          <div key={`gallery-item-${key}`} className={ postData.gallery.cols == 3 ? "col-lg-4" : "col-lg-6"}>
                            <figure>
                              <a data-fancybox="gallery" href={item.image}>
                                <img src={item.image} alt={item.alt} />
                              </a>
                            </figure>
                          </div>
                          ))}
                      </div>
                    }
                  </>
                }

                {typeof postData.additional != "undefined" &&
                  <>
                    {postData.additional.enabled == 1 &&
                    <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: postData.additional.content }} />
                    }
                  </>
                }

                

               

                
              </div>
            </div>

            <div className="col-lg-4">
              
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Three End */}
      
      <ImageView />
    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const relatedPosts = await getRelatedPosts(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}