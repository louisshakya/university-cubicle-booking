import React from "react";
import { Navbar, NavbarContent, NavbarItem, Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const Header = ({ isSelected, setIsSelected }) => {
  return (
    <Navbar>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            isSelected={isSelected}
            onValueChange={setIsSelected}
            defaultSelected
            size="lg"
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          ></Switch>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
