import { Html, Head, Main, NextScript } from "next/document";

export default function PMMDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,600;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/static/images/logo.png" />
      </Head>
      <body className="paymematic">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
