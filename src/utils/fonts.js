import { Abril_Fatface, Mate, Noto_Serif_Devanagari, Rozha_One, Pirata_One } from "next/font/google";

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
export const hindiHeadingFont = Rozha_One({
	weight: ["400"],
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
 * Checks if the given text contains Hindi characters.
 *
 * @param {string} text - The text to check.
 * @returns {boolean} True if the text contains Hindi characters, false otherwise.
 */
export const containsHindi = (text) => {
	const hindiRegex = /[\u0900-\u097F]/;
	return hindiRegex.test(text);
};
