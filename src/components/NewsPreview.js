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
	const { date, author, heading, content } = news;

	const paperHeading = "Jhunnu Samachar";

	const paperHeadingFontClass = getFontClass(paperHeading, true);
	const authorFontClass = getFontClass("Author");
	const headingFontClass = getFontClass(heading, true);
	const contentFontClass = getFontClass(content);

	return (
		<>
			<div className="my-8">
				<p className="text-lg text-gray-700">
					&quot;Breaking news! Cats have taken over the internet... again. But don’t worry, your newspaper clipping is here to save the day. Let’s
					make the headlines funnier than the actual news!&quot;
				</p>
			</div>

			<div className="mb-10 max-w-[600px]">
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
							<h1 className={`${paperHeadingFontClass} text-5xl sm:text-7xl text-primary uppercase mb-8 font-bold text-center`}>{paperHeading}</h1>
							<hr className="my-2 h-[2px] bg-black border-0" />
							<div className={`${authorFontClass} flex flex-col sm:flex-row justify-between my-3 px-1 space-y-2 sm:space-y-0`}>
								<span className="text-sm whitespace-nowrap">{date}</span>
								<span className="text-sm whitespace-nowrap">Publisher: {author}</span>
							</div>
							<hr className="my-2 h-[2px] bg-black border-0 mb-6" />
							<h2 className={`${headingFontClass} text-3xl sm:text-5xl text-secondary font-semibold mb-6 leading-tight`}>{heading}</h2>
							<p className={`${contentFontClass} mb-0 whitespace-pre-line`}>{content}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

NewsPreview.propTypes = {
	news: PropTypes.shape({
		date: PropTypes.string,
		author: PropTypes.string,
		heading: PropTypes.string,
		content: PropTypes.string,
	}).isRequired,
};

export default NewsPreview;
