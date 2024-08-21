import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const IndustrySlider = ({ imageArray }) => {
  const [index, setIndex] = useState(0);
  const handleLeft = () => {
    if (index === 0) {
      setIndex(imageArray.length - 1);
    } else setIndex(index - 1);
  };
  const handleRight = () => {
    if (index === imageArray.length - 1) {
      setIndex(0);
    } else setIndex(index + 1);
  };

  return (
    <div>
      <div
        className="mainDiv"
        style={{
          height: "200px",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          borderRadius: "6px",
        }}
      >
        {imageArray.map((img, key) => {
          return (
            <img
              src={img}
              style={{
                objectFit: "cover",
                translate: `${-100 * index}%`,
                transition: "translate 300ms ease-in-out",
                flexShrink: 0,
                width: "100%",
                height: "100%",
                flexGrow: 0,
              }}
            />
          );
        })}
      </div>
      <div
        className="justify-content-end"
        style={{
          position: "relative",
          bottom: "110px",
          margin: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={handleLeft}
            style={{ backgroundColor: "inherit", borderColor: "inherit" }}
          >
            <i class="fa-solid fa-chevron-left " aria-hidden="true"></i>
          </Button>

          <Button
            onClick={handleRight}
            style={{ backgroundColor: "inherit", borderColor: "inherit" }}
          >
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndustrySlider;
