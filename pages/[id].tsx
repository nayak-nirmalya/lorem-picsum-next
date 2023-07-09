import HeadMetadata from "@/components/HeadMetadata";
import HeaderText from "@/components/HeaderText";
import RandomImage from "@/components/RandomImage";
import RefreshButton from "@/components/RefreshButton";
import Share from "@/components/Share";

export default function Page({ id }: { id: string }) {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <HeadMetadata imageID={id} />

      <link
        itemProp="thumbnailUrl"
        href={`https://picsum.photos/seed/${id}/300/300.jpg`}
      />
      <span
        itemProp="thumbnail"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <link
          itemProp="url"
          href={`https://picsum.photos/seed/${id}/300/300.jpg`}
        />
      </span>

      <HeaderText />
      <RefreshButton />
      <RandomImage imageID={id} />
      <Share imageID={id} />
    </div>
  );
}

export const getServerSideProps = async (context: {
  query: { id: string };
}) => {
  const { id } = context.query;
  return { props: { id } };
};
