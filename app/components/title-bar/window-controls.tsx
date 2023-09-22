// https://fonts.google.com/icons?icon.platform=flutter&icon.set=Material+Symbols
// https://tauri.app/v1/guides/features/window-customization
"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { appWindow } from "@tauri-apps/api/window";

export default function WindowControls() {
  return (
    <div className="flex flex-row gap-2 mx-2 items-center">
      <Button
        isIconOnly
        size="sm"
        radius="full"
        variant="light"
        color="warning"
        onPress={(event) => {
          appWindow.minimize();
        }}
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0"
        />
        <span className="material-symbols-outlined">remove</span>
      </Button>

      <Button
        isIconOnly
        size="sm"
        radius="full"
        variant="light"
        color="success"
        onPress={(event) => {
          appWindow.toggleMaximize();
        }}
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0"
        />
        <span className="material-symbols-outlined">expand_content</span>
      </Button>

      <Button
        isIconOnly
        size="sm"
        radius="full"
        variant="light"
        color="danger"
        onPress={(event) => {
          appWindow.close();
        }}
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,00,1,0"
        />
        <span className="material-symbols-outlined">close</span>
      </Button>
    </div>
  );
}
