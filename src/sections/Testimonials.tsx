"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonialsList1 = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: avatar1.src,
        name: "Jamie Rivera",
        username: "@jamietechguru00",
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool. ",
        imageSrc: avatar2.src,
        name: "Josh Smith",
        username: "@jjsmith",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: avatar3.src,
        name: "Morgan Lee",
        username: "@morganleewhiz",
    },
];

const testimonialsList2 = [
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: avatar4.src,
        name: "Casey Jordan",
        username: "@caseyj",
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: avatar5.src,
        name: "Taylor Kim",
        username: "@taylorkimm",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: avatar6.src,
        name: "Riley Smith",
        username: "@rileysmith1",
    },
];

const testimonialsList3 = [
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: avatar7.src,
        name: "Jordan Patels",
        username: "@jpatelsdesign",
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: avatar8.src,
        name: "Sam Dawson",
        username: "@dawsontechtips",
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        imageSrc: avatar9.src,
        name: "Casey Harper",
        username: "@casey09",
    },
];

export const Testimonials = () => {
    const testimonialRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: testimonialRef,
        offset: ["start end", "end start"],
    });

    const translateYUp = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const translateYDown = useTransform(scrollYProgress, [0, 1], [-150, 150]);

    return (
        <section className="bg-white py-24">
            <div className="container">
                <section className="flex justify-center items-center flex-col">
                    <sup className="text-sm inline-flex border-2 border-[#222]/10 rounded-lg py-1 px-3 tracking-tight">
                        Version 2.0 is here
                    </sup>
                    <h2 className="text-3xl md:text-[54px] font-bold tracking-tighter leading-none bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
                        What our users say
                    </h2>
                    <p className="text-xl text-[#010d3e] tracking-tight mt-6 max-w-lg text-center">
                        From intuitive design to powerful features, our app has become an essential
                        tool for users around the world.
                    </p>
                </section>
                <section
                    ref={testimonialRef}
                    className="my-10 max-h-[748px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_90%,transparent)]"
                >
                    <ul className="columns-1 md:columns-2 lg:columns-3 space-y-7 overflow-hidden">
                        {testimonialsList1.map((element, index) => (
                            <motion.li
                                key={index}
                                className="max-w-sm p-10 rounded-2xl shadow-xl border-black/5 cta-secondary"
                                style={{ translateY: translateYUp }}
                                transition={{ duration: 0.1 }}
                            >
                                <article>{element.text}</article>
                                <figure className="w-fit flex justify-center gap-x-2.5 mt-7">
                                    <Image
                                        src={element.imageSrc}
                                        alt={element.name}
                                        width={50}
                                        height={50}
                                        className="h-auto"
                                    />
                                    <figcaption>
                                        <p className="font-medium">{element.name}</p>
                                        <p>{element.username}</p>
                                    </figcaption>
                                </figure>
                            </motion.li>
                        ))}
                        {testimonialsList2.map((element, index) => (
                            <motion.li
                                key={index}
                                className="hidden lg:block max-w-sm p-10 rounded-2xl shadow-xl border-black/5 cta-secondary"
                                style={{ translateY: translateYDown }}
                                transition={{ duration: 0.1 }}
                            >
                                <article>{element.text}</article>
                                <figure className="w-fit flex justify-center gap-x-2.5 mt-7">
                                    <Image
                                        src={element.imageSrc}
                                        alt={element.name}
                                        width={50}
                                        height={50}
                                        className="h-auto"
                                    />
                                    <figcaption>
                                        <p className="font-medium">{element.name}</p>
                                        <p>{element.username}</p>
                                    </figcaption>
                                </figure>
                            </motion.li>
                        ))}
                        {testimonialsList3.map((element, index) => (
                            <motion.li
                                key={index}
                                className="max-w-sm p-10 rounded-2xl shadow-xl border-black/5 cta-secondary"
                                style={{ translateY: translateYUp }}
                                transition={{ duration: 0.1 }}
                            >
                                <article>{element.text}</article>
                                <figure className="w-fit flex justify-center gap-x-2.5 mt-7">
                                    <Image
                                        src={element.imageSrc}
                                        alt={element.name}
                                        width={50}
                                        height={50}
                                        className="h-auto"
                                    />
                                    <figcaption>
                                        <p className="font-medium">{element.name}</p>
                                        <p>{element.username}</p>
                                    </figcaption>
                                </figure>
                            </motion.li>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    );
};
