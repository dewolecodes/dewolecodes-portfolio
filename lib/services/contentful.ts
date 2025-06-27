import { createClient } from "contentful";

// Only check environment variables if we're actually going to use Contentful
function validateContentfulEnv() {
  if (!process.env.CONTENTFUL_SPACE_ID) {
    throw new Error("CONTENTFUL_SPACE_ID is required");
  }

  if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error("CONTENTFUL_ACCESS_TOKEN is required");
  }
}

// Lazy initialization of Contentful client
let _contentfulClient: ReturnType<typeof createClient> | null = null;
let _previewClient: ReturnType<typeof createClient> | null = null;

export function getContentfulClient() {
  if (!_contentfulClient) {
    validateContentfulEnv();
    _contentfulClient = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
  }
  return _contentfulClient;
}

export function getPreviewClient() {
  if (!_previewClient) {
    validateContentfulEnv();
    _previewClient = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken:
        process.env.CONTENTFUL_PREVIEW_TOKEN ||
        process.env.CONTENTFUL_ACCESS_TOKEN!,
      host: "preview.contentful.com",
    });
  }
  return _previewClient;
}

// Keep the old exports for backward compatibility, but make them lazy
export const contentfulClient = new Proxy(
  {} as ReturnType<typeof createClient>,
  {
    get(target, prop) {
      return getContentfulClient()[
        prop as keyof ReturnType<typeof createClient>
      ];
    },
  },
);

export const previewClient = new Proxy({} as ReturnType<typeof createClient>, {
  get(target, prop) {
    return getPreviewClient()[prop as keyof ReturnType<typeof createClient>];
  },
});
