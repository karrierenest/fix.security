import { storyblokEditable } from "@storyblok/react";

import { RichTextRenderer } from "@/utils/richTextRenderer";

const DynamicComponent = ({ blok }) => {
    if (blok.component === "feature") {
        return (
            <div className="column feature" {...storyblokEditable(blok)}>
                <p>{blok.name}</p>
            </div>
        );
    }

    if (blok.component === "Hero") {
        return (
            <div className="hero" {...storyblokEditable(blok)}>
                <img src={blok.Picture.filename} alt={blok.Picture.alt || "Hero Image"} />
                <RichTextRenderer document={blok.Description} />
            </div>
        );
    }

    return null;
};

const Hero = ({ blok }) => {
    if (!blok || !blok.content) {
        return <div>No content available</div>;
    }

    return (
        <>
            {blok.content.Description && (
                <RichTextRenderer document={blok.content.Description} />
            )}
            {blok.content.Picture && (
                <img src={blok.content.Picture.filename} alt={blok.content.Picture.alt || "Hero Image"} />
            )}
        </>
    );
};

export default Hero;
