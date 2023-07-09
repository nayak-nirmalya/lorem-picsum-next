import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <link
          itemProp="thumbnailUrl"
          href="https://picsum.photos/300/300.jpg"
        />
        <span
          itemProp="thumbnail"
          itemScope
          itemType="http://schema.org/ImageObject"
        >
          <link itemProp="url" href="https://picsum.photos/300/300.jpg" />
        </span> */}
      </body>
    </Html>
  );
}
