import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedTeamData } from "@library/team";

const Team = ( props ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={" Gallery of Images "} pageDesc={"Our Gallery of Images of completed and Ongoing project"} />
       {/* Gallery Style One Start */}
      <div className="gallery-style-one">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-1.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-1.jpeg" alt="Gallery 1" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-2.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-2.jpeg" alt="Gallery 2" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-3.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-3.jpeg" alt="Gallery 3" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-4.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-4.jpeg" alt="Gallery 4" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-5.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-5.jpeg" alt="Gallery 5" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-6.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-6.jpeg" alt="Gallery 6" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-7.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-7.jpeg" alt="Gallery 7" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-8.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-8.jpeg" alt="Gallery 8" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Style One End */}
     
    
      {/* Team Style Two End */}
    </Layouts>
  );
};
export default Team;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();

  return {
    props: {
      team: allTeam
    }
  }
}