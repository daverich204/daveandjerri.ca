import "../polyfills";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import { appWithTranslation } from "next-i18next";

import createEmotionCache from "../utils/createEmotionCache";

import type { EmotionCache } from "@emotion/cache";

import nextI18NextConfig from "../../next-i18next.config";


// const CacheProvider = dynamic<{ value: EmotionCache }>(
//   import("@emotion/react").then(({ CacheProvider }) => CacheProvider)
// );

import { CacheProvider } from "@emotion/react";

import { ThemeModeProvider } from '../contexts/ThemeModeContext'
import { ThemedApp } from '../components/ThemedApp'
import { Layout } from '../components/Layout'

// const ThemeModeProvider = dynamic<unknown>(
//   import("../contexts/ThemeModeContext").then(
//     ({ ThemeModeProvider }) => ThemeModeProvider
//   )
// );
//
// const ThemedApp = dynamic<unknown>(
//   import("../components/ThemedApp").then(({ ThemedApp }) => ThemedApp)
// );
//
// const Layout = dynamic<unknown>(
//   import("../components/Layout").then(({ Layout }) => Layout)
// );

const emotionCache = createEmotionCache();

export default appWithTranslation(({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeModeProvider>
        <ThemedApp>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemedApp>
      </ThemeModeProvider>
    </CacheProvider>
  );
}, nextI18NextConfig);
