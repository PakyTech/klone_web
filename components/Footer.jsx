import FacebookIcon from "@/public/assets/images/js/socials/FacebookIcon";
import InstagramIcon from "@/public/assets/images/js/socials/InstagramIcon";
import LogoIcon from "@/public/assets/images/js/socials/LogoIcon";
import TwitterIcon from "@/public/assets/images/js/socials/TwitterIcon";
import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";

const Footer = ({colorTheme}) => {

  let Links = [
      
    {
      name: 'logo',
      icon: (
        <LogoIcon color={colorTheme === 'light' ? 'white' : '#000000'}/>
      )

    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com',
      icon: (
        <InstagramIcon color={colorTheme === 'light' ? 'white' : '#000000'}/>
      )

    },
    {
      name: 'twitter',
      link: 'https://www.instagram.com',
      icon: (
        <TwitterIcon color={colorTheme === 'light' ? 'white' : '#000000'}/>
      )

    },
    {
      name: 'facebook',
      link: 'https://www.instagram.com',
      icon: (
        <FacebookIcon color={colorTheme === 'light' ? 'white' : '#000000'}/>
      )

    }
  ]
  return (
    <div className="container-fluid">
      <div className="footer-info">
        <div className="logo-icon">
          {Links.slice(0,1).map((icon, index) => (
            <a key={index}>
              {icon.icon}
            </a>
          ))}
        </div>
        <div className="footer-link">
          <ul className="">
            <li>
              <a href="/reservation">Reservation Guarantees</a>
            </li>
            <li>
              <a href="/terms-and-condition">Terms and Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="social-media flex space-x-8">
          {Links.slice(1,4).map((link, index) => (
            <a
            href={link.link}
            key={index}
            className=""
            target={'_blank'}
            rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
          {/* <ul>
            <li><a href="/instagram">{BsFacebook}</a></li>
            <li>B</li>
            <li>C</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
