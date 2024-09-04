import { useState } from "react";

import domtoimage from "dom-to-image";
import "flatpickr/dist/flatpickr.css";
import PropTypes from "prop-types";
import Flatpickr from "react-flatpickr";
import { AiOutlineFire, AiOutlineClear } from "react-icons/ai";

import NewsPreview from "./NewsPreview";
import { formatDate } from "../utils/dateUtils";

/**
 * Form for inputting news details.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.news - The news details object.
 * @param {Function} props.setNews - Function to update the news details.
 * @param {Function} props.setPreview - Function to update the preview url.
 * @returns {JSX.Element} The form component.
 */
const NewsForm = ({ news, setNews, setPreview }) => {
	const [contentLength, setContentLength] = useState(news.content.length);
	const maxContentLength = 1000;

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "content") {
			setContentLength(value.length);
		}
		setNews((prevNews) => ({
			...prevNews,
			[name]: value,
		}));
	};

	const handleDateChange = (date) => {
		if (date.length > 0) {
			const selected = date[0];
			setNews((prevNews) => ({
				...prevNews,
				date: formatDate(selected, "l - d F, Y"),
			}));
		}
	};

	const handleReset = () => {
		setNews((prevNews) => ({
			...prevNews,
			heading: "",
			content: "",
		}));
		setContentLength(0);
	};

	const handleGeneratePreview = async () => {
		const node = document.getElementById("news-preview");

		// Get the node's dimensions.
		const rect = node.getBoundingClientRect();
		const width = rect.width * 3;
		const height = rect.height * 3;

		const options = {
			width, // Set dynamic width.
			height, // Set dynamic height.
			quality: 1, // Increase the image quality (0 to 1).
			style: {
				transform: "scale(3)", // Scale the node for higher resolution.
				transformOrigin: "top left", // Ensure scaling doesn't affect position.
			},
		};

		const dataUrl = await domtoimage.toJpeg(node, options);
		setPreview(dataUrl);
	};

	return (
		<>
			<form className="mb-10">
				<p id="news-form-description" className="text-sm mb-6 leading-relaxed">
					Fill out the form with your headline, date, author, and content. Complete all fields to generate and preview your custom newspaper clipping.
				</p>

				<div className="mb-4">
					<label id="news-heading-label" className="block mb-1 font-semibold" htmlFor="news-heading">
						News Heading:
					</label>
					<input
						type="text"
						id="news-heading"
						name="heading"
						aria-labelledby="news-heading-label"
						className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm"
						value={news.heading}
						onChange={handleChange}
						aria-required="true"
						required
					/>
				</div>

				<div className="mb-4">
					<label id="news-date-label" className="block mb-1 font-semibold" htmlFor="news-date">
						Date:
					</label>
					<Flatpickr
						value={news.date ? formatDate(new Date(news.date), "l - d F, Y") : formatDate(new Date(), "l - d F, Y")}
						onChange={handleDateChange}
						options={{ dateFormat: "l - d F, Y" }}
						className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm"
						aria-labelledby="news-date-label"
						aria-required="true"
						required
					/>
				</div>

				<div className="mb-4">
					<label id="news-author-label" className="block mb-1 font-semibold" htmlFor="news-author">
						Author:
					</label>
					<input
						type="text"
						id="news-author"
						name="author"
						aria-labelledby="news-author-label"
						className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm"
						value={news.author}
						onChange={handleChange}
						aria-required="true"
						required
					/>
				</div>

				<div className="mb-4">
					<label id="news-content-label" className="block mb-1 font-semibold" htmlFor="news-content">
						News Content:
					</label>
					<textarea
						id="news-content"
						name="content"
						aria-labelledby="news-content-label"
						aria-describedby="content-length-description"
						className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm"
						rows="10"
						value={news.content}
						onChange={handleChange}
						maxLength={maxContentLength}
						aria-required="true"
						required
					/>
					<p id="content-length-description" className="text-gray-600 text-sm mt-1">
						{maxContentLength - contentLength} / {maxContentLength} characters remaining
					</p>
				</div>

				<div className="flex space-x-4">
					<button
						onClick={handleGeneratePreview}
						type="button"
						className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-white font-semibold h-12 px-6 rounded-lg w-full inline-flex items-center justify-center sm:w-auto whitespace-nowrap"
					>
						<AiOutlineFire className="mr-1" />
						Generate
					</button>
					<button
						onClick={handleReset}
						type="button"
						className="bg-transparent border border-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-gray-800 font-semibold h-12 px-6 rounded-lg w-full inline-flex items-center justify-center sm:w-auto whitespace-nowrap"
					>
						<AiOutlineClear className="mr-1" />
						Clear
					</button>
				</div>
			</form>

			<NewsPreview news={news} />
		</>
	);
};

NewsForm.propTypes = {
	news: PropTypes.shape({
		heading: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
	}).isRequired,
	setNews: PropTypes.func.isRequired,
	setPreview: PropTypes.func.isRequired,
};

export default NewsForm;
