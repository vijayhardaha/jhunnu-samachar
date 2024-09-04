import { formatDate } from "date-fns";
import PropTypes from "prop-types";

import { getFontClass } from "../utils/fonts";

/**
 * Component to display the news preview.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.news - The news details object.
 * @returns {JSX.Element} The news preview component.
 */
const NewsPreview = ({ news }) => {
	const { author, heading, content } = news;

	const paperHeading = "Jhunnu Samachar";

	const paperHeadingFontClass = getFontClass(paperHeading, true);
	const authorFontClass = getFontClass("Author");
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

				<div className="relative z-10 p-8">
					<div className={`${contentFontClass} leading-relaxed`}>
						<h1 className={`${paperHeadingFontClass} text-6xl sm:text-7xl text-primary mb-8 font-bold text-center`}>{paperHeading}</h1>
						<hr className="my-2 h-[2px] bg-black border-0" />
						<div className={`${authorFontClass} flex flex-col sm:flex-row justify-between my-3 px-1 space-y-2 sm:space-y-0`}>
							<span className="text-sm whitespace-nowrap">{formatDate(new Date(), "EEEE - dd, MMMM yyyy")}</span>
							<span className="text-sm whitespace-nowrap">Publisher: {author}</span>
						</div>
						<hr className="my-2 h-[2px] bg-black border-0 mb-6" />
						<h2 className={`${headingFontClass} text-4xl sm:text-5xl sm:leading-tight leading-tight text-secondary font-semibold mb-6`}>{heading}</h2>
						<p className={`${contentFontClass} mb-0 whitespace-pre-line`}>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

NewsPreview.propTypes = {
	news: PropTypes.shape({
		author: PropTypes.string,
		heading: PropTypes.string,
		content: PropTypes.string,
	}).isRequired,
};

export default NewsPreview;
