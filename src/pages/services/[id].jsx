import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ImageView from "@components/ImageView";
import Accordion from 'react-bootstrap/Accordion';

import { getAllServicesIds, getServiceData } from "@library/services";

const ServiceDetail = ( { postData } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={postData.title} pageDesc={"our values and vaulted us to the top of our industry."} />

      {/* Service-Detail-First Start */}
      <section className="gap about-first service-detail-first detail-page">
        <div className="container">
          
          {typeof postData.description0 != "undefined" &&
            <>
              {postData.description0.enabled == 1 &&
              <div className="row">
                <div className="col-lg-6">
                  <div className="who-we-are">
                    <div dangerouslySetInnerHTML={{__html : postData.description0.text1}} />
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="who-we-are">
                    <div dangerouslySetInnerHTML={{__html : postData.description0.text2}} />
                  </div>
                </div>
              </div>
              }
            </>
          }

          {typeof postData.gallery != "undefined" &&
            <>
              {postData.gallery.enabled == 1 &&
              <div className="row s-d-gallery">
                {postData.gallery.items.map((item, key) => (
                <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-3 col-md-6 col-sm-12"}>
                  <figure>
                    <a data-fancybox="gallery" href={item.image}>
                      <img className="img-fluid w-100" src={item.image} alt={item.alt} />
                    </a>
                  </figure>
                </div>
                ))}
              </div>
              }
              <ImageView />
            </>
          }
          
       
        </div>
      </section>
      {/* Service-Detail-First End */}
      
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
    const paths = getAllServicesIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getServiceData(params.id)

    return {
      props: {
        postData
      }
    }
}