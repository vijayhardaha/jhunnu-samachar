/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import PropTypes from "prop-types";
import { AiOutlineDownload, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineReload, AiOutlineEdit } from "react-icons/ai";

import { SITE_URL } from "../constants/seo";

/**
 * Preview section for displaying and downloading the generated news clipping image.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.previewUrl - URL of the generated preview image.
 * @param {Function} props.onReset - Function to reset the preview and form.
 * @param {Function} props.onEdit - Function to handle editing.
 * @returns {JSX.Element} The preview section component.
 */
const PreviewSection = ({ previewUrl, onReset, onEdit }) => {
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

	return (
		<div>
			<p className="mb-4 font-medium text-gray-700">
				<strong>Here is your newspaper clipping preview.</strong> You can download it to save or share it with others using the buttons below. If
				you’d like to make changes, click <strong className="text-yellow-500 underline">Edit</strong> to adjust the content, or select{" "}
				<strong className="text-teal-500 underline">Generate New</strong> to create a fresh newspaper clipping.
			</p>

			<div className="button-group relative flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
				<button
					onClick={handleDownload}
					className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm relative"
					aria-label="Download the News Clip"
				>
					<AiOutlineDownload className="w-5 h-5" />
					<span className="tooltip">Download the News Clip</span>
				</button>
				<button
					onClick={() => handleShare("twitter")}
					className="bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm relative"
					aria-label="Share on Twitter"
				>
					<AiOutlineTwitter className="w-5 h-5" />
					<span className="tooltip">Share on Twitter</span>
				</button>
				<button
					onClick={() => handleShare("whatsapp")}
					className="bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm relative"
					aria-label="Share via WhatsApp"
				>
					<AiOutlineWhatsApp className="w-5 h-5" />
					<span className="tooltip">Share via WhatsApp</span>
				</button>

				<button
					onClick={onEdit}
					className="bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm relative"
					aria-label="Edit the News Content"
				>
					<AiOutlineEdit className="w-5 h-5" />
					<span className="tooltip">Edit the News Content</span>
				</button>
				<button
					onClick={onReset}
					className="bg-teal-500 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm relative"
					aria-label="Generate New Newspaper Clipping"
				>
					<AiOutlineReload className="w-5 h-5" />
					<span className="tooltip">Generate New Newspaper Clipping</span>
				</button>
			</div>

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

				.button-group button:hover .tooltip {
					visibility: visible;
					opacity: 1;
				}
			`}</style>

			<div className="mx-auto mb-6 max-w-full">
				<Image src={previewUrl} alt="News Preview" layout="responsive" width={1200} height={675} className="h-auto" />
			</div>
		</div>
	);
};

PreviewSection.propTypes = {
	previewUrl: PropTypes.string.isRequired,
	onReset: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
};

export default PreviewSection;
