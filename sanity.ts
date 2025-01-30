import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "./types/global.types";

const client = createClient({
  projectId: "em0apcsr", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-01-01", // Use the correct API version
  useCdn: false, // Set to `true` for faster, cached responses
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}

export default client;
