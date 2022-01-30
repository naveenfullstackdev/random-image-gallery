import React from "react";
import ImageCard from "./ImageCard";
import ImageCardData from "./ImageCardData";

const App = () => {
  return ImageCardData.map(currImgCardObj => {
    return (
      <>
        <ImageCard
          imgSrc={currImgCardObj.imgSrc}
          imgAlt={currImgCardObj.imgAlt}
          imgTitle={currImgCardObj.imgTitle}
          imgDes={currImgCardObj.imgDes}
        />
      </>
    );
  });
};

export default App;
