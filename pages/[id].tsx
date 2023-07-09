import { useRouter } from "next/router";

export default function Page() {
  const imageID = "";
  const router = useRouter();
  return (
    <>
      <p>Post: {router.query.id}</p>
      <div>
        <p>Hello world!</p>
      </div>
    </>
  );
}
