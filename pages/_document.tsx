import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Random Image from Lorem Picsum. Made with React, TypeScript, TailwindCSS & Vite."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, TypeScript, React, Vite, TailwindCSS"
        />
        <meta name="author" content="Nirmalya Nayak" />

        {/* Facebook */}
        {/* <meta property="og:title" content="Random Image from Lorem Picsum" />
        <meta property="og:image" content="https://picsum.photos/1200/630" />
        <meta
          property="og:image:alt"
          content="Random Image from Lorem Picsum"
        />
        <meta
          property="og:url"
          content="https://lorem-picsum-next.vercel.app/"
        />
        <meta
          property="og:description"
          content="Random Image from Lorem Picsum. Made with React, TypeScript, TailwindCSS & Vite."
        /> */}

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://picsum.photos/1200/630"
        />
        <meta
          property="twitter:image:alt"
          content="Random Image from Lorem Picsum"
        />
        <meta name="twitter:title" content="Random Image from Lorem Picsum" />
        <meta name="twitter:creator" content="@nirmalya_nayak" />
        <meta
          name="twitter:description"
          content="Random Image from Lorem Picsum. Made with React, TypeScript, TailwindCSS & Vite."
        /> */}

        {/* WhatsApp */}
        {/* <meta property="og:image" content="https://picsum.photos/300/300.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" /> */}
      </Head>
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
