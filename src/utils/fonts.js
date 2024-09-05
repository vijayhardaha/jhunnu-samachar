import { Abril_Fatface, Mate, Noto_Serif_Devanagari, Palanquin_Dark, Pirata_One } from "next/font/google";

/**
 * Font configuration for titles.
 * @type {import("next/font").FontConfig}
 */
export const titleFont = Pirata_One({
	weight: "400",
	subsets: ["latin"],
});

/**
 * Font configuration for English headings.
 * @type {import("next/font").FontConfig}
 */
export const englishHeadingFont = Abril_Fatface({
	weight: "400",
	subsets: ["latin"],
});

/**
 * Font configuration for Hindi headings.
 * @type {import("next/font").FontConfig}
 */
export const hindiHeadingFont = Palanquin_Dark({
	weight: ["400", "600", "700"],
	subsets: ["devanagari"],
});

/**
 * Font configuration for English text.
 * @type {import("next/font").FontConfig}
 */
export const englishTextFont = Mate({
	weight: "400",
	subsets: ["latin"],
});

/**
 * Font configuration for Hindi text.
 * @type {import("next/font").FontConfig}
 */
export const hindiTextFont = Noto_Serif_Devanagari({
	weight: ["400", "600", "700"],
	subsets: ["devanagari"],
});

/**
 * Function to get the appropriate font class based on text language.
 *
 * @param {string} text - The text to be checked for language.
 * @param {boolean} [isHeading=false] - Whether the text is a heading or not.
 * @returns {string} - The font class name based on the language and heading status.
 */
export const getFontClass = (text, isHeading = false) => {
	// Basic check for Devanagari script (Hindi)
	const isHindi = /[\u0900-\u097F]/.test(text);

	if (isHeading) {
		return isHindi ? hindiHeadingFont.className : englishHeadingFont.className;
	} else {
		return isHindi ? hindiTextFont.className : englishTextFont.className;
	}
};
