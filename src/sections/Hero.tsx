"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import cog from "@/assets/cog.png";
import cylinder from "@/assets/cylinder.png";
import noodle from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section
            ref={heroRef}
            className="pt-10 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip"
        >
            <div className="container md:flex items-center">
                <section className="md:w-[478px]">
                    <sup className="text-sm inline-flex border-2 border-[#222]/10 rounded-lg py-1 px-3 tracking-tight">
                        Version 2.0 is here
                    </sup>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
                        Pathway to productivity
                    </h1>
                    <p className="text-xl text-[#010d3e] tracking-tight mt-6">
                        Celebrate the joy of accomplishment with an app designed to track your
                        progress, motivate your efforts, and celebrate your successes.
                    </p>
                    <aside className="w-fit flex justify-center items-center gap-x-1 mt-7">
                        <button className="ctaBaseStyling cta-primary">Get for free</button>
                        <button className="ctaBaseStyling cta-tertiary">
                            learn more{" "}
                            <span>
                                <ArrowRight className="size-4" />
                            </span>
                        </button>
                    </aside>
                </section>
                <figure className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                    <motion.img
                        src={cog.src}
                        alt="Cog image"
                        className="md:absolute md:-z-0 md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 -translate-y-[30px]"
                        animate={{ translateY: [-30, 30] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 3,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.img
                        src={cylinder.src}
                        alt="Cylinder image"
                        width={200}
                        height={200}
                        className="w-52 h-auto hidden md:block -top-8 -left-32 absolute"
                        style={{ translateY: translateY }}
                    />
                    <motion.img
                        src={noodle.src}
                        alt="Noodle image"
                        width={200}
                        height={200}
                        className="w-52 h-auto hidden lg:block -bottom-24 -right-32 absolute rotate-[30deg]"
                        style={{ translateY: translateY, rotate: 30 }}
                    />
                </figure>
            </div>
        </section>
    );
};
