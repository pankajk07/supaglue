import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    // TUTORIAL: Change `light` to `dark`
    <Html data-theme="light" lang="en" className="h-full bg-gray-100">
      <Head />
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
