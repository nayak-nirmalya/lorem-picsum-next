import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function Share({ imageID }: { imageID: string }) {
  const LINK = `lorem-picsum-next.vercel.app/${imageID}`;

  return (
    <div className="inline-block m-2">
      <p className="font-bold mt-2 text-center">SHARE IMAGE ON</p>

      <FacebookShareButton className="m-1" url={LINK}>
        <FacebookIcon round size={40} />
      </FacebookShareButton>

      <WhatsappShareButton
        className="m-1"
        title="Random Image from Lorem Picsum"
        url={LINK}
      >
        <WhatsappIcon round size={40} />
      </WhatsappShareButton>

      <TwitterShareButton className="m-1" url={LINK}>
        <TwitterIcon round size={40} />
      </TwitterShareButton>
    </div>
  );
}
