import TitleBar from "./components/title-bar/title-bar";
import ReceiveWindow from "./components/receive-window";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <TitleBar></TitleBar>
      <ReceiveWindow></ReceiveWindow>
    </div>
  );
}
