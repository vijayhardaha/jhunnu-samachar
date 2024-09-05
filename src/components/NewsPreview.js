import { formatDate } from "date-fns";
import PropTypes from "prop-types";

import { getFontClass, titleFont } from "../utils/fonts";

/**
 * Component to display the news preview.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.news - The news details object.
 * @returns {JSX.Element} The news preview component.
 */
const NewsPreview = ({ news }) => {
	const { publisher, heading, content } = news;

	const englishFontClass = getFontClass("publisher");
	const headingFontClass = getFontClass(heading, true);
	const contentFontClass = getFontClass(content);

	return (
		<div className="mb-10 max-w-[600px] fixed top-0 left-0 right-0 bottom-0 z-[-1] visibility-hidden opacity-0">
			<div id="news-preview" className="relative bg-white overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: `url('/images/newspaper-bg.jpg')`,
						opacity: 0.35,
					}}
				/>

				<div className="relative z-10 p-8 text-black">
					<div className={`${contentFontClass} leading-relaxed`}>
						<h1 className={`${titleFont.className} text-6xl sm:text-7xl text-primary mb-8 font-bold text-center`}>Jhunnu Samachar</h1>
						<hr className="my-2 h-[2px] bg-black border-0" />
						<div className={`${englishFontClass} flex flex-col sm:flex-row justify-between my-3 px-1 space-y-2 sm:space-y-0 text-xs `}>
							<span className="whitespace-nowrap">{formatDate(new Date(), "EEEE - dd, MMMM yyyy")}</span>
							<span className="whitespace-nowrap">Publisher: {publisher}</span>
						</div>
						<hr className="my-2 h-[2px] bg-black border-0 mb-6" />
						<h2 className={`${headingFontClass} text-4xl sm:text-5xl sm:leading-tight leading-tight text-secondary font-semibold mb-6`}>{heading}</h2>
						<p className={`${contentFontClass} mb-0 whitespace-pre-line text-lg`}>{content}</p>
					</div>

					<div className={`${englishFontClass} mt-8 text-center text-xs`}>
						<hr className="my-6 h-[2px] w-[100px] bg-primary border-0 mx-auto" />
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
		publisher: PropTypes.string,
		heading: PropTypes.string,
		content: PropTypes.string,
	}).isRequired,
};

export default NewsPreview;
