import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aditya Saxena Portfolio",
    short_name: "Aditya Saxena",
    description: "Aditya Saxena Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["portfolio", "blog", "projects", "experience", "resume"],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
