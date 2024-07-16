// app/[...slug]/page.js
import { fetchStory } from "../../lib/storyblok";
import StoryblokRenderer from "../../components/StoryblokComponent";

export default async function Page({ params }) {
    const slug = params.slug ? params.slug.join("/") : "home";
    const story = await fetchStory(slug);

    console.log("Fetched Story:", story);  // Log the story object for debugging

    if (!story || !story.content || !story.content.body) {
        return <div>Error: Story not found or content is empty</div>;
    }

    return (
        <div>
            {/*{JSON.stringify(story)}*/}
            <StoryblokRenderer story={story} />
        </div>
    );
}
