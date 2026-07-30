const DEFAULT_IMAGE = "https://taawon.com/images_default/default.jpg";

export function getValidImage(image) {
  if (!image && image !== 0) return DEFAULT_IMAGE;
  if (typeof image === "object")
    return image.small || image.medium || image.large || DEFAULT_IMAGE;
  if (image === "") return DEFAULT_IMAGE;
  return image;
}
