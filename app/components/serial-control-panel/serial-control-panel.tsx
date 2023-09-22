import React from "react";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";

export default function SerialControlPanel() {
  return (
    <div className="flex flex-row align-middle mx-4">
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
