import "../styles/globals.css";
import {storyblokInit, apiPlugin, StoryblokComponent, useStoryblokState} from "@storyblok/react";
import Head from "next/head";

storyblokInit({
  accessToken: "903rmFwzHj71DGgoXjUD1Qtt",
  use: [apiPlugin],
  apiOptions: {
    region: ''
  }
});

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <StoryblokComponent blok={story.content} />
      </div>
  );
}

