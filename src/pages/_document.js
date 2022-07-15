import { Html, Head, Main, NextScript } from "next/document";

export default function PMMDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" type="image/png" href="/static/images/logo.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap"
        />
      </Head>
      <body className="paymematic">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
