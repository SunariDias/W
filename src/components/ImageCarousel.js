import { Carousel } from "react-bootstrap";

const ImageCarousel = () => {
  return (
    <Carousel
      variant="dark"
      style={{ paddingTop: "10px", paddingBottom: "10px" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxWidth: 1800, maxHeight: 400 }}
          src={process.env.PUBLIC_URL + "/images/Carousell-img-1.jpg"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxWidth: 1800, maxHeight: 400 }}
          src={process.env.PUBLIC_URL + "/images/Carousell-img-2.jpg"}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxWidth: 1800, maxHeight: 400 }}
          src={process.env.PUBLIC_URL + "/images/Carousell-img-3.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
