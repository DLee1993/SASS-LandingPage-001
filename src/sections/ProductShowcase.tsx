"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";
import productImage from "@/assets/product-image.png";
import { useRef } from "react";
export const ProductShowcase = () => {
    const productRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: productRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={productRef} className="bg-gradient-to-b from-white to-[#d2dcff] py-24">
            <div className="container">
                <div className="flex flex-col justify-center items-center max-w-[540px] mx-auto text-center">
                    <sup className="text-sm inline-flex border-2 border-[#222]/10 rounded-lg py-1 px-3 tracking-tight">
                        Boost your productivity
                    </sup>
                    <h2 className="text-3xl md:text-[54px] leading-none py-1 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5">
                        A more effective way to track progress
                    </h2>
                    <p className="text-[22px] leading-[30px] text-[#010d3e] tracking-tight mt-5">
                        Celebrate the joy of accomplishment with an app designed to track your
                        progress and motivate your efforts.
                    </p>
                </div>
                <figure className="relative mt-10">
                    <Image src={productImage} alt="product image" />
                    <motion.img
                        src={pyramid.src}
                        alt="pyramid image"
                        height={262}
                        width={262}
                        className="hidden md:block h-auto absolute -right-36 -top-32"
                        style={{ translateY: translateY }}
                    />
                    <motion.img
                        src={tube.src}
                        alt="tube image"
                        height={262}
                        width={262}
                        className="hidden md:block h-auto absolute -left-36 bottom-24"
                        style={{ translateY: translateY }}
                    />
                </figure>
            </div>
        </section>
    );
};
