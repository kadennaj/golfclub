export const SITE_URL = "https://golfclub-seven.vercel.app";

export function siteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

export const MAIN_PHONE_HREF = "tel:+19058894653";

export function phoneHref(extension?: string) {
  return extension ? `${MAIN_PHONE_HREF};ext=${extension}` : MAIN_PHONE_HREF;
}
