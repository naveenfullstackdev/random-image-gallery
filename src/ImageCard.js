import React from "react";
import "./index.css";

const ImageCard = props => {
  return (
    <>
      <section className="img-card">
        <img src={props.imgSrc} alt={props.imgAlt} />
        <section className="img-card-des">
          <h2>{props.imgTitle}</h2>
          <p>{props.imgDes}</p>
        </section>
      </section>
    </>
  );
};

export default ImageCard;
