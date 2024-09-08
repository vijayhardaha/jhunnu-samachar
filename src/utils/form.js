/**
 * Returns a descriptive label for image quality based on the given value.
 *
 * @param {number|string} value - The quality value, either as a number or string.
 * @returns {string} The quality label.
 */
export function getQualityLabel(value) {
	if (typeof value === "string") value = parseFloat(value);
	if (value <= 0.35) return "Basic";
	if (value <= 0.5) return "Standard";
	if (value <= 0.65) return "Enhanced";
	if (value <= 0.75) return "High Definition";
	if (value <= 0.85) return "Ultra HD";
	return "Super High";
}

/**
 * Returns a descriptive label for image size based on the given value.
 *
 * @param {number|string} value - The size value, either as a number or string.
 * @returns {string} The size label.
 */
export function getSizeLabel(value) {
	if (typeof value === "string") value = parseFloat(value);
	if (value <= 2) return "Small";
	if (value <= 3) return "Medium";
	if (value <= 4) return "Large";
	return "Extra Large";
}
