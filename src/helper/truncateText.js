export function truncateText(text, { words } = {}) {
  if (!text) return "";
  if (words && Number.isInteger(words) && words > 0) {
    const parts = text.trim().split(/\s+/).filter(Boolean);
    if (parts.length <= words) return text;
    return parts.slice(0, words).join(" ");
  }
  return text;
}
