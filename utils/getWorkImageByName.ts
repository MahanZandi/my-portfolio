import AryaImage from "@/public/images/aryawebsite.png";
import PortfolioImage from "@/public/images/website-cover.png";
import placeholderImage from "@/public/images/placeholder.png";

export const getWorkImageByName = (picture: any) => {
  switch (picture) {
    case "arya-image":
      return AryaImage;
    case "portfolio-image":
        return PortfolioImage;
    default:
      return placeholderImage;
  }
};
