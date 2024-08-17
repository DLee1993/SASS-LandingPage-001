import Check from "@/assets/check.svg";
const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features",
        ],
    },
];

export const Pricing = () => {
    return (
        <section className="py-24">
            <div className="container">
                <article className="max-w-[540px] text-center mx-auto">
                    <h2 className="text-3xl md:text-[54px] leading-none py-1 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
                        Pricing
                    </h2>
                    <p className="text-[22px] leading-[30px] text-[#010d3e] tracking-tight mt-5">
                        Free forever. Upgrade for unlimited tasks, better security, and exclusive
                        features.
                    </p>
                </article>
                <section className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-y-6 mt-10">
                    {pricingTiers.map(
                        (
                            { title, monthlyPrice, buttonText, inverse, popular, features },
                            index
                        ) => (
                            <div
                                key={index}
                                className={`flex flex-col w-80 ${
                                    inverse ? "cta-primary" : "cta-secondary"
                                } ${
                                    index === 0
                                        ? "h-[476px]"
                                        : index === 1
                                        ? "h-[568px]"
                                        : "h-[696px]"
                                } p-10 rounded-3xl`}
                            >
                                <div className="flex justify-between">
                                    <h3
                                        className={`${
                                            inverse ? "text-white/50" : "text-black/50"
                                        } font-bold text-lg mb-7`}
                                    >
                                        {title}
                                    </h3>
                                    {popular && (
                                        <p className="text-sm inline-flex h-fit border-2 border-[#fff]/20 rounded-full py-1.5 px-4 tracking-tight">
                                            <span className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] text-transparent bg-clip-text font-bold">
                                                Most popular
                                            </span>
                                        </p>
                                    )}
                                </div>
                                <p className="text-4xl tracking-tighter font-bold mb-7">
                                    ${monthlyPrice}{" "}
                                    <span
                                        className={`tracking-tight text-base ${
                                            inverse ? "text-white/50" : "text-black/50"
                                        }`}
                                    >
                                        /month
                                    </span>
                                </p>
                                <button
                                    className={`ctaBaseStyling w-full mb-8 ${
                                        inverse ? "cta-secondary" : "cta-primary"
                                    }`}
                                >
                                    {buttonText}
                                </button>
                                <ul className="h-full flex flex-col justify-between items-start">
                                    {features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-start items-center gap-x-1 text-sm"
                                        >
                                            <Check className="size-4" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </section>
            </div>
        </section>
    );
};
