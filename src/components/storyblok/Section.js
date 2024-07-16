import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Section = ({ blok }) => {
  return (
    <section className={`py-16 sm:py-24 ${blok.bgColor ? blok.bgColor : ''}` } {...storyblokEditable(blok)}>
      {blok.data.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  );
};

export default Section;
