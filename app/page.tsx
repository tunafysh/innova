import ModeToggle from "@/components/modetoggle";
import { TracingBeam } from "@/components/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-purple-600 w-full h-[33vh] p-6 flex flex-col justify-between">
        <div className="flex justify-end">
          <div id="modetoggle" className="self-start justify-end">
            <ModeToggle/>
          </div>
        </div>
        <h1 className="text-center font-bold self-center text-white">Logoja ketu</h1>
        <div></div>
      </div>
      <TracingBeam>
        <center>
        <div className="h-[1000px]">
          <p>test</p>
        </div>
        </center>
        </TracingBeam>
    </main>
  );
}
