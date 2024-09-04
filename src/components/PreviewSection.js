import Image from "next/image";
import PropTypes from "prop-types";
import { AiOutlineDownload, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineReload, AiOutlineEdit } from "react-icons/ai";

import { SITE_URL } from "../constants/seo";

/**
 * Preview section for displaying and downloading the generated news clipping image.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.previewUrl - URL of the generated preview image.
 * @param {Function} props.onDownload - Function to handle image download.
 * @param {Function} props.onReset - Function to reset the preview and form.
 * @param {Function} props.onEdit - Function to handle editing.
 * @returns {JSX.Element} The preview section component.
 */
const PreviewSection = ({ previewUrl, onDownload, onReset, onEdit }) => {
	const promotionalTag = "#JhunnuSamachar";
	const message = `Check out this cool app! I made this awesome newspaper clipping using Jhunnu Samachar. You can create your own at ${SITE_URL}`;

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
		<div className="text-center">
			<p className="mb-4 text-lg font-medium text-gray-700">
				Here is your generated newspaper clipping preview. You can download it, or share it with others using the buttons below.
			</p>
			<div className="mx-auto mb-6 max-w-full">
				<Image src={previewUrl} alt="News Preview" layout="responsive" width={1200} height={675} className="h-auto" />
			</div>

			<div className="text-center mb-6">
				<p className="text-gray-700 mb-4">
					You can manage your news clipping using the buttons below. Download the image or share it on social media to spread the word about your
					awesome creation!
				</p>
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

			<div className="border-t border-gray-300 my-6"></div>

			<div className="text-center mb-6">
				<p className="text-gray-700 mb-4">
					You can make changes to your clipping or start fresh to create a new one. Just hit the Edit button or Generate New to get started!
				</p>
			</div>

			<div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
				<button
					onClick={onEdit}
					className="bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm"
				>
					<AiOutlineEdit className="mr-1" />
					Edit
				</button>
				<button
					onClick={onReset}
					className="bg-purple-500 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-white font-medium h-10 px-4 rounded-md w-full inline-flex items-center justify-center sm:w-auto text-sm"
				>
					<AiOutlineReload className="mr-1" />
					Generate New
				</button>
			</div>
		</div>
	);
};

PreviewSection.propTypes = {
	previewUrl: PropTypes.string.isRequired,
	onDownload: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
};

export default PreviewSection;
