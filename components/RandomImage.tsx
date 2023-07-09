import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet-async";

export default function RandomImage() {
  const [imageID, setImageID] = useState("");

  useEffect(() => {
    const id = uuidv4() as string;
    setImageID(id);
  }, []);

  return (
    <>
      <Helmet>
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
          content={`https://random-photo-react-picsum.vercel.app/${imageID}`}
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
      </Helmet>

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

      <div role="status" className="relative space-y-8">
        <div className="flex animate-pulse items-center justify-center w-[400px] h-[400px] bg-gray-300 rounded-lg shadow-xl dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <span className="sr-only">Image Loading...</span>
        {imageID && (
          <img
            className="h-auto max-w-xl rounded-lg shadow-xl z-10 absolute bottom-0"
            src={`https://picsum.photos/seed/${imageID}/400.webp`}
            alt="Random Image from Lorem Picsum"
          />
        )}
      </div>
    </>
  );
}
