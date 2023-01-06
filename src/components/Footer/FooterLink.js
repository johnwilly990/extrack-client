import { Link } from "react-router-dom";

const FooterLink = ({ link }) => {
  return (
    <Link to={`/${link}`}>
      <p className="text-sm text-white uppercase mb-2">{link}</p>
    </Link>
  );
};

export default FooterLink;
