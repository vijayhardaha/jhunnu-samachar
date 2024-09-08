/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react";

import domtoimage from "dom-to-image";
import PropTypes from "prop-types";
import { AiOutlineFire, AiOutlineClear } from "react-icons/ai";
import { GoGear } from "react-icons/go";

import NewsPreview from "./NewsPreview";
import { getQualityLabel, getSizeLabel } from "@/utils/form";

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
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const maxContentLength = 1500;

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	useEffect(() => {
		/**
		 * Handles clicks outside the color picker to close it if the click is outside the color picker element.
		 * @param {MouseEvent} event - The mouse event triggered by the user clicking.
		 */
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

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
		const scale = parseInt(news.scale, 10);
		const quality = parseFloat(news.quality);
		const width = rect.width * scale;
		const height = rect.height * scale;

		const options = {
			width,
			height,
			quality: quality,
			style: {
				transform: `scale(${Math.round(scale)})`,
				transformOrigin: "top left",
			},
		};

		const dataUrl =
			news.format === "png" ? await domtoimage.toPng(node, options) : await domtoimage.toJpeg(node, options);

		setPreview(dataUrl);
	};

	return (
		<>
			<form className="mb-10">
				<div className="grid gap-4 mb-4 md:grid-cols-2 md:gap-6">
					<div>
						<label id="news-heading-label" className="block mb-1 font-semibold" htmlFor="news-heading">
							News Heading:
						</label>
						<input
							type="text"
							id="news-heading"
							name="heading"
							aria-labelledby="news-heading-label"
							className="w-full p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-70 focus:ring-offset-2"
							value={news.heading}
							onChange={handleChange}
							aria-required="true"
							required
						/>
					</div>

					<div>
						<label id="news-publisher-label" className="block mb-1 font-semibold" htmlFor="news-publisher">
							News Publisher:
						</label>
						<input
							type="text"
							id="news-publisher"
							name="publisher"
							aria-labelledby="news-publisher-label"
							className="w-full p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-70 focus:ring-offset-2"
							value={news.publisher}
							onChange={handleChange}
							aria-required="true"
							required
						/>
					</div>
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
						className="w-full p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-70 focus:ring-offset-2"
						rows="12"
						value={news.content}
						onChange={handleChange}
						maxLength={maxContentLength}
						aria-required="true"
						required
					/>
					<p id="content-length-description" className="text-slate-600 text-sm mt-1">
						{maxContentLength - contentLength} / {maxContentLength} characters remaining
					</p>
				</div>

				<div className="relative mb-6 inline-flex" ref={dropdownRef}>
					<button
						type="button"
						onClick={toggleDropdown}
						className="bg-transparent border border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 text-sm text-slate-800 font-semibold px-3 h-10 rounded-lg inline-flex items-center justify-center whitespace-nowrap"
					>
						<GoGear className="mr-1" />
						Image Settings - {news.format.toUpperCase()} / {getSizeLabel(news.scale)} / {getQualityLabel(news.quality)}
					</button>
					{isDropdownOpen && (
						<div className="absolute left-0 top-full mt-1 z-10 bg-white shadow-lg border border-slate-200 rounded-lg p-4 py-3">
							<div className="flex flex-row gap-4">
								{/* Image Format Dropdown */}
								<div>
									<label className="block mb-1 font-semibold text-sm" htmlFor="image-format">
										Format:
									</label>
									<select
										id="image-format"
										name="format"
										value={news.format}
										onChange={handleChange}
										className="border rounded p-2 text-xs font-medium"
									>
										<option value="jpeg">JPEG</option>
										<option value="png">PNG</option>
									</select>
								</div>

								{/* Scale Dropdown */}
								<div>
									<label className="block mb-1 font-semibold text-sm" htmlFor="scale-options">
										Size:
									</label>
									<select
										id="scale-options"
										name="scale"
										value={news.scale}
										onChange={handleChange}
										className="border rounded p-2 text-xs font-medium"
									>
										<option value="2">Small</option>
										<option value="3">Medium</option>
										<option value="4">Large</option>
									</select>
								</div>

								{/* Quality Dropdown */}
								<div>
									<label className="block mb-1 font-semibold text-sm" htmlFor="quality-dropdown">
										Quality:
									</label>
									<select
										id="quality-dropdown"
										name="quality"
										value={news.quality}
										onChange={handleChange}
										className="border rounded p-2 text-xs font-medium"
									>
										<option value="0.35">Basic</option>
										<option value="0.50">Standard</option>
										<option value="0.65">Enhanced</option>
										<option value="0.75">High Definition</option>
										<option value="0.85">Ultra HD</option>
										<option value="1">Super High</option>
									</select>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className="flex space-x-4">
					<button
						type="button"
						onClick={handleGenerate}
						className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 text-base sm:text-lg text-white font-semibold h-12 px-6 rounded-lg inline-flex items-center justify-center whitespace-nowrap"
					>
						<AiOutlineFire className="mr-1" />
						Generate
					</button>
					<button
						type="button"
						onClick={handleClear}
						className="bg-transparent border border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 text-base sm:text-lg text-slate-800 font-semibold h-12 px-6 rounded-lg inline-flex items-center justify-center whitespace-nowrap"
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
		format: PropTypes.oneOf(["jpeg", "png"]),
		scale: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		quality: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	}).isRequired,
	setNews: PropTypes.func.isRequired,
	setPreview: PropTypes.func.isRequired,
};

export default NewsForm;
