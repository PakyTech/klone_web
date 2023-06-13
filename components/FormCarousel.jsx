import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function CarouselFadeExample() {
  const carouselImage = [
    {
      id: 1,
      imageUrl: "/images/barber.png",
      text: "We have different kind of providers on our platform that can help ease your daily activities.",
      heading: "Find a Provider",
    },
    {
      id: 2,
      imageUrl: "/images/mini-mart2.png",
      text: "We have different kind of providers on our platform that can help ease your daily activities.",
      heading: "Compare to Find",
    },
    {
      id: 3,
      imageUrl: "/images/spa 1.png",
      text: "We provide you with booking informations so your session with the provider is secured.",
      heading: "Find a Provider",
    },
  ];
  return (
    <Carousel fade>
      {carouselImage.map((image) => {
        return (
          <Carousel.Item key={image.id}>
            <Image
              className="d-block w-100"
              src={image.imageUrl}
              alt="First slide"
              width={800}
              height={700}
            />
            <Carousel.Caption>
              <h3>{image.heading}</h3>
              <p>{image.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselFadeExample;
