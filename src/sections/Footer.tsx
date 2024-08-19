import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logosaas.png";
import Twitter from "@/assets/social-x.svg";
import Instagram from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pinterest from "@/assets/social-pin.svg";
import Youtube from "@/assets/social-youtube.svg";

export const Footer = () => {
    return (
        <section className="bg-black text-[#BCBCBC] min-h-64 py-10 flex flex-col items-center gap-6">
            <figure>
                <Image src={logo} alt="logo" width={40} className="h-auto" />
            </figure>
            <article className="flex flex-col justify-center items-center gap-6">
                <ul className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Features</Link>
                    </li>
                    <li>
                        <Link href="#">Customers</Link>
                    </li>
                    <li>
                        <Link href="#">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#">Help</Link>
                    </li>
                    <li>
                        <Link href="#">Careers</Link>
                    </li>
                </ul>
                <ul className="flex justify-center items-center gap-6">
                    <li>
                        <Twitter />
                    </li>
                    <li>
                        <Instagram />
                    </li>
                    <li>
                        <Linkedin />
                    </li>
                    <li>
                        <Pinterest />
                    </li>
                    <li>
                        <Youtube />
                    </li>
                </ul>
                <p>© 2024 Your Company, Inc. All rights reserved.</p>
            </article>
        </section>
    );
};
