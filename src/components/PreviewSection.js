import Image from "next/image";
import PropTypes from "prop-types";
import { AiOutlineDownload, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineReload } from "react-icons/ai";

import { SITE_URL } from "../constants/seo";

/**
 * Preview section for displaying and downloading the generated news clipping image.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.previewUrl - URL of the generated preview image.
 * @param {Function} props.onDownload - Function to handle image download.
 * @param {Function} props.onReset - Function to reset the preview and form.
 * @returns {JSX.Element} The preview section component.
 */
const PreviewSection = ({ previewUrl, onDownload, onReset }) => {
	const promotionalTag = "#JhunnuSamachar";
	const message = `Check out this cool app! I made this awesome newspaper clipping using Jhunnu Samachar. You can create your own at ${SITE_URL} ${promotionalTag}`;

	const handleShare = (platform) => {
		let url = "";
		switch (platform) {
			case "twitter":
				url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
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
		<div className="text-center">
			<p className="mb-4 text-lg font-medium text-gray-700">
				Here is your generated newspaper clipping preview. You can download it, or share it with others using the buttons below.
			</p>
			<div className="mx-auto mb-6 max-w-full">
				<Image src={previewUrl} alt="News Preview" layout="responsive" width={1200} height={675} className="h-auto" />
			</div>

			<div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
				<button
					onClick={onDownload}
					className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm"
				>
					<AiOutlineDownload className="mr-1" />
					Download
				</button>
				<button
					onClick={() => handleShare("twitter")}
					className="bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm"
				>
					<AiOutlineTwitter className="mr-1" />
					Tweet
				</button>
				<button
					onClick={() => handleShare("whatsapp")}
					className="bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm"
				>
					<AiOutlineWhatsApp className="mr-1" />
					Share
				</button>
			</div>

			<div className="text-center">
				<button
					onClick={onReset}
					className="bg-stone-500 hover:bg-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm"
				>
					<AiOutlineReload className="mr-1" />
					Generate New Image
				</button>
			</div>
		</div>
	);
};

PreviewSection.propTypes = {
	previewUrl: PropTypes.string.isRequired,
	onDownload: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
};

export default PreviewSection;
