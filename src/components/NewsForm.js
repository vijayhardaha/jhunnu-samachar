/* eslint-disable react/no-unknown-property */
import { useState } from "react";

import domtoimage from "dom-to-image";
import PropTypes from "prop-types";
import { AiOutlineFire, AiOutlineClear } from "react-icons/ai";

import NewsPreview from "./NewsPreview";

/**
 * Form for inputting news details and generating preview.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.news - The news details object.
 * @param {Function} props.setNews - Function to update the news details.
 * @param {Function} props.setPreview - Function to update the preview URL.
 * @returns {JSX.Element} The form component.
 */
const NewsForm = ({ news, setNews, setPreview }) => {
	const [contentLength, setContentLength] = useState(news.content.length);
	const maxContentLength = 1000;

	/**
	 * Handles changes to form input fields and updates the news data.
	 *
	 * @param {Event} e - The change event from the input field.
	 */
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

	/**
	 * Updates the image format in the news data.
	 *
	 * @param {string} format - The selected image format ('jpeg' or 'png').
	 */
	const handleImageFormatChange = (format) => {
		setNews((prevNews) => ({
			...prevNews,
			type: format,
		}));
	};

	/**
	 * Updates the scale in the news data.
	 *
	 * @param {number} newScale - The new scale value (e.g., 1, 2, 4).
	 */
	const handleScaleChange = (newScale) => {
		setNews((prevNews) => ({
			...prevNews,
			scale: newScale,
		}));
	};

	/**
	 * Updates the quality in the news data.
	 *
	 * @param {Event} e - The change event from the range input field.
	 */
	const handleQualityChange = (e) => {
		setNews((prevNews) => ({
			...prevNews,
			quality: parseFloat(e.target.value),
		}));
	};

	/**
	 * Clears the heading and content in the news data and resets content length.
	 */
	const handleClear = () => {
		setNews((prevNews) => ({
			...prevNews,
			heading: "",
			content: "",
		}));
		setContentLength(0);
	};

	/**
	 * Generates a preview image of the news content with the specified settings.
	 *
	 * Retrieves the dimensions of the preview node, applies scaling and quality settings,
	 * and sets the generated image URL as the preview.
	 */
	const handleGenerate = async () => {
		const node = document.getElementById("news-preview");

		const rect = node.getBoundingClientRect();
		const width = rect.width * news.scale;
		const height = rect.height * news.scale;

		const options = {
			width,
			height,
			quality: parseFloat(news.quality),
			style: {
				transform: `scale(${Math.round(news.scale)})`,
				transformOrigin: "top left",
			},
		};

		const dataUrl = news.type === "png" ? await domtoimage.toPng(node, options) : await domtoimage.toJpeg(node, options);

		setPreview(dataUrl);
	};

	return (
		<>
			<form className="mb-10">
				<p id="news-form-description" className="text-sm mb-6 leading-relaxed font-medium">
					Fill out the form with your headline, publisher, and content. Complete all fields to generate and preview your custom newspaper clipping.
				</p>

				<div className="grid gap-4 mb-4 md:grid-cols-2 md:gap-6">
					<div>
						<label id="news-heading-label" className="block mb-1 font-semibold text-sm" htmlFor="news-heading">
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

					<div>
						<label id="news-publisher-label" className="block mb-1 font-semibold text-sm" htmlFor="news-publisher">
							News Publisher:
						</label>
						<input
							type="text"
							id="news-publisher"
							name="publisher"
							aria-labelledby="news-publisher-label"
							className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm"
							value={news.publisher}
							onChange={handleChange}
							aria-required="true"
							required
						/>
					</div>
				</div>

				<div className="mb-4">
					<label id="news-content-label" className="block mb-1 font-semibold text-sm" htmlFor="news-content">
						News Content:
					</label>
					<textarea
						id="news-content"
						name="content"
						aria-labelledby="news-content-label"
						aria-describedby="content-length-description"
						className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm"
						rows="8"
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

				<div className="mb-8 flex flex-row gap-8">
					<div>
						<label className="block mb-1 font-semibold text-sm" htmlFor="image-format">
							Type:
						</label>
						<div className="inline-flex">
							<button
								id="jpeg-button"
								type="button"
								className={`border border-r-0 rounded-l p-1 px-3 text-xs font-medium ${news.type === "jpeg" ? "bg-slate-900 text-white border-slate-900" : ""}`}
								onClick={() => handleImageFormatChange("jpeg")}
							>
								Jpeg
							</button>
							<button
								id="png-button"
								type="button"
								className={`border border-l-0 rounded-r p-1 px-3 text-xs font-medium ${news.type === "png" ? "bg-slate-900 text-white border-slate-900" : ""}`}
								onClick={() => handleImageFormatChange("png")}
							>
								Png
							</button>
						</div>
					</div>

					<div>
						<label className="block mb-1 font-semibold text-sm" htmlFor="scale-options">
							Size:
						</label>
						<div className="inline-flex">
							<button
								id="scale-2x"
								type="button"
								className={`border border-r-0 rounded-l p-1 px-3 text-xs font-medium ${news.scale === 2 ? "bg-slate-900 text-white border-slate-900" : ""}`}
								onClick={() => handleScaleChange(2)}
							>
								2x
							</button>
							<button
								id="scale-4x"
								type="button"
								className={`border border-l-0 rounded-r p-1 px-3 text-xs font-medium ${news.scale === 4 ? "bg-slate-900 text-white border-slate-900" : ""}`}
								onClick={() => handleScaleChange(4)}
							>
								4x
							</button>
						</div>
					</div>

					<div>
						<label className="block mb-1 font-semibold text-sm" htmlFor="quality-slider">
							Quality: <span className="text-xs bg-yellow-100 px-2 py-0.5 rounded-sm">{news.quality}</span>
						</label>
						<div className="relative">
							<input
								id="quality-slider"
								type="range"
								min="0.35"
								max="1"
								step="0.05"
								value={news.quality}
								onChange={handleQualityChange}
								className="w-full h-1 bg-slate-400 appearance-none rounded-lg cursor-pointer focus:outline-none"
								style={{
									WebkitAppearance: "none",
									appearance: "none",
								}}
							/>
							<style jsx>{`
								input[type="range"]::-webkit-slider-thumb {
									-webkit-appearance: none;
									appearance: none;
									width: 14px;
									height: 14px;
									border-radius: 50%;
									background: #0f172a;
									cursor: pointer;
								}
								input[type="range"]::-moz-range-thumb {
									width: 14px;
									height: 14px;
									border-radius: 50%;
									background: #0f172a;
									cursor: pointer;
								}
							`}</style>
						</div>
					</div>
				</div>

				<div className="flex space-x-4">
					<button
						onClick={handleGenerate}
						type="button"
						className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-white font-semibold h-12 px-6 rounded-lg inline-flex items-center justify-center whitespace-nowrap"
					>
						<AiOutlineFire className="mr-1" />
						Generate
					</button>
					<button
						onClick={handleClear}
						type="button"
						className="bg-transparent border border-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-gray-800 font-semibold h-12 px-6 rounded-lg inline-flex items-center justify-center whitespace-nowrap"
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
		publisher: PropTypes.string.isRequired,
		type: PropTypes.oneOf(["jpeg", "png"]),
		scale: PropTypes.number,
		quality: PropTypes.number,
	}).isRequired,
	setNews: PropTypes.func.isRequired,
	setPreview: PropTypes.func.isRequired,
};

export default NewsForm;
