export function getCategoryName(categories, defaultName = "News") {
  if (!categories) return defaultName;
  if (Array.isArray(categories)) return categories[0] || defaultName;
  return categories;
}