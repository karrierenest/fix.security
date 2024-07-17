import {siteConfig} from "@/constants/config";
import ButtonLink from "@/components/common/links/ButtonLink";

const Hero = ({ blok }) => {

    if (!blok) {
        return <div>No content available</div>;
    }

    return (
            <div className="mx-auto max-w-7xl px-6 text-center lg:flex lg:items-center lg:gap-x-4 lg:px-8 lg:text-left">
                <div className="mx-auto pb-12 lg:p-0">
                    <div className="mb-3 text-lg font-bold uppercase text-gray-600 sm:text-xl">
                        {blok.header}
                    </div>
                    <h1 className="max-w-prose text-balance text-4xl font-extrabold sm:text-5xl lg:text-pretty">
            <span className="font-extrabold text-cornflower-blue-600">
              {blok.header_1_span}
            </span>{' '}
                        {blok.header_1}
                    </h1>
                    <p className="mx-auto mt-6 max-w-prose text-balance text-lg font-semibold text-gray-900 sm:text-xl lg:text-pretty">
                        {blok.description}
                    </p>
                    <ul className="mx-auto mt-3 max-w-prose list-inside list-disc text-balance lg:ml-4 lg:list-outside lg:text-pretty">
                        {blok.features.map(feature => (
                            <li>{feature.value}</li>
                        ))}
                    </ul>
                    <div className="mt-6 space-x-5">
                        <ButtonLink href={siteConfig.registerUrl} size="lg">
                            Start for free
                        </ButtonLink>
                    </div>
                </div>
                {blok.Picture && (
                    <img src={blok.Picture.filename} alt={blok.Picture.alt || "Hero Image"} />
                )}
            </div>

    );
};

export default Hero;
