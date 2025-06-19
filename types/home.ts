import type { Image } from "sanity";

export interface Homepage {
    _id: string;
    _type: "homepage";
    _createdAt: string;
    _updatedAt: string;
    title: string;
    subtitle: string;
    heroPhoto: Image & {
        alt: string;
    };
}
