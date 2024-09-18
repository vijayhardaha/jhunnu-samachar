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
		<div className="fixed inset-0 -z-10 max-w-[600px] overflow-hidden opacity-0" aria-hidden="true">
			<div id="news-preview" className="relative overflow-hidden bg-white">
				<div
					className="absolute inset-0 z-10 bg-cover bg-center"
					style={{ backgroundImage: `url('/images/newspaper-bg.webp')`, opacity: 0.45 }}
				/>

				<div className="relative z-20 p-8 text-black">
					<div className={`${englishTextFont.className}`}>
						<h1 className={`text-6xl sm:text-7xl ${titleFont.className} mb-8 text-center font-bold text-primary`}>
							Jhunnu Samachar
						</h1>

						<hr className="my-2 h-[2px] border-0 bg-black" />

						<div className="my-3 flex flex-row justify-between px-1 text-xs">
							<span className="whitespace-nowrap">{formatDate(new Date(), "EEEE - dd, MMMM yyyy")}</span>
							<span className="whitespace-nowrap">Publisher: {publisher}</span>
						</div>

						<hr className="my-2 mb-6 h-[2px] border-0 bg-black" />

						<h2
							className={`${headingFontClass} mb-6 text-4xl font-semibold leading-tight text-secondary sm:text-5xl sm:leading-tight`}
						>
							{heading}
						</h2>

						<p className={`${contentFontClass} mb-0 whitespace-pre-line text-lg leading-relaxed`}>{content}</p>
					</div>

					<div className="mt-8 text-center text-xs">
						<hr className="mx-auto my-6 h-[2px] w-[100px] border-0 bg-primary" />
						<p>
							Visit us at <span className="font-semibold text-primary underline">jhunnusamachar.vercel.app</span>
						</p>
						<p className="mt-2">
							This app is built by <span className="font-semibold text-primary underline">Vijay Hardaha</span>
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
