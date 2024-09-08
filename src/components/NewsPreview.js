import { format as formatDate } from "date-fns";
import PropTypes from "prop-types";

import {
	titleFont,
	englishHeadingFont,
	hindiHeadingFont,
	englishTextFont,
	hindiTextFont,
	containsHindi,
} from "../utils/fonts";

/**
 * Component to display the news preview.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.news - The news details object.
 * @returns {JSX.Element} The news preview component.
 */
const NewsPreview = ({ news }) => {
	const { publisher, heading, content } = news;

	const headingFontClass = containsHindi(heading) ? hindiHeadingFont.className : englishHeadingFont.className;
	const contentFontClass = containsHindi(content) ? hindiTextFont.className : englishTextFont.className;

	return (
		<div className="fixed inset-0 z-10 max-w-[600px] overflow-hidden bg-white opacity-1">
			<div id="news-preview" className="relative">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url('/images/newspaper-bg.webp')`, opacity: 0.45 }}
					aria-hidden="true"
				/>

				<div className="relative z-10 p-8 text-black">
					<div className={`${englishTextFont.className} leading-relaxed`}>
						<h1
							className={`text-6xl sm:text-7xl ${titleFont.className} text-center text-primary font-bold mb-8`}
							aria-labelledby="app-title"
						>
							Jhunnu Samachar
						</h1>

						<hr className="my-2 h-[2px] bg-black border-0" />

						<div className="flex flex-row justify-between my-3 px-1 text-xs">
							<span className="whitespace-nowrap">{formatDate(new Date(), "EEEE - dd, MMMM yyyy")}</span>
							<span className="whitespace-nowrap">Publisher: {publisher}</span>
						</div>

						<hr className="my-2 h-[2px] bg-black border-0 mb-6" />

						<h2
							className={`${headingFontClass} text-4xl sm:text-5xl text-secondary font-semibold mb-6 leading-tight`}
							aria-labelledby="news-heading"
						>
							{heading}
						</h2>

						<p className={`${contentFontClass} text-lg mb-0 whitespace-pre-line`} aria-labelledby="news-content">
							{content}
						</p>
					</div>

					<div className="mt-8 text-center text-xs">
						<hr className="my-6 h-[2px] w-[100px] bg-primary border-0 mx-auto" />
						<p>
							Visit us at{" "}
							<a
								href="https://jhunnusamachar.vercel.app"
								className="font-semibold text-primary underline"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="Visit Jhunnu Samachar website"
							>
								jhunnusamachar.vercel.app
							</a>
						</p>
						<p className="mt-2">
							This app is built by{" "}
							<a
								href="https://twitter.com/vijayhardaha"
								className="font-semibold text-primary underline"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="Visit Vijay Hardaha's Twitter profile"
							>
								Vijay Hardaha
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

NewsPreview.propTypes = {
	news: PropTypes.shape({
		publisher: PropTypes.string.isRequired,
		heading: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	}).isRequired,
};

export default NewsPreview;
