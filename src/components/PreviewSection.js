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

import { DEFAULT_NEWS_DATA } from "@/constants/news";
import { extractExtensionFromBase64, generateUniqueId } from "@/utils/download";
import { getSiteUrl } from "@/utils/url";

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
				className={`${color} hover:${color} relative inline-flex h-12 items-center justify-center rounded-lg px-4 text-sm font-medium text-white hover:bg-opacity-80`}
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
	color: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	onClick: PropTypes.func.isRequired,
	ariaLabel: PropTypes.string,
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
	const message = `Check out this cool app! I made this awesome newspaper clipping using Jhunnu Samachar. You can create your own at ${getSiteUrl()}`;

	/**
	 * Handles the download of the preview image with a unique filename.
	 *
	 * Creates a link element, detects the file extension from the base64 URL,
	 * generates a unique alphanumeric ID, and sets up the link to trigger the download.
	 */
	const handleDownload = () => {
		const link = document.createElement("a");
		const extension = extractExtensionFromBase64(previewUrl);
		const uniqueId = generateUniqueId();
		const filename = `jhunnu-samachar-${uniqueId}.${extension}`;
		link.download = filename;
		link.href = previewUrl;
		link.click();
	};

	/**
	 * Handles sharing the content on a specified platform.
	 *
	 * Opens a new window with the sharing URL based on the selected platform.
	 *
	 * @param {string} platform - The platform to share on ('twitter' or 'whatsapp').
	 */
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

	/**
	 * Resets the preview and news data to default values.
	 */
	const handleReset = () => {
		setPreview("");
		setNews(DEFAULT_NEWS_DATA);
	};

	/**
	 * Resets the preview without changing the news data.
	 */
	const handleEdit = () => {
		setPreview("");
	};

	/**
	 * Copies the content of the input field to the clipboard and shows a copy confirmation.
	 */
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
			<p className="mb-4 font-medium leading-relaxed text-gray-700">
				<strong>Here is your newspaper clipping preview.</strong> You can download it to save or share it with others
				using the buttons below. If you’d like to make changes, click{" "}
				<button onClick={handleEdit} className="font-bold text-yellow-500 underline hover:no-underline">
					[Edit]
				</button>{" "}
				to adjust the content, or click{" "}
				<button onClick={handleReset} className="font-bold text-teal-500 underline hover:no-underline">
					[Generate New]
				</button>{" "}
				to create a fresh newspaper clipping.
			</p>

			<div className="mb-4 flex flex-row gap-2">
				<input
					ref={inputRef}
					type="text"
					readOnly
					value={message}
					className="flex-1 rounded-lg border border-gray-400 bg-gray-100 p-3 text-gray-700"
				/>
				<button
					onClick={handleCopyToClipboard}
					className={`flex items-center justify-center rounded-lg bg-gray-800 px-4 py-2 font-medium text-white hover:bg-gray-600 ${
						isCopied ? "bg-green-500 hover:bg-green-400" : ""
					}`}
				>
					{isCopied ? (
						<>
							<AiOutlineCheck className="mr-0 text-2xl sm:mr-1 sm:text-xl" />
							<span className="hidden sm:inline">Copied</span>
						</>
					) : (
						<>
							<AiOutlineCopy className="mr-0 text-2xl sm:mr-1 sm:text-xl" />
							<span className="hidden sm:inline">Copy</span>
						</>
					)}
				</button>
			</div>

			<div className="button-group relative mb-4 flex flex-row space-x-2">
				<Button
					color="bg-[#4a4a4a]"
					text="Download the News Clip"
					icon={<AiOutlineDownload className="text-2xl" />}
					onClick={handleDownload}
				/>
				<Button
					color="bg-[#1da1f2]"
					text="Share on Twitter"
					icon={<AiOutlineTwitter className="text-2xl" />}
					onClick={() => handleShare("twitter")}
				/>
				<Button
					color="bg-[#25d366]"
					text="Share via WhatsApp"
					icon={<AiOutlineWhatsApp className="text-2xl" />}
					onClick={() => handleShare("whatsapp")}
				/>
				<Button
					color="bg-[#ffa500]"
					text="Edit the News Content"
					icon={<AiOutlineEdit className="text-2xl" />}
					onClick={handleEdit}
				/>
				<Button
					color="bg-[#007bff]"
					text="Generate New Newspaper Clipping"
					icon={<AiOutlineReload className="text-2xl" />}
					onClick={handleReset}
				/>
			</div>

			{/* Preview Image */}
			<div className="mx-auto mt-6 max-w-full">
				<Image
					src={previewUrl}
					alt="News Preview"
					layout="responsive"
					width={1200}
					height={675}
					className="h-auto rounded-lg"
				/>
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
