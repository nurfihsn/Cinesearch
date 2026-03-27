export const siteConfig = {
  name: "CineSearch",
  description: "Discover and explore movies from around the world",
  url: (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000") as string,
} as const;
