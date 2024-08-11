import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

const Portfolio = () => {
  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/ly36kn0ug4k?si=HrSGg_DMvxfe00cv",
      title: "Project Overview",
      description: "A detailed look at our latest completed project."
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/ZvPvafWcZ8o?si=R8YSyJ8Yz_x3N9Aq",
      title: "Design Concept",
      description: "Exploring the innovative design concepts behind our constructions."
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/exampleLink2",
      title: "Development Process",
      description: "An in-depth overview of our development processes."
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/exampleLink3",
      title: "Field Work",
      description: "A closer look at our field work and on-site operations."
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/exampleLink4",
      title: "Completion Ceremony",
      description: "Highlights from the completion ceremony of our recent project."
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/exampleLink5",
      title: "Team Interviews",
      description: "Interviews with key team members on their project roles."
    },
    {
      id: 7,
      url: "https://www.youtube.com/embed/exampleLink6",
      title: "Client Feedback",
      description: "Client feedback and testimonials on our completed projects."
    },
    {
      id: 8,
      url: "https://www.youtube.com/embed/exampleLink7",
      title: "Future Plans",
      description: "A discussion on future plans and upcoming projects."
    },
    {
      id: 9,
      url: "https://www.youtube.com/embed/exampleLink8",
      title: "Technology Integration",
      description: "How we integrate the latest technology into our projects."
    }
  ];

  return (
    <Layouts>
      <PageBanner pageTitle={"Our Projects"} pageDesc={"Explore our video gallery to see our projects in action."} />

      {/* Our Project Videos Start */}
      <section className="gap project-style-one addition">
        <div className="container">
          <div className="row project-slider">
            {videos.map((video) => (
              <div key={video.id} className="col-lg-4 col-md-6 col-sm-12">
                <div className="project-post">
                  <figure>
                    <iframe
                      width="100%"
                      height="315"
                      src={video.url}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen>
                    </iframe>
                  </figure>
                  <div className="project-data">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Project Videos End */}
    </Layouts>
  );
};

export default Portfolio;
