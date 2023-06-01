import React from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/images";
const Header = () => {
  return (
    <>
      <div className="header">
        {images.map((image) => {
          return (
            <Link href={`/${image.id}`} key={image.id}>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${image.path})`,
                  height: "100vh",
                  width: "337px",
                }}
              >
                <div className="image-details">
                  <div className="services">
                    <h2>{image.service}</h2>
                  </div>
                  <div className="count">
                    <h3 className="fs-1 fw-bold">{image.number}</h3>
                    <h5>
                      {image.service === "Business"
                        ? image.service + "es"
                        : image.service + "s"}
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Header;
