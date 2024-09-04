import { useState } from "react";

import domtoimage from "dom-to-image";
import PropTypes from "prop-types";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import NewsForm from "../src/components/NewsForm";
import PreviewSection from "../src/components/PreviewSection";
import { DEFAULT_NEWS_DATA } from "../src/constants/newsConstants";

/**
 * Main component for the "Jhunnu Samachar" newspaper clipping generator.
 *
 * @returns {JSX.Element} The main component.
 */
const Home = () => {
	const [news, setNews] = useState(DEFAULT_NEWS_DATA);
	const [previewUrl, setPreviewUrl] = useState("");

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
		setPreviewUrl(dataUrl);
	};

	const handleReset = () => {
		setPreviewUrl("");
		setNews(DEFAULT_NEWS_DATA);
	};

	const handleEdit = () => {
		setPreviewUrl("");
	};

	return (
		<div className="min-h-screen">
			<Header />

			<main className="container mx-auto">
				<h1 className="text-3xl font-bold my-4">Jhunnu Samachar</h1>
				<p className="text-sm mb-4">
					Craft and share funny fake news with Jhunnu Samachar. Easily create hilarious headlines and content to entertain everyone!
				</p>

				<div className="bg-gray-300 h-[2px] w-[100px] my-4"></div>

				<div className="block relative mt-4 mb-12">
					{previewUrl ? (
						<PreviewSection previewUrl={previewUrl} onReset={handleReset} onEdit={handleEdit} />
					) : (
						<NewsForm news={news} setNews={setNews} onGeneratePreview={handleGeneratePreview} onReset={handleReset} />
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
};

Home.propTypes = {
	news: PropTypes.shape({
		heading: PropTypes.string,
		content: PropTypes.string,
		date: PropTypes.string,
		author: PropTypes.string,
	}),
	previewUrl: PropTypes.string,
};

export default Home;
