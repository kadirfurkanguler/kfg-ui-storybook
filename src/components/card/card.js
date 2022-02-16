import React from "react";
const Card = ({
  image,
  title,
  text,
  link,
  linkText,
  titleColor,
  textColor,
  linkColor,
  radius,
  linkIsButton,
  popularity,
}) => {
  return (
    <div style={{
      minWidth: '200px',
    }}>
      <div
        className={["card", radius && `rounded-${radius}`].join(" ")}
      >
        <div className="card-body">
          <h5 className={["card-title", `text-${titleColor}`].join(" ")}>
            {title}
          </h5>
          <h6 className={["card-title"].join(" ")}>
            Popularity: {popularity.toString()}
          </h6>
          <p className={["card-text", `text-${textColor}`].join(" ")}>{text}</p>
          {linkIsButton ? (
            <a href={link} className={["btn", `btn-${linkColor}`].join(" ")}>
              {linkText}
            </a>
          ) : (
            link && (
              <a href={link} className={[`text-${linkColor}`].join(" ")}>
                {linkText}
              </a>
            )
          )}
        </div>
        {image && (
          <img className="card-img-top" src={image} alt="Card image cap" />
        )}
      </div>
    </div>
  );
};
export default Card;
