import { Html, Head, Main, NextScript } from 'next/document'

const CustomDocument = () => {
  const url = process.env.DOMAIN || 'localhost'
  const title = 'Kiiiyo&#39;s.IO'
  const description = 'Kiiiyo&#39;s Portfolio Web Site.'

  return (
    <Html lang="ja-JP">
      <Head>
        {/* Change the contents of `<Head>` as needed. */}
        <meta name="theme-color" content="#010101" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:type" content="website" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default CustomDocument
