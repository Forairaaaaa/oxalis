import React from "react";
import SerialControlPanel from "../serial-control-panel/serial-control-panel";
import WindowControls from "./window-controls";

export default function TitleBar() {
  return (
    <div
      data-tauri-drag-region
      className="h-12 select-none flex justify-start items-center fixed top-0 left-0 right-0 shadow-sm"
    >
      <SerialControlPanel></SerialControlPanel>
      <div className="grow"></div>
      <WindowControls></WindowControls>
    </div>
  );
}
