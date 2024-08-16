import ArrowRight from "@/assets/arrow-right.svg";
import cog from "@/assets/cog.png";
import cylinder from "@/assets/cylinder.png";
import noodle from "@/assets/noodle.png";
import Image from "next/image";
export const Hero = () => {
    return (
        <section className="pt-10 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
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
                    <Image
                        src={cog}
                        alt="Cog image"
                        className="md:absolute md:-z-0 md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                    />
                    <Image
                        src={cylinder}
                        alt="Cylinder image"
                        width={200}
                        height={200}
                        className="w-52 h-auto hidden md:block -top-8 -left-32 absolute"
                    />
                    <Image
                        src={noodle}
                        alt="Noodle image"
                        width={200}
                        height={200}
                        className="w-52 h-auto hidden lg:block -bottom-24 -right-32 absolute rotate-[30deg]"
                    />
                </figure>
            </div>
        </section>
    );
};
