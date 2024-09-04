/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";

import Image from "next/image";
import PropTypes from "prop-types";
import {
	AiOutlineDownload,
	AiOutlineTwitter,
	AiOutlineWhatsApp,
	AiOutlineReload,
	AiOutlineEdit,
	AiOutlineCopy,
	AiOutlineCheck,
} from "react-icons/ai";

import { DEFAULT_NEWS_DATA } from "../constants/newsConstants";
import { SITE_URL } from "../constants/seo";

/**
 * Reusable Button component for various actions.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.color - Background color of the button.
 * @param {string} props.text - Tooltip text for the button.
 * @param {JSX.Element} props.icon - Icon to display within the button.
 * @param {Function} props.onClick - Click handler function for the button.
 * @param {string} [props.ariaLabel] - Aria label for accessibility.
 * @param {Object} [props.rest] - Additional properties passed to the button.
 * @returns {JSX.Element} The reusable button component.
 */
const Button = ({ color, text, icon, onClick, ariaLabel, ...props }) => {
	return (
		<>
			<button
				onClick={onClick}
				className={`${color} hover:${color.replace("bg-", "hover:bg-")} focus:outline-none focus:ring-2 focus:ring-offset-2 text-white font-medium h-12 px-4 rounded-lg inline-flex items-center justify-center text-sm relative`}
				aria-label={ariaLabel || text}
				{...props}
			>
				{icon}
				<span className="sr-only">{text}</span>
				<span className="tooltip">{text}</span>
				<style jsx>{`
					.tooltip {
						visibility: hidden;
						opacity: 0;
						transition: opacity 0.3s ease;
						position: absolute;
						bottom: 110%;
						left: 50%;
						transform: translateX(-50%);
						background-color: black;
						color: white;
						padding: 5px 10px;
						border-radius: 6px;
						font-size: 12px;
						white-space: nowrap;
						z-index: 10;
					}

					.tooltip::before {
						content: "";
						position: absolute;
						top: 100%;
						left: 50%;
						margin-left: -5px;
						border-width: 5px;
						border-style: solid;
						border-color: black transparent transparent transparent;
					}

					button:hover .tooltip {
						visibility: visible;
						opacity: 1;
					}
				`}</style>
			</button>
		</>
	);
};

Button.propTypes = {
	color: PropTypes.string.isRequired, // Expecting a Tailwind CSS color class, e.g., "bg-blue-500".
	text: PropTypes.string.isRequired, // Tooltip text for the button.
	icon: PropTypes.element.isRequired, // Icon component to be rendered inside the button.
	onClick: PropTypes.func.isRequired, // Function to be executed on click.
	ariaLabel: PropTypes.string, // Aria-label for screen readers.
};

/**
 * Preview section for displaying and downloading the generated news clipping image.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.previewUrl - URL of the generated preview image.
 * @param {Function} props.setNews - Function to update the news details.
 * @param {Function} props.setPreview - Function to update the preview url.
 * @returns {JSX.Element} The preview section component.
 */
const PreviewSection = ({ previewUrl, setNews, setPreview }) => {
	const inputRef = useRef(null);
	const [isCopied, setIsCopied] = useState(false);
	const promotionalTag = "#JhunnuSamachar";
	const message = `Check out this cool app! I made this awesome newspaper clipping using Jhunnu Samachar. You can create your own at ${SITE_URL}`;

	const handleDownload = () => {
		const link = document.createElement("a");
		link.download = "jhunnu-samachar.jpeg";
		link.href = previewUrl;
		link.click();
	};

	const handleShare = (platform) => {
		let url = "";
		switch (platform) {
			case "twitter":
				url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message + `\n\n ${promotionalTag}`)}`;
				break;
			case "whatsapp":
				url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
				break;
			default:
				break;
		}
		window.open(url, "_blank");
	};

	const handleReset = () => {
		setPreview("");
		setNews(DEFAULT_NEWS_DATA);
	};

	const handleEdit = () => {
		setPreview("");
	};

	const handleCopyToClipboard = () => {
		if (inputRef.current) {
			inputRef.current.select();
			navigator.clipboard.writeText(message).then(() => {
				setIsCopied(true);
				inputRef.current.focus();
				setTimeout(() => setIsCopied(false), 500);
			});
		}
	};

	return (
		<div className="bg-white">
			<p className="mb-4 font-medium text-gray-700 mb-4">
				<strong>Here is your newspaper clipping preview.</strong> You can download it to save or share it with others using the buttons below. If
				you’d like to make changes, click <strong className="text-yellow-500">[Edit]</strong> to adjust the content, or select{" "}
				<strong className="text-teal-500">[Generate New]</strong> to create a fresh newspaper clipping.
			</p>

			<div className="flex flex-col sm:flex-row gap-2 mb-4">
				<input
					ref={inputRef}
					type="text"
					readOnly
					value={message}
					className="flex-1 p-3 border border-gray-400 rounded-lg bg-gray-100 text-gray-700"
				/>
				<button
					onClick={handleCopyToClipboard}
					className={`flex items-center justify-center bg-gray-800 hover:bg-gray-600 text-white font-medium rounded-lg px-4 py-2 ${
						isCopied ? "bg-green-500 hover:bg-green-400" : ""
					}`}
				>
					{isCopied ? (
						<>
							<AiOutlineCheck className="text-1xl xs:text-2xl mr-1 xs:mr-0" />
							<span className="xs:hidden">Copied</span>
						</>
					) : (
						<>
							<AiOutlineCopy className="text-1xl xs:text-2xl mr-1 xs:mr-0" />
							<span className="xs:hidden">Copy</span>
						</>
					)}
				</button>
			</div>

			<div className="button-group relative flex flex-row space-x-2 mb-4">
				<Button color="bg-slate-900" text="Download the News Clip" icon={<AiOutlineDownload className="text-2xl" />} onClick={handleDownload} />
				<Button color="bg-blue-500" text="Share on Twitter" icon={<AiOutlineTwitter className="text-2xl" />} onClick={() => handleShare("twitter")} />
				<Button
					color="bg-green-500"
					text="Share via WhatsApp"
					icon={<AiOutlineWhatsApp className="text-2xl" />}
					onClick={() => handleShare("whatsapp")}
				/>
				<Button color="bg-yellow-500" text="Edit the News Content" icon={<AiOutlineEdit className="text-2xl" />} onClick={handleEdit} />
				<Button color="bg-teal-500" text="Generate New Newspaper Clipping" icon={<AiOutlineReload className="text-2xl" />} onClick={handleReset} />
			</div>

			{/* Preview Image */}
			<div className="mx-auto mt-6 max-w-full ">
				<Image src={previewUrl} alt="News Preview" layout="responsive" width={1200} height={675} className="h-auto rounded-lg" />
			</div>
		</div>
	);
};

PreviewSection.propTypes = {
	previewUrl: PropTypes.string.isRequired,
	setNews: PropTypes.func.isRequired,
	setPreview: PropTypes.func.isRequired,
};

export default PreviewSection;
