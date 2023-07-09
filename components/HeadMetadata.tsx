import React from "react";
import Head from "next/head";

interface HeadMetadataProps {
  imageID: string;
}

export default function HeadMetadata({ imageID }: HeadMetadataProps) {
  return (
    <>
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
        <title>Random Image from Lorem Picsum</title>

        {/* Facebook */}
        <meta property="og:title" content="Random Image from Lorem Picsum" />
        <meta
          property="og:image"
          content={`https://picsum.photos/seed/${imageID}/1200/630`}
        />
        <meta
          property="og:image:alt"
          content="Random Image from Lorem Picsum"
        />
        <meta
          property="og:url"
          content={`https://lorem-picsum-next.vercel.app/${imageID}`}
        />
        <meta
          property="og:description"
          content="Random Image from Lorem Picsum. Made with React, TypeScript, TailwindCSS & Vite."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={`https://picsum.photos/seed/${imageID}/1200/630`}
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
        />

        {/* WhatsApp */}
        <meta
          property="og:image"
          content={`https://picsum.photos/seed/${imageID}/300/300.jpg`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>

      <link
        itemProp="thumbnailUrl"
        href={`https://picsum.photos/seed/${imageID}/300/300.jpg`}
      />
      <span
        itemProp="thumbnail"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <link
          itemProp="url"
          href={`https://picsum.photos/seed/${imageID}/300/300.jpg`}
        />
      </span>
    </>
  );
}
