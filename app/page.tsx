import ModeToggle from "@/components/modetoggle";
import { TracingBeam } from "@/components/tracing-beam";
export default function Home() {
  

  return (
    <main className="h-full">
      <div className="bg-accentcolor w-full h-[66vh] p-6 flex flex-col justify-between">
        <div className="flex justify-end">
          <div id="modetoggle" className="self-start justify-end">
            <ModeToggle/>
          </div>
        </div>

        <div></div>
      </div>
      <div className="p-16 px-[20%] flex flex-col justify-center">

      <h1 className="text-left font-bold text-5xl"> Rreth nesh</h1>
      <br />
      {/*border*/}
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum metus id sapien suscipit, a vulputate massa fringilla. Nunc quis justo id nibh placerat lacinia. Vivamus pretium risus purus, in hendrerit justo ultricies quis. Praesent sed vehicula erat, id ultricies nibh. Suspendisse lobortis odio libero. Sed in massa ut sapien porta ultrices. Mauris at nisi imperdiet, luctus nulla quis, rhoncus massa. Donec non ligula urna. Quisque nisl purus, scelerisque in sodales vitae, porta et nibh. Curabitur velit est, pulvinar porta eros id, luctus ornare eros. Mauris mattis elit at quam faucibus scelerisque. Duis in interdum metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

<br /> <br />Maecenas malesuada lectus at tellus laoreet laoreet eu vel purus. Donec tempus eget dolor at gravida. Donec in urna a ex consectetur ultricies non sed arcu. Suspendisse luctus placerat magna, ut sagittis ex pharetra a. Phasellus scelerisque molestie porta. Aliquam tincidunt eros vitae maximus maximus. Integer nec accumsan nulla, a convallis eros. Nam mattis diam eu libero tristique laoreet. Curabitur porta sapien eu metus suscipit, a elementum massa tempus. Phasellus enim nisi, suscipit sit amet mollis id, aliquam aliquam eros. Suspendisse et justo dapibus, facilisis libero in, luctus ipsum. Ut convallis urna odio, ac lacinia risus ultricies et. Pellentesque leo ex, dapibus eget imperdiet in, facilisis non nulla. Quisque eu urna scelerisque, eleifend mi quis, lacinia odio. Etiam et ipsum lorem.</p>

      </div>
        <footer className="bg-accentcolor h-14">
          <center>
            <p className="text-white p-4 text-center">
            Copyright © 2024 Innova Creative Studio
            </p>
          </center>
        </footer>
    </main>
  );
}
