import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2023-05-03",
    useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlForImage = (source: Image): string => {
    return createImageUrlBuilder(config)
        .image(source)
        .auto("format")
        .fit("max")
        .url();
};
