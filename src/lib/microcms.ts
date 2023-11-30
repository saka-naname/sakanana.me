import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

const blogEndpoint = "blog";

export type Blog = {
  id: string;
  title: string;
  description: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required.");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required.");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getAllBlogIds = async (queries?: MicroCMSQueries) =>
  client.getAllContentIds({ endpoint: blogEndpoint, ...queries });

export const getAllBlogContents = async (queries?: MicroCMSQueries) =>
  client.getAllContents({
    endpoint: blogEndpoint,
    queries: queries,
  });

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Blog>({
    endpoint: blogEndpoint,
    contentId,
    queries,
  });
};
