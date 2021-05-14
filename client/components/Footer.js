import React from "react";
import Link from "next/link";
import { Navbar, NavLink } from "reactstrap";

const footer = {
  position: "absolute",
  left: 0,
  bottom: 0,
  right: 0,
};

const content = {
  textAlign: "center",
  width: "100%",
};

const Footer = () => {
  return (
    <div>
      <Navbar style={footer} color="light" light expand="md">
        <Link href="https://twitter.com/ch2isk4kos">
          <NavLink style={content}>
            <span style={{ color: "black" }}>built by </span>
            <span style={{ fontWeight: "bold", cursor: "pointer" }}>
              Chris Kakos
            </span>
          </NavLink>
        </Link>
      </Navbar>
    </div>
  );
};

export default Footer;
