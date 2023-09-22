// https://fonts.google.com/icons?icon.platform=flutter&icon.set=Material+Symbols
// https://tauri.app/v1/guides/features/window-customization
"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { appWindow } from "@tauri-apps/api/window";
import Image from "next/image";

export default function WindowControls() {
  const [isMaximized, setIsMaximized] = useState(false);

  // Toggle icon
  appWindow.onResized(async (size) => {
    let shit = await appWindow.isMaximized();

    if (shit != isMaximized) {
      setIsMaximized(shit);
    }
  });

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
        <Image
          src="/window-control-icons/remove_FILL0_wght300_GRAD-25_opsz20.svg"
          alt="icon minimize window"
          width={20}
          height={20}
        ></Image>
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
        <Image
          src={
            isMaximized
              ? "/window-control-icons/hide_FILL0_wght300_GRAD-25_opsz20.svg"
              : "/window-control-icons/expand_content_FILL0_wght300_GRAD-25_opsz20.svg"
          }
          alt="icon toggle window maximize"
          width={20}
          height={20}
        ></Image>
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
        <Image
          src="/window-control-icons/close_FILL0_wght300_GRAD-25_opsz20.svg"
          alt="icon close window"
          width={22}
          height={22}
        ></Image>
      </Button>
    </div>
  );
}
