/**
 * The base URL of the site, retrieved from environment variables.
 * Defaults to an empty string if the environment variable is not set.
 * @type {string}
 */
export const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || ""; // Default to an empty string if NEXT_PUBLIC_BASE_URL is not defined.

/**
 * Default site title for SEO.
 *
 * @type {string}
 * @default "Jhunnu Samachar - Newspaper Clipping Generator"
 */
export const SITE_TITLE = "Jhunnu Samachar: Create and Share Hilarious Fake News Stories!";

/**
 * Short version of the site title for SEO and display purposes.
 *
 * @type {string}
 * @default "Jhunnu Samachar"
 */
export const SITE_TITLE_SHORT = "Jhunnu Samachar";

/**
 * Default site description for SEO.
 *
 * Provides a brief overview of the site's purpose and functionality.
 * @type {string}
 * @default "Create and customize your own newspaper clippings with Jhunnu Samachar. Input your news heading, publisher, and content to generate a professional-looking newspaper clipping image."
 */
export const SITE_DESC =
	"Jhunnu Samachar is your go-to web app for creating and sharing funny fake news stories. With an easy-to-use interface, you can generate and customize amusing headlines and content to entertain your friends and family. Start crafting your next hilarious news article now!";

/**
 * Default SEO configuration for the Jhunnu Samachar newspaper clipping generator app.
 *
 * @type {object}
 * @property {string} title - The default title for the site.
 * @property {string} description - The default description for the site.
 * @property {string} keywords - Keywords for SEO to enhance discoverability.
 * @property {string} language - Language code for the site content.
 * @property {string} author - Author of the content for attribution.
 * @property {string} image - URL of the image for social media previews.
 * @property {string} url - URL of the site for Open Graph metadata.
 * @property {string} googlebot - Googlebot directive for indexing.
 * @property {string} robots - General robots directive for indexing.
 */
export const DEFAULT_SEO = {
	title: SITE_TITLE,
	description: SITE_DESC,
	keywords:
		"Jhunnu Samachar, Funny fake news, Create fake news stories, Generate hilarious headlines, Fake news generator, Share funny news stories, Comedy news app, Customizable fake news, Funny news creator, Hilarious news articles",
	language: "en-US",
	author: "Vijay Hardaha",
	image: `${SITE_URL}/thumbnail.png`,
	url: SITE_URL,
	googlebot: "index, follow",
	robots: "index, follow",
};
