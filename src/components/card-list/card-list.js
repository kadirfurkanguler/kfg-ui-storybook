import React, { useState } from "react";
import Card from "../card/card";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={["text-danger", className].join(" ")} onClick={onClick}>
      <IoIosArrowForward size={22} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={["text-danger", className].join(" ")} onClick={onClick}>
      <IoIosArrowBack size={22} />
    </div>
  );
};
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const CardList = ({ datas, filter }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [filteredData, setfilteredData] = useState(datas);
  const changeState = (param) => {
    setActiveTab(param);
    param === 0
      ? setfilteredData(datas)
      : param === 1
      ? setfilteredData([...datas].filter((item) => item.popularity === true))
      : setfilteredData([...datas].filter((item) => item.popularity === false));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="row bg-primary text-white rounded-3 mb-3">
            <div
              onClick={() => changeState(0)}
              className={[
                "col-4",
                "text-center",
                activeTab === 0 && "bg-success rounded-3",
              ].join(" ")}
              style={{ cursor: "pointer" }}
            >
              All
            </div>
            <div
              onClick={() => changeState(1)}
              className={[
                "col-4",
                "text-center",
                activeTab === 1 && "bg-success rounded-3",
              ].join(" ")}
              style={{ cursor: "pointer" }}
            >
              True
            </div>
            <div
              onClick={() => changeState(2)}
              className={[
                "col-4",
                "text-center",
                activeTab === 2 && "bg-success rounded-3",
              ].join(" ")}
              style={{ cursor: "pointer" }}
            >
              False
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Slider {...settings}>
          {filteredData.map((data) => (
            <Card
              popularity={data.popularity}
              image={data.image}
              title={data.title}
              text={data.text}
              link={data.link}
              linkText={data.linkText}
              titleColor={data.titleColor}
              textColor={data.textColor}
              linkColor={data.linkColor}
              radius={data.radius}
              linkIsButton={data.linkIsButton}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default CardList;
