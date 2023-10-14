import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <header>
      <h2>
        Kikapu<span style={{color: '#18D26E'}}>.</span>
      </h2>
      <nav ref={navRef}>
        <Link to={"#"}>Home</Link>
        <Link to={"#"}>Features</Link>
        <Link to={"#"}>Team</Link>
        <Link to={"#"}>Contact</Link>
        <button className="loginButton">signup/login</button>
        <button className="navBtn navCloseBtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navBtn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
