import { apiPlugin,storyblokInit } from "@storyblok/react";

import Feature from "src/components/storyblok/Feature";
import Grid from "src/components/storyblok/Grid";
import Page from "src/components/storyblok/Page";
import Teaser from "src/components/storyblok/Teaser";
import Hero from "src/components/storyblok/Hero";
import Customers from "@/components/storyblok/Customers";

const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
    hero: Hero,
    customers: Customers
};

storyblokInit({
    accessToken: "903rmFwzHj71DGgoXjUD1Qtt",
    use: [apiPlugin],
    components
});

