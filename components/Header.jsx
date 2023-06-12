import React from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/images";
const Header = () => {
  return (
    <>
      <div className="header">
        <main className="landing">
          <div className="logo"> 
            <h1>hello</h1>
          </div>
        {images.map((image) => {
          return (
            <Link href={`/${image.id}`} key={image.id}>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${image.path})`,
                  height: "100vh",
                  width: "45vh",
                  backgroundBlendMode:'overlay',
                  backgroundColor: '#383838'
                }}
              >
                <div className="image-details justify-text-left">
                  <div className="services">
                    <h2>{image.service}</h2>
                  </div>
                  <div className="count ">
                    <h3 className="fs-1 fw-bold text-left">{image.number}</h3>
                    <h5>
                      {image?.number > 1 && image?.service === 'Business'
                        ? image.service.concat("es")
                        : image.service.concat("s")
                        }
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        </main>
      </div>
    </>
  );
};

export default Header;
