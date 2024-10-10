import instaImage from "@/public/images/insta.jpg";
import facebookImage from "@/public/images/insta.jpg";
import tiktokImage from "@/public/images/insta.jpg";
import youtubeImage from "@/public/images/insta.jpg";
import instaIcon from "@/public/icons/instagram.svg";
import facebookIcon from "@/public/icons/facebook.svg";
import tiktokIcon from "@/public/icons/tiktok.svg";
import youtubeIcon from "@/public/icons/youtube.svg";

const socialItems = [
  {
    id: "01",
    image: {
      src: instaImage.src,
      alt: "Instagram",
    },
    icon: {
      src: instaIcon.src,
      alt: "Instagram icon",
    },
  },
  {
    id: "02",
    image: {
      src: facebookImage.src,
      alt: "Facebook",
    },
    icon: {
      src: facebookIcon.src,
      alt: "Facebook icon",
    },
  },
  {
    id: "03",
    image: {
      src: tiktokImage.src,
      alt: "TikTok",
    },
    icon: {
      src: tiktokIcon.src,
      alt: "TikTok icon",
    },
  },

  {
    id: "04",
    image: {
      src: youtubeImage.src,
      alt: "Youtube",
    },
    icon: {
      src: youtubeIcon.src,
      alt: "Youtube icon",
    },
  },
];

export default socialItems;
