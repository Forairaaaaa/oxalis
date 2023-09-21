import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";

export default function HomePageNavBar() {
  return (
    <Navbar className="backdrop-blur-sm" height={"3rem"}>
      <NavbarContent className="gap-1">
        <Switch color="success"></Switch>
        <Button className="" size="sm" radius="lg" variant="light">
          COM23
        </Button>
        <Button className="" size="sm" radius="lg" variant="light">
          115200
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
