"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import NewsForm from "./NewsForm";
import PreviewSection from "./PreviewSection";
import { DEFAULT_NEWS_DATA } from "@/constants/news";

/**
 * Main component for the "Jhunnu Samachar" newspaper clipping generator.
 *
 * @returns {JSX.Element} The main component.
 */
const Main = () => {
	const [news, setNews] = useState(DEFAULT_NEWS_DATA);
	const [previewUrl, setPreviewUrl] = useState("");

	return (
		<main className="mb-8 mt-2 sm:mt-4 md:mt-6">
			<div className="container mx-auto">
				<p className="mb-6 text-lg font-medium leading-relaxed">
					Craft and share funny fake news with Jhunnu Samachar. Easily create hilarious headlines and content to
					entertain everyone!
				</p>

				<div className="relative mb-12 mt-4">
					{previewUrl ? (
						<PreviewSection previewUrl={previewUrl} setNews={setNews} setPreview={setPreviewUrl} />
					) : (
						<NewsForm news={news} setNews={setNews} setPreview={setPreviewUrl} />
					)}
				</div>
			</div>
		</main>
	);
};

Main.propTypes = {
	/** The news data used for the form and preview. */
	news: PropTypes.shape({
		heading: PropTypes.string,
		content: PropTypes.string,
		date: PropTypes.string,
		publisher: PropTypes.string,
	}),
	/** The URL of the preview image. */
	previewUrl: PropTypes.string,
};

export default Main;
