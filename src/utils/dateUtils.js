// utils/dateUtils.js

import { format } from "date-fns";

/**
 * Formats a date object to a specific string format.
 *
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date) => {
	return format(date, "EEEE - dd MMMM, yyyy");
};
