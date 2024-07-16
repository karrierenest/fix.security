'use client';

import { Metadata } from 'next';

import { metadata as rootMetadata } from '@/app/layout';
import Faq from '@/components/sections/Faq';
import { siteConfig } from '@/constants/config';
import { openGraph } from '@/utils/og';
import {apiPlugin, StoryblokComponent, storyblokInit, useStoryblokState} from "@storyblok/react";
import Head from "next/head";
import Feature from "../../components/storyblok/Feature";
import Grid from "../../components/storyblok/Grid";
import Page from "../../components/storyblok/Page";
import Teaser from "../../components/storyblok/Teaser";

const url = `${siteConfig.url}/frequently-asked-questions`;
const title = 'Frequently asked questions';
const description = siteConfig.description;
const ogImage = openGraph({
  title,
  description,
});

const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
};

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          {JSON.stringify(story)}
        {/*<StoryblokComponent blok={story.content} />*/}
      </div>
  );
}

// export default async function StoryblokPage() {
//   return <div>Storyblok</div>;
// }
