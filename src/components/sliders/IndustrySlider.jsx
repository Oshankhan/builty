import React, { useState } from "react";


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
      <div className="mainDiv" style={{height:"200px", width:"100%", overflow:"hidden", display:"flex"}}>
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
      
      <button onClick={handleLeft} style={{position:"relative" , left:"20px", bottom:"100px"}}>previous</button>
      <button onClick={handleRight} style={{position:"relative" , left:"40vw", bottom:"100px"}}>next</button>
    </div>
  );
};

export default IndustrySlider;
