export const formatDate = (dateString) => {
  if (!dateString) return "";

  const normalizedDate =
    typeof dateString === "string" ? dateString.trim() : dateString;

  if (!normalizedDate) return "";

  const date = new Date(normalizedDate);

  if (isNaN(date.getTime())) {
    const fallbackDate = new Date(normalizedDate.replace(/\s+/g, " "));
    if (isNaN(fallbackDate.getTime())) {
      return "";
    }
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(fallbackDate);
  }

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
};
