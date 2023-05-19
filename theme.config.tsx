import NextImage from 'next/image';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { RiDiscordFill } from 'react-icons/ri';

const config: DocsThemeConfig = {
  logo: (
    <NextImage
      src="/img/badomen_horizontal.png"
      width={180}
      height={48}
      alt="Bad Omen Hard Survival Logo"
    />
  ),
  search: {
    placeholder: 'Pesquisar...',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Bad Omen',
    };
  },
  logoLink: '/',
  primaryHue: 45,
  darkMode: false,
  project: {
    link: 'https://github.com/badomensurvival/website',
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard = 'https://badomen.fun/img/og.png';
    const description =
      'Bad Omen Hard Survival - Um servidor de Minecraft Hardcore Survival com economia, jobs, pets, dungeons e muito mais!';
    const titleStr =
      title && title != 'Index'
        ? title + ' – Bad Omen'
        : 'Bad Omen Hard Survival';
    return (
      <>
        <title>{titleStr}</title>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <link rel="canonical" href={`https://badomen.fun${route}`} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="pt-br" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="badomen.fun" />
        <meta name="twitter:url" content="https://badomen.fun" />
        <meta name="og:title" content={titleStr} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Bad Omen" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  banner: {
    key: '2.0-release',
    text: (
      <a
        href="https://discord.gg/vPKqE6mrZk"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center hover:nx-text-primary-600 nx-gap-2"
      >
        <RiDiscordFill /> Acesse nosso Discord →
      </a>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full items-center nx-justify-between gap-4">
        <div>
          <p className="mt-6 text-xs">
            Desenvolvido por{' '}
            <a
              href="https://baraus.dev?ref=badomen.fun"
              target="_blank"
              className="nx-underline"
            >
              baraus.dev
            </a>
          </p>
        </div>
        <div>
          <p className="mt-6 text-xs">
            © {new Date().getFullYear()} Bad Omen Hard Survival.
          </p>
        </div>
      </div>
    ),
  },
};

export default config;
