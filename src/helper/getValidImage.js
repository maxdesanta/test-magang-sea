const DEFAULT_IMAGE = "https://placehold.co/600x400?text=No+Image";

export function getValidImage(image) {
  if (!image && image !== 0) return DEFAULT_IMAGE;
  if (typeof image === "object")
    return image.small || image.medium || image.large || DEFAULT_IMAGE;
  if (image === "") return DEFAULT_IMAGE;
  return image;
}
