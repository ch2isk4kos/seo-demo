import React, { useState } from "react";
import Link from "next/link";
// import { Router } from "next/router";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/* <Nav className="mr-auto" navbar> */}

            {!isAuth() && (
              <>
                <NavItem>
                  <Link href="/signin">
                    <NavLink>Sign In</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink>SignUp</NavLink>
                  </Link>
                </NavItem>
              </>
            )}

            {isAuth() && (
              <Link href="/signin">
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout()}
                >
                  Signout
                </NavLink>
              </Link>
            )}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>ch2isk4kos</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
