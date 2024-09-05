import { useState } from "react";

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

	return (
		<div className="min-h-screen">
			<Header />

			<main className="container my-8 mx-auto">
				<p className="text-sm mb-4">
					Craft and share funny fake news with Jhunnu Samachar. Easily create hilarious headlines and content to entertain everyone!
				</p>

				<div className="bg-gray-300 h-[2px] w-[100px] my-4"></div>

				<div className="block relative mt-4 mb-12">
					{previewUrl ? (
						<PreviewSection previewUrl={previewUrl} setNews={setNews} setPreview={setPreviewUrl} />
					) : (
						<NewsForm news={news} setNews={setNews} setPreview={setPreviewUrl} />
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
		publisher: PropTypes.string,
	}),
	previewUrl: PropTypes.string,
};

export default Home;
