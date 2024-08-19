import star from "@/assets/star.png";
import spring from "@/assets/spring.png";
import RightArrow from "@/assets/arrow-right.svg";
import Image from "next/image";

export const CallToAction = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip relative">
            <div className="container">
                <section className="flex justify-center items-center flex-col">
                    <h2 className="text-3xl md:text-[54px] font-bold tracking-tighter leading-none bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
                        Sign up for free today
                    </h2>
                    <p className="text-xl text-[#010d3e] tracking-tight mt-6 max-w-lg text-center">
                        Celebrate the joy of accomplishment with an app designed to track your
                        progress and motivate your efforts.
                    </p>
                    <div className="mt-10">
                        <button className="ctaBaseStyling cta-primary">Get for free</button>
                        <button className="ctaBaseStyling cta-tertiary">
                            Learn more <RightArrow className="size-4" />
                        </button>
                    </div>
                    <Image
                        src={star}
                        alt="star"
                        width={360}
                        className="h-auto absolute hidden md:block -left-[250px] lg:left-0 -top-8"
                    />
                    <Image
                        src={spring}
                        alt="star"
                        width={360}
                        className="h-auto absolute hidden md:block -right-56 lg:right-0 -bottom-5"
                    />
                </section>
            </div>
        </section>
    );
};
