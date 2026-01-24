"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type StatItem = {
  value: string;
  description: string;
  delay: number;
};
type DataPoint = {
  id: number;
  left: number;
  top: number;
  height: number;
  direction: "up" | "down";
  delay: number;
};

const stats: StatItem[] = [
  {
    value: "5,000+",
    description: "Healthcare providers\ntrusting CareTracker",
    delay: 0,
  },
  {
    value: "99.9%",
    description: "Uptime\nguarantee",
    delay: 0.2,
  },
  {
    value: "40%",
    description: "Reduction in\nadmin time",
    delay: 0.4,
  },
  {
    value: "HIPAA",
    description: "Fully compliant\ninfrastructure",
    delay: 0.6,
  },
];
const generateDataPoints = (): DataPoint[] => {
  const points: DataPoint[] = [];
  const baseLeft = 1;
  const spacing = 32;
  for (let i = 0; i < 50; i++) {
    const direction = i % 2 === 0 ? "down" : "up";
    const height = Math.floor(Math.random() * 120) + 88;
    const top =
      direction === "down"
        ? Math.random() * 150 + 250
        : Math.random() * 100 - 80;
    points.push({
      id: i,
      left: baseLeft + i * spacing,
      top,
      height,
      direction,
      delay: i * 0.035,
    });
  }
  return points;
};

// @component: BankingScaleHero
export const BankingScaleHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dataPoints] = useState<DataPoint[]>(generateDataPoints());
  const [typingComplete, setTypingComplete] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setTypingComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // @return
  return (
    <div className="w-full overflow-hidden bg-slate-50" id="overview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5">
          <div className="relative z-10">
            <div
              className="relative h-6 inline-flex items-center font-mono uppercase text-xs text-[#1d326d] mb-8 lg:mb-12 px-2"
              style={{
                fontFamily:
                  "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              }}
            >
              <div className="flex items-center gap-0.5 overflow-hidden">
                <motion.span
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "auto",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="block whitespace-nowrap overflow-hidden text-[#1d326d] relative z-10"
                >
                  Trusted by Healthcare Leaders
                </motion.span>
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: typingComplete ? [1, 0, 1, 0] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="block w-1.5 h-3 bg-[#fcc41d] ml-0.5 relative z-10 rounded-sm"
                />
              </div>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-[#111A4A] mb-4 lg:mb-6"
              style={{
                fontFamily: "var(--font-inter), Inter",
                fontWeight: "400",
              }}
            >
              Turn Cancellations into{" "}
              <span
                className="bg-gradient-to-r from-[#1d326d] to-[#3b82f6] bg-clip-text text-transparent"
                style={{
                  fontWeight: "400",
                }}
              >
                Revenue on Autopilot
              </span>
            </h2>

            <p
              className="text-base lg:text-lg leading-6 text-[#111A4A] opacity-60 mt-0 mb-4 lg:mb-6"
              style={{
                fontFamily: "var(--font-roboto), Roboto",
              }}
            >
              The only clinic OS that automatically fills empty slots via
              WhatsApp, reduces admin time by 40%, and ensures you get paid
              faster.
            </p>

            <Link href="/features">
              <button className="relative inline-flex justify-center items-center leading-4 text-center cursor-pointer whitespace-nowrap outline-none font-medium h-9 text-[#232730] bg-white/50 backdrop-blur-sm shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)] transition-all duration-200 ease-in-out rounded-lg px-4 mt-5 text-sm group hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(87,90,100,0.18)]">
                <span className="relative z-10 flex items-center gap-1">
                  Learn about our platform
                  <ArrowRight className="w-4 h-4 -mr-1 transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </button>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="relative w-full h-[416px]">
              <div className="absolute top-0 left-0 lg:left-[100px] w-full lg:w-[680px] h-[416px] pointer-events-none overflow-hidden">
                <div className="relative w-full h-full">
                  {dataPoints.map(point => (
                    <motion.div
                      key={point.id}
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={
                        isVisible
                          ? {
                              opacity: [0, 1, 1],
                              height: [0, point.height, point.height],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        delay: point.delay,
                        ease: [0.5, 0, 0.01, 1],
                      }}
                      className="absolute w-1.5 rounded-[3px]"
                      style={{
                        left: `${point.left}px`,
                        top: `${point.top}px`,
                        background:
                          point.direction === "down"
                            ? "linear-gradient(rgb(252, 196, 29) 0%, rgb(252, 196, 29) 10%, rgba(29, 50, 109, 0.1) 40%, rgba(29, 50, 109, 0) 75%)"
                            : "linear-gradient(to top, rgb(252, 196, 29) 0%, rgb(252, 196, 29) 10%, rgba(29, 50, 109, 0.1) 40%, rgba(29, 50, 109, 0) 75%)",
                        backgroundColor: "rgba(29, 50, 109, 0.01)",
                      }}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={
                          isVisible
                            ? {
                                opacity: [0, 1],
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.3,
                          delay: point.delay + 1.7,
                        }}
                        className="absolute -left-[1px] w-2 h-2 bg-[#1d326d] rounded-full"
                        style={{
                          top:
                            point.direction === "down"
                              ? "0px"
                              : `${point.height - 8}px`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="overflow-visible pb-5">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 relative z-10">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                        filter: "blur(4px)",
                      }}
                      animate={
                        isVisible
                          ? {
                              opacity: [0, 1, 1],
                              y: [20, 0, 0],
                              filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.5,
                        delay: stat.delay,
                        ease: [0.1, 0, 0.1, 1],
                      }}
                      className="flex flex-col gap-2"
                    >
                      <span className="text-xl sm:text-2xl font-medium leading-tight tracking-tight text-[#1d326d]">
                        {stat.value}
                      </span>
                      <p className="text-xs leading-tight text-[#7C7F88] m-0 whitespace-pre-line">
                        {stat.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
