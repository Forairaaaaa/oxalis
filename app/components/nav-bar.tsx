import React from "react";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";

export default function HomePageNavBar() {
  return (
    <div data-tauri-drag-region className="titlebar">
      <Switch color="success"></Switch>
      <Button className="" size="sm" radius="lg" variant="light">
        COM23
      </Button>
      <Button className="" size="sm" radius="lg" variant="light">
        115200
      </Button>
    </div>
  );
}
