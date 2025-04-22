import AryaImage from "@/public/images/aryawebsite.png";
import PortfolioImage from "@/public/images/website-cover.png"

export const getWorkImageByName = (picture: string) => {
  switch (picture) {
    case "arya-image":
      return AryaImage;
    case "portfolio-image":
        return PortfolioImage;
  }
};
