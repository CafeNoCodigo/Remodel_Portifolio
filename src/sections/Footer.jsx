import { socialImgs } from "../constants/index";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Juntos Melhoraremos Tudo</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a href={socialImg.url} target="_blank"><img src={socialImg.imgPath} alt="social Media" loading="lazy"/></a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Fabião Mainato. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
