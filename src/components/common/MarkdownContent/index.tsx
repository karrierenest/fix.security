import { YouTubeEmbed } from '@next/third-parties/google';
import GithubSlugger from 'github-slugger';
import Image from 'next/image';
import React, { isValidElement } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkSmartypants from 'remark-smartypants';

import ButtonLink from '@/components/common/links/ButtonLink';
import PrimaryLink from '@/components/common/links/PrimaryLink';
import Heading from '@/components/common/MarkdownContent/Heading';
import Icon from '@/components/common/MarkdownContent/Icon';
import { siteConfig } from '@/constants/config';
import { cn } from '@/utils/css';
import { getText, sanitizeMarkdown } from '@/utils/hashnode';

export default function MarkdownContent({
  children,
  className,
  linkHeadings,
  ...props
}: {
  children?: string;
  className?: string;
  linkHeadings?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  if (!children) {
    return null;
  }

  const slugger = new GithubSlugger();

  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkSmartypants]}
      components={{
        a: (props) => (
          <PrimaryLink href={props.href ?? ''}>{props.children}</PrimaryLink>
        ),
        h1: 'h2',
        h2: (props) => (
          <Heading
            as="h2"
            slug={slugger.slug(getText(props.children))}
            hashLink={linkHeadings}
          >
            {props.children}
          </Heading>
        ),
        h3: (props) => (
          <Heading
            as="h3"
            slug={slugger.slug(getText(props.children))}
            hashLink={linkHeadings}
          >
            {props.children}
          </Heading>
        ),
        h4: (props) => (
          <Heading
            as="h4"
            slug={slugger.slug(getText(props.children))}
            hashLink={linkHeadings}
          >
            {props.children}
          </Heading>
        ),
        h5: (props) => (
          <Heading
            as="h5"
            slug={slugger.slug(getText(props.children))}
            hashLink={linkHeadings}
          >
            {props.children}
          </Heading>
        ),
        h6: (props) => (
          <Heading
            as="h6"
            slug={slugger.slug(getText(props.children))}
            hashLink={linkHeadings}
          >
            {props.children}
          </Heading>
        ),
        img: (props) => (
          <figure className="h-max w-full">
            <Image
              src={props.src ?? ''}
              alt={props.alt ?? ''}
              fill
              className="!relative mx-auto rounded-xl object-contain"
            />
            {props.title ? (
              <figcaption className="text-center italic">
                {props.title}
              </figcaption>
            ) : null}
          </figure>
        ),
        p: (props) => {
          if (props.children?.toString() === '%%[cta]') {
            return (
              <div className="my-12 space-x-5">
                <ButtonLink href={siteConfig.registerUrl} size="lg">
                  Try Fix Security for free
                </ButtonLink>
              </div>
            );
          }

          const icon = props.children
            ?.toString()
            .match(/^%%\[icon-(?<iconName>\w+)]$/);

          if (icon?.groups?.iconName) {
            return (
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-marian-blue-50 lg:mx-0">
                <Icon
                  name={icon.groups.iconName}
                  className="h-6 w-6 text-cornflower-blue-600"
                  aria-hidden="true"
                />
              </div>
            );
          }

          const youtubeEmbed = props.children
            ?.toString()
            .match(/^%\[https:\/\/youtu\.be\/(?<videoId>[\w\d\-_]{11})]$/);

          if (youtubeEmbed?.groups?.videoId) {
            return (
              <YouTubeEmbed
                videoid={youtubeEmbed.groups.videoId}
                params="controls=0&rel=0"
              />
            );
          }

          if (isValidElement(props.children)) {
            return props.children;
          }

          return <p>{props.children}</p>;
        },
      }}
      className={cn('markdown', className)}
      {...props}
    >
      {sanitizeMarkdown(children)}
    </Markdown>
  );
}
