import { useState } from "react";

import "flatpickr/dist/flatpickr.css";
import PropTypes from "prop-types";
import Flatpickr from "react-flatpickr";

import NewsPreview from "./NewsPreview";
import { DEFAULT_NEWS_DATA } from "../constants/newsConstants";
import { formatDate } from "../utils/dateUtils"; // Adjust the path as needed

/**
 * Form for inputting news details.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.news - The news details object.
 * @param {Function} props.setNews - Function to update the news details.
 * @param {Function} props.onGeneratePreview - Function to generate the preview.
 * @returns {JSX.Element} The form component.
 */
const NewsForm = ({ news, setNews, onGeneratePreview }) => {
	const [contentLength, setContentLength] = useState(news.content.length);
	const maxContentLength = 1000; // Set your maximum character limit here

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
		setNews(DEFAULT_NEWS_DATA);
		setContentLength(DEFAULT_NEWS_DATA.content.length);
	};

	return (
		<>
			<form className="mb-10" aria-labelledby="news-form-title">
				<h1 id="news-form-title" className="text-2xl font-bold mb-4">
					Enter News Details
				</h1>
				<p id="news-form-description" className="text-sm mb-6 leading-relaxed">
					Please fill out the form below to input the details of the news you want to feature. Provide a clear heading, select the date, enter the
					author’s name, and add the content of the news. Ensure that all fields are filled out correctly to generate a preview of the news
					article. This information will help in creating a well-structured and accurate preview for your review.
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
						className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-sm"
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
						className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-sm"
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
						className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-sm"
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
						className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-sm"
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
						onClick={onGeneratePreview}
						type="button"
						className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto whitespace-nowrap"
					>
						Generate Preview
					</button>
					<button
						onClick={handleReset}
						type="button"
						className="bg-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-gray-800 font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto whitespace-nowrap"
					>
						Reset
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
	onGeneratePreview: PropTypes.func.isRequired,
};

export default NewsForm;
