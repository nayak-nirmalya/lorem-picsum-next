import { useRouter } from "next/router";
import Head from "next/head";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <p>Post: {router.query.id}</p>
      <div>
        <Head>
          <title>My page title</title>
        </Head>
        <p>Hello world!</p>
      </div>
    </>
  );
}
