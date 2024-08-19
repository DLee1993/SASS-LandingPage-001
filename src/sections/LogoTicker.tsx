"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";
import pulseLogo from "@/assets/logo-pulse.png";

export const LogoTicker = () => {
    return (
        <section className="py-8 md:py-12 bg-white">
            <div className="container">
                <div className="w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex gap-14 pr-14"
                        animate={{ translateX: "-50%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut"
                        }}
                    >
                        <Image src={acmeLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={quantumLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={echoLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={celestialLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={pulseLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={apexLogo} alt="logo" className="logo-ticker-image" />

                        {/* Second set of logos for animations purpose only */}

                        <Image src={acmeLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={quantumLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={echoLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={celestialLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={pulseLogo} alt="logo" className="logo-ticker-image" />

                        <Image src={apexLogo} alt="logo" className="logo-ticker-image" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
