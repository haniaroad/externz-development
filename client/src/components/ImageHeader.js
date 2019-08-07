import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageData = [
  {
    id: 1,
    image: require("../assets/images/img1.png")
  },
  {
    id: 2,
    image: require("../assets/images/img2.png")
  },
  {
    id: 3,
    image: require("../assets/images/img3.jpg")
  },
  {
    id: 4,
    image: require("../assets/images/img1.png")
  }
];

const settings = {
  autoPlay: true,
  showThumbs: false,
  showStatus: false,
  dynamicHeight: true,
  swipeable: true,
  infiniteLoop: true
};

class ImageHeader extends Component {
  render() {
    return (
      <Carousel {...settings} style={{ height: 200, width: "100%" }}>
        {imageData.map((item, id) => {
          return (
            <div key={item.id} className='item-slider'>
              <img
                src={item.image}
                alt='headers-images'
                style={{
                  width: "100%",

                  height: "auto"
                }}
                resizeMode={"contain"}
              />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default ImageHeader;
