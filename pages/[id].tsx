import { useRouter } from "next/router";
import Head from "next/head";

export default function Page() {
  const imageID = "";
  const router = useRouter();
  return (
    <>
      <p>Post: {router.query.id}</p>
      <div>
        <Head>
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
        </Head>
        <p>Hello world!</p>
      </div>
    </>
  );
}
