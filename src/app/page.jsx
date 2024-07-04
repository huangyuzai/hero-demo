import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { merriweather, poppins } from "@/lib/fonts";

const serviceArr = [
  {
    key: 0,
    ico: "/ico1.svg",
    title: "Build Community",
  },
  {
    key: 1,
    ico: "/ico2.svg",
    title: "Share Events",
  },
  {
    key: 2,
    ico: "/ico3.svg",
    title: "Get Information",
  },
];

export default function Home() {
  return (
    <main className={`${styles.hero} overflow-hidden`}>
      <div
        className={`${styles.container} flex flex-col items-center pt-8 pb-14 pl-7 pr-7 gap-x-6 md:pt-12 md:pl-11 md:pr-11 lg:flex-row xl:pt-14 xl:pl-24 xl:pr-24 xl:pb-28 min-[1640px]:pl-0 min-[1640px]:pr-0 relative z-[1]`}
      >
        <div className={`${styles.left} flex flex-col mb-14 self-stretch lg:mb-0`}>
          <div className={`${styles.content} mb-10 flex flex-col gap-y-6`}>
            <h1
              className={`${styles.title} ${merriweather.className} font-bold text-5xl text-white leading-snug flex xl:text-6xl 2xl:text-[80px]`}
            >
              Build your best community starting from here.
            </h1>
            <p className={`${styles.desc} ${poppins.className} text-2xl leading-10 min-[1640px]:pr-32`}>
              Meet and communicate with the best people to run projects, events
              or other activities in a more effective and fun way
            </p>
            <div className={`${styles.feat} flex items-center gap-x-8`}>
              <div className={`${styles.btn} ${poppins.className} flex-1 text-center text-white xl:w-[240px] xl:flex-none`}>
                Get Started
              </div>
              <p className="text-white flex-1 ">
                <Link
                  href={"/"}
                  className="underline text-lg flex items-center"
                >
                  <span className={`${poppins.className} pr-2 font-semibold`}>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-4 4l4-4m-4-4l4 4"
                    />
                  </svg>
                </Link>
              </p>
            </div>
          </div>

          <div className={`${styles.service} flex flex-col gap-y-6 mt-auto md:flex-row`}>
            {serviceArr.map((item) => (
              <div
                className={`${styles.serviceItem} flex items-center`}
                key={item.key}
              >
                <div
                  className={`${styles.ico} flex items-center justify-center mr-4`}
                >
                  <Image
                    src={item.ico}
                    alt=""
                    width={40}
                    height={40}
                    className={`${styles.icoImg} block`}
                  />
                </div>
                <p className={`${poppins.className} text-white text-lg font-semibold`}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.right} shrink-0 self-stretch`}>
          <Image
            src={"/1.png"}
            alt=""
            fill
            className={`${styles.bigImg} block !relative`}
          />
        </div>
      </div>
    </main>
  );
}
