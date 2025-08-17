import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/favicons/apple-57x57-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/favicons/apple-60x60-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/favicons/apple-72x72-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-76x76-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/favicons/apple-114x114-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/favicons/apple-120x120-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/favicons/apple-144x144-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/favicons/apple-152x152-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-180x180-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="/static/favicons/favicon-64x64.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="/static/favicons/android-chrome-196x196.png"
          />
          <link rel="icon" href="/static/favicons/favicon.ico" sizes="any" type="image/x-icon" />
          <meta name="msapplication-TileImage" content="/static/favicons/windows-tile.png" />
          <meta
            name="msapplication-square70x70logo"
            content="/static/favicons/windows-small-tile.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/static/favicons/windows-medium-tile.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/static/favicons/windows-wide-tile.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/static/favicons/windows-large-tile.png"
          />
          <link rel="manifest" href="/static/favicons/new-site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/new-safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <meta
            name="description"
            content="Welcome to my personal blog where I share my musings. I am a Data Engineer passionate about Data Science, building pipelines and Automation."
          />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
            integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
            crossOrigin="anonymous"
          />
          <link
            rel="icon"
            href="/static/favicons/new-favicon.svg"
            sizes="any"
            type="image/svg+xml"
          />
          <meta
            name="google-site-verification"
            content="_Ba0lKk4Dl9XMvABJ9gZEtoMPITT5Vr5TGx2M-34Z_I"
          />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-background-color dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
