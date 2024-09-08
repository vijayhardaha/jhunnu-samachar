import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

import Logo from "./Logo";
import { getShareUrl } from "@/utils/share";

/**
 * Header component for the "Jhunnu Samachar" application.
 *
 * @returns {JSX.Element} The header component.
 */
const Header = () => {
	return (
		<header className="pb-2 pt-3">
			<div className="container mx-auto flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-3" aria-label="Jhunnu Samachar Home">
					<div style={{ margin: "-6px" }}>
						<Logo size={50} />
					</div>

					<h1 className="inline font-semibold text-primary">Jhunnu Samachar</h1>
				</Link>

				<a
					href={getShareUrl()}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center text-sm font-semibold text-gray-800 underline hover:no-underline"
					aria-label="Share on WhatsApp"
				>
					<AiOutlineWhatsApp className="mr-1 text-base" aria-hidden="true" />
					<span>Share this App</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
