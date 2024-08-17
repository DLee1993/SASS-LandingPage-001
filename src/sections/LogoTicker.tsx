import Image from "next/image";

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
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <ul className="flex gap-14 flex-none">
                        <li>
                            <Image src={acmeLogo} alt="logo" className="logo-ticker-image" />
                        </li>
                        <li>
                            <Image src={quantumLogo} alt="logo" className="logo-ticker-image" />
                        </li>
                        <li>
                            <Image src={echoLogo} alt="logo" className="logo-ticker-image" />
                        </li>
                        <li>
                            <Image src={celestialLogo} alt="logo" className="logo-ticker-image" />
                        </li>
                        <li>
                            <Image src={pulseLogo} alt="logo" className="logo-ticker-image" />
                        </li>
                        <li>
                            <Image src={apexLogo} alt="logo" className="logo-ticker-image"></Image>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
