import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="Micourse - Learn Anything" />
          <meta
            name="description"
            content="We provide the best courses to help you achieve your dreams. Learn anytime, Learn anywhere."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Micourse - Learn Anything" />
          <meta
            property="og:description"
            content="We provide the best courses to help you achieve your dreams. Learn anytime, Learn anywhere."
          />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.svg`}
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Micourse - Learn Anything" />
          <meta
            property="twitter:description"
            content="We provide the best courses to help you achieve your dreams. Learn anytime, Learn anywhere."
          />
          <meta
            property="twitter:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.svg`}
          />
          <link
            rel="shortcut icon"
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.svg`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
