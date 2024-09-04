import { AiOutlineWhatsApp } from "react-icons/ai";

import Logo from "./Logo";
import { SITE_URL } from "../constants/seo";

/**
 * Header component for the "Jhunnu Samachar" application.
 *
 * @returns {JSX.Element} The header component.
 */
const Header = () => {
	const shareMessage = `Check out this amazing newspaper clipping generator on Jhunnu Samachar! Create your own custom clippings easily. ${SITE_URL}`;

	return (
		<header className="pt-3 pb-2">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center space-x-3">
					<div style={{ margin: "-6px" }}>
						<Logo size={50} />
					</div>

					<span className="font-semibold">
						By{" "}
						<a href="https://twitter.com/vijayhardaha" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary">
							Vijay Hardaha
						</a>
					</span>
				</div>
				<div className="flex items-center">
					<a
						href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-zinc-200 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100 text-gray-800 text-sm font-normal h-8 px-3 rounded-md w-full flex items-center justify-center sm:w-auto"
						aria-label="Share on WhatsApp"
					>
						<AiOutlineWhatsApp className="mr-1 text-base" />
						<span>Share</span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
