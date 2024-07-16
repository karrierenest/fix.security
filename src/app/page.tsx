import Image from 'next/image';
import Script from 'next/script';
import { WebSite, WithContext } from 'schema-dts';
import dashboardScreenshot from '@/assets/screenshots/dashboard.png';
import Faq from '@/components/sections/Faq';
import Testimonials from '@/components/sections/Testimonials';
import WhyFix from '@/components/sections/WhyFix';
import { siteConfig } from '@/constants/config';
import Hero from "@/components/storyblok/Hero";
import {fetchStory} from "@/lib/storyblok";
import StoryblokRenderer from "@/components/StoryblokComponent";
import Pricing from "@/components/storyblok/Pricing";
import Customers from "@/components/storyblok/Customers";

export default async function HomePage() {
  // const nonce = headers().get('x-nonce') ?? undefined;
  const jsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.title}: ${siteConfig.tagline}`,
    url: siteConfig.url,
  };


  const story = await fetchStory("hero");
  // const pricingStory = await fetchStory("tarif");
  const customersStory = await fetchStory("customers");


  return (
      <>
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            // nonce={nonce}
        />
        <Hero story={story} />
        <Customers blok={customersStory} />
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
                src={dashboardScreenshot}
                sizes="(max-width: 1140px) 100vw, 1140px"
                placeholder="blur"
                alt="Fix Security dashboard displays changes detected in the last week, security score, and top 5 possible security enhancements."
                className="rounded-xl shadow-md"
            />
          </div>
        </section>
        <Testimonials/>
        <WhyFix/>
        {/*<Pricing story={pricingStory}/>*/}
        <Faq/>
      </>
  );
}
