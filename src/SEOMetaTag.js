import { Helmet } from "react-helmet-async";

export default function SEOMetaTag() {
  return (
    <Helmet>
      <title>{"Lipton"}</title>
      <meta
        name="description"
        content={"일상적인 개발 블로그 입니다. 많이 방문해 주세요"}
      />
      <meta property="og:title" content={"립톤의 블로그"} />
      <meta
        property="og:description"
        content={"일상적인 개발 블로그 입니다. 많이 방문해 주세요"}
      />
      <meta
        property="og:image"
        content={
          "https://www.mashed.com/img/gallery/the-kermit-lipton-tea-meme-explained/intro-1634237597.webp"
        }
      />
      <meta property="og:url" content={"https://lipton.com/page.html"} />
      <meta property="og:type" content="blog" />

      {/* 트위터 tag */}
      <meta name="twitter:title" content={"립톤의 블로그"} />
      <meta
        name="twitter:description"
        content={"일상적인 개발 블로그 입니다. 많이 방문해 주세요"}
      />
      <meta
        name="twitter:image"
        content={
          "https://www.mashed.com/img/gallery/the-kermit-lipton-tea-meme-explained/intro-1634237597.webp"
        }
      />
      <meta name="twitter:card" content="summary" />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}
