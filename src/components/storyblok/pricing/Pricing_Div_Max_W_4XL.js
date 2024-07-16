import {StoryblokComponent} from "@storyblok/react";

const Pricing_Div_Max_W_4XL = ({ blok }) => {

    return (
        <div className="mx-auto max-w-4xl">
            {blok.div.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
)
    ;
};
export default Pricing_Div_Max_W_4XL;
