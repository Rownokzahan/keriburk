import OfferBannersDesktop from "./OfferBannersDesktop";
import OfferBannersMobile from "./OfferBannersMobile";

const OfferBanners = () => {
  return (
    <>
      <div className="sm:hidden">
        <OfferBannersMobile />
      </div>

      <div className="hidden sm:block">
        <OfferBannersDesktop />
      </div>
    </>
  );
};

export default OfferBanners;
