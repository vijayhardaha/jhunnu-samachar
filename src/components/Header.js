import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { LuCode2 } from "react-icons/lu";

import Logo from "./Logo";
import { getShareUrl } from "@/utils/share";

/**
 * Header component for the "Jhunnu Samachar" application.
 *
 * @returns {JSX.Element} The header component.
 */
const Header = () => {
	return (
		<header className="py-2 sm:py-4">
			<div className="container mx-auto flex items-center justify-between">
				{/* Logo and Title Link */}
				<Link href="/" aria-label="Jhunnu Samachar Home" className="flex items-center space-x-3">
					<div style={{ margin: "-6px" }}>
						<Logo size={50} className="w-14 h-14 md:w-20 md:h-20" />
					</div>

					<h1 className="inline font-semibold text-primary text-lg md:text-xl">Jhunnu Samachar</h1>
				</Link>

				{/* Action Links */}
				<div className="flex items-center gap-3">
					<a
						href="https://github.com/vijayhardaha/jhunnu-samachar"
						target="_blank"
						rel="noopener noreferrer"
						className="hidden sm:flex items-center gap-1 text-sm sm:text-base font-semibold text-gray-900 underline hover:no-underline"
						aria-label="View the source code on GitHub"
					>
						<LuCode2 className="text-sm sm:text-base" aria-hidden="true" />
						<span>Source code</span>
					</a>
					<a
						href={getShareUrl()}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 text-sm sm:text-base font-semibold text-gray-900 underline hover:no-underline"
						aria-label="Share this App on WhatsApp"
					>
						<AiOutlineWhatsApp className="text-sm sm:text-base" aria-hidden="true" />
						<span>Share this App</span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
