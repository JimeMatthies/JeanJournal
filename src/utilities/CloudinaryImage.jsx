import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

const CloudinaryImage = ({
  publicId,
  alt = "",
  width = "800",
  height = "800",
  tailwind = "",
}) => {
  const cld = new Cloudinary({ cloud: { cloudName: "do3goobuv" } });

  const img = cld
    .image(publicId)
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(width).height(height));

  return (
    <AdvancedImage cldImg={img} alt={alt} loading="lazy" className={tailwind} />
  );
};

export default CloudinaryImage;
