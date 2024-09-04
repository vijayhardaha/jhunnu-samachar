import { Abril_Fatface, Special_Elite, Martel, Palanquin_Dark } from "next/font/google";

export const abrilFatface = Abril_Fatface({
	weight: "400",
	subsets: ["latin"],
});

export const palanquinDark = Palanquin_Dark({
	weight: ["400", "600", "700"],
	subsets: ["devanagari"],
});

export const specialElite = Special_Elite({
	weight: "400",
	subsets: ["latin"],
});

export const martel = Martel({
	weight: ["400", "600", "700"],
	subsets: ["devanagari"],
});

/**
 * Function to get the appropriate font class based on text language.
 *
 * @param {string} text - The text to be checked.
 * @param {boolean} isHeading - Whether the text is a heading or not.
 * @returns {string} - The font class name.
 */
export const getFontClass = (text, isHeading = false) => {
	// Basic check for Devanagari script (Hindi)
	const isHindi = /[\u0900-\u097F]/.test(text);

	if (isHeading) {
		return isHindi ? palanquinDark.className : abrilFatface.className;
	} else {
		return isHindi ? martel.className : specialElite.className;
	}
};
