import { apiPlugin, storyblokInit } from "@storyblok/react";

import Customers from "@/components/storyblok/Customers";
import Pricing from "@/components/storyblok/pricing/Pricing";
import Section from "@/components/storyblok/Section";
import Text from "@/components/storyblok/Text";
import Pricing_Header from "@/components/storyblok/pricing/Pricing_Header";
import Pricing_Paragraph_4xl from "@/components/storyblok/pricing/Pricing_Paragraph_4xl";
import Pricing_Div_Max_W_4XL from "@/components/storyblok/pricing/Pricing_Div_Max_W_4XL";
import Pricing_Div_Text_Center from "@/components/storyblok/pricing/Pricing_Div_Text_Center";
import Pricing_Span from "@/components/storyblok/pricing/Pricing_Span";
import Pricing_Paragraph_lg from "@/components/storyblok/pricing/Pricing_Paragraph_lg";
import Pricing_Div_Cols_1 from "@/components/storyblok/pricing/Pricing_Div_Cols_1";
import Pricing_Additional_Seats from "@/components/storyblok/pricing/Pricing_Additional_Seats";
import Pricing_Custom_Plans from "@/components/storyblok/pricing/Pricing_Custom_Plans";
import FAQ from "@/components/storyblok/faq/FAQ";
import Hero from "src/components/storyblok/Hero";
import Dashboard from "@/components/storyblok/Dashboard";
import Testimonials from "@/components/storyblok/Testimonials";
import Motivation from "@/components/storyblok/Motivation";

const components = {
    customers: Customers,
    pricing: Pricing,
    section: Section,
    pricing_header: Pricing_Header,
    pricing_paragraph_4xl: Pricing_Paragraph_4xl,
    pricing_paragraph_lg: Pricing_Paragraph_lg,
    pricing_div_max_w_4xl: Pricing_Div_Max_W_4XL,
    pricing_div_text_center: Pricing_Div_Text_Center,
    pricing_div_cols_1: Pricing_Div_Cols_1,
    text: Text,
    hero: Hero,
    pricing_span: Pricing_Span,
    pricing_additional_seats: Pricing_Additional_Seats,
    pricing_custom_plans: Pricing_Custom_Plans,
    faq: FAQ,
    dashboard: Dashboard,
    testimonials: Testimonials,
    motivation: Motivation
};

storyblokInit({
    accessToken: "903rmFwzHj71DGgoXjUD1Qtt",
    use: [apiPlugin],
    components,
    apiOptions: {
        cache: { type: 'memory', clear: 'auto' }  // Set cache to memory and clear it automatically
    },
    experimental: {
        // Use experimental options to ensure cache is not used
        readOptions: {
            cache: 'no-store'
        }
    }
});

