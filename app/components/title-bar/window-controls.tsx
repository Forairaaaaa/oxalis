// https://fonts.google.com/icons?icon.platform=flutter&icon.set=Material+Symbols
// https://tauri.app/v1/guides/features/window-customization
// https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-external-libraries
"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default async function WindowControls() {
  // Dynamically import
  async function windowMinimize() {
    const appWindow = (await import("@tauri-apps/api/window")).appWindow;
    appWindow?.minimize();
  }
  async function windowToggleMaximize() {
    const appWindow = (await import("@tauri-apps/api/window")).appWindow;
    appWindow?.toggleMaximize();
  }
  async function windowClose() {
    const appWindow = (await import("@tauri-apps/api/window")).appWindow;
    appWindow?.close();
  }

  let isMaximized = false;
  // const [isMaximized, setIsMaximized] = useState(false);

  // // Toggle icon
  // appWindow?.onResized(async (size) => {
  //   let shit = await appWindow?.isMaximized();

  //   if (shit != isMaximized) {
  //     setIsMaximized(shit);
  //   }
  // });

  return (
    <div className="flex flex-row gap-2 mx-2 items-center">
      <Button
        isIconOnly
        size="sm"
        radius="full"
        variant="light"
        color="warning"
        onPress={windowMinimize}
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
        onPress={windowToggleMaximize}
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
        onPress={windowClose}
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
