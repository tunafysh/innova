"use client"
import { AnimatedTooltip } from "@/components/animated-tooltip";
import ModeToggle from "@/components/modetoggle";
import Blob from "@/components/blob";
import { toast, Toaster } from "sonner";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const blobref = useRef(null);
  const paragraphref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Elements are touching!');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (blobref.current && paragraphref.current) {
      observer.observe(blobref.current);
      observer.observe(paragraphref.current);
    }

    return () => {
      if (blobref.current && paragraphref.current) {
        observer.unobserve(blobref.current);
        observer.unobserve(paragraphref.current);
      }
    };
  }, []);
  
   return (
    <main className="h-full overflow-hidden">
      <Blob ref={blobref} />
      <div className="bg-accentcolor w-full h-[60vh] p-6 flex flex-col justify-between">
        <div className="flex justify-end">
          <div id="modetoggle" className="self-start justify-end">
        <div className="fixed w-[100vw] h-[100vh] top-0 left-0 backdrop-blur-lg -z-10"/>
            <ModeToggle/>
          </div>
        </div>
        <div></div>
      </div>
      <div className="p-16 px-[20%] flex flex-col justify-center">

      <h1 className="text-center w-full font-bold text-5xl">Rreth nesh</h1>
      <br />
      {/*border*/}
      <br />
      <motion.p className="pl-6  border-accentcolor" whileHover={{ 
        boxShadow: "-5px 0px 0px 0px #6772E4"
      }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum metus id sapien suscipit, a vulputate massa fringilla. Nunc quis justo id nibh placerat lacinia. Vivamus pretium risus purus, in hendrerit justo ultricies quis. Praesent sed vehicula erat, id ultricies nibh. Suspendisse lobortis odio libero. Sed in massa ut sapien porta ultrices. Mauris at nisi imperdiet, luctus nulla quis, rhoncus massa. Donec non ligula urna. Quisque nisl purus, scelerisque in sodales vitae, porta et nibh. Curabitur velit est, pulvinar porta eros id, luctus ornare eros. Mauris mattis elit at quam faucibus scelerisque. Duis in interdum metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

<br /> <br />Maecenas malesuada lectus at tellus laoreet laoreet eu vel purus. Donec tempus eget dolor at gravida. Donec in urna a ex consectetur ultricies non sed arcu. Suspendisse luctus placerat magna, ut sagittis ex pharetra a. Phasellus scelerisque molestie porta. Aliquam tincidunt eros vitae maximus maximus. Integer nec accumsan nulla, a convallis eros. Nam mattis diam eu libero tristique laoreet. Curabitur porta sapien eu metus suscipit, a elementum massa tempus. Phasellus enim nisi, suscipit sit amet mollis id, aliquam aliquam eros. Suspendisse et justo dapibus, facilisis libero in, luctus ipsum. Ut convallis urna odio, ac lacinia risus ultricies et. Pellentesque leo ex, dapibus eget imperdiet in, facilisis non nulla. Quisque eu urna scelerisque, eleifend mi quis, lacinia odio. Etiam et ipsum lorem.</motion.p>

      </div>

      <hr />

      <div className="p-12 mt-16 mb-[4%] mx-[20vw] rounded h-[70vh] ">
        <h1 className="text-center w-full font-bold text-5xl">Dizajnerët</h1>
          <br /><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum metus id sapien suscipit, a vulputate massa fringilla. <br /><br /><br /> <br/></p>
          <div className="flex flex-row justify-center">

          <AnimatedTooltip items={[
            {
              id: 2,
              name: "Guxim Rexha",
              designation: "Dizajner",
              image: "/user.png"
            }, 
            {
              id: 1,
              name: "Diellëza Gllava",
              designation: "Dizajnere",
              image: "/user.png"
            },
            {
              id: 3,
              name: "Hanan Smani",
              designation: "Zhvillues",
              image: "/user.png"
            }
          ]} />
          </div>
        </div>
        <hr />

        <div className="p-12 mt-16 mb-[4%] mx-[20vw] rounded h-[70vh] ">
        <h1 className="text-center w-full font-bold text-5xl">Sponzorët</h1>
        <br /><br />

          <h1 className="text-center w-full font-bold text-5xl">Duke u konstruktuar</h1>

        </div>

        

        <footer className="bg-accentcolor h-14">
          <center>
            <p className="text-white p-4 text-center">
            Copyright © 2024 Innova Creative Studio
            </p>
          </center>
        </footer>
        <Toaster richColors expand={false}  position="top-center" />
    </main>
  );
}
