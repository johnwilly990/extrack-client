import { Link } from "react-router-dom";
import FooterLink from "./FooterLink";
import { accountLinks, companyLinks } from "../../constants";
import github from "../../assets/icons/github.svg";
import linkedIn from "../../assets/icons/linked-in.svg";

const Footer = () => {
  return (
    <footer className="bg-forestGreen px-4 py-6 md:px-[32px] md:py-[48px]">
      <div className="flex flex-wrap justify-between mb-6 md:border-b-2 md:m-auto lg:max-w-[1280px] ">
        <div className="flex flex-col pb-4 mb-4 w-1/2 border-b-2 md:w-1/3 md:border-none">
          <h2 className="text-lg text-white font-bold uppercase mb-4">
            Account
          </h2>
          {accountLinks.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>
        <div className="flex flex-col pb-4 mb-4 w-1/2 border-b-2 md:w-1/3 md:border-none">
          <h2 className="text-lg text-white font-bold uppercase mb-4">
            Company
          </h2>
          {companyLinks.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>
        <div className="flex justify-between w-full md:w-1/3 md:flex-col md:justify-start">
          <h2 className="hidden text-lg text-white font-bold uppercase mb-4 md:block">
            Social
          </h2>
          <div className="flex justify-between w-full md:justify-start">
            <a href="https://github.com/johnwilly990" className="mr-8">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/john-sj-kim/">
              <img src={linkedIn} alt="linked-in" />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-between md:m-auto md:pt-6 lg:max-w-[1280px]">
        <div className="flex">
          <Link to="/terms">
            <p className="text-xs text-white mr-[4px]">Terms & Conditions |</p>
          </Link>
          <Link to="/privacy">
            <p className="text-xs text-white">Privacy Policy</p>
          </Link>
        </div>
        <p className="text-xs text-white">© 2023 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
