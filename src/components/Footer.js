import { MdArrowOutward } from "react-icons/md";

import WaveSVG from "./WaveSVG";
import { getShareUrl } from "@/utils/share";

/**
 * Footer component for the "Jhunnu Samachar" application.
 *
 * @returns {JSX.Element} The footer component.
 */
const Footer = () => (
	<footer className="relative mt-20">
		{/* Top SVG design */}

		<div className="text-slate-200">
			<WaveSVG />
		</div>

		{/* Main content area */}
		<section className="bg-slate-200">
			<div className="pt-16 pb-12">
				<div className="container mx-auto">
					<div className="mb-8 leading-relaxed">
						<h2 className="mb-2 text-3xl font-bold">Welcome to Jhunnu Samachar</h2>
						<p className="text-lg">
							Jhunnu Samachar is your go-to web app for creating and sharing funny fake news stories. With an
							easy-to-use interface, you can generate and customize amusing headlines and content to entertain your
							friends and family. Start crafting your next hilarious news article now!
						</p>
					</div>

					<div className="mb-8 leading-relaxed">
						<h3 className="mb-2 text-2xl font-semibold">Getting Started</h3>
						<p className="mb-4">Follow these steps to create your newspaper clipping:</p>

						<ol className="list-decimal list-inside">
							<li className="mb-2">
								<strong>Enter Your Information:</strong> Input your news headline, publisher, and content into the
								designated fields.
							</li>
							<li className="mb-2">
								<strong>Generate Preview:</strong> Click on the &quot;Generate&quot; button to see how your clipping
								looks. Make any final adjustments if needed.
							</li>
							<li className="mb-2">
								<strong>Download or Share:</strong> Once you’re satisfied with your design, download the clipping as an
								image file or share it directly on social media platforms.
							</li>
						</ol>
					</div>

					<div className="mb-8 leading-relaxed">
						<h3 className="mb-2 text-2xl font-semibold">Questions or Feedback</h3>
						<p>
							For any questions or feedback, please reach out to us on Twitter:{" "}
							<a
								href="https://twitter.com/vijayhardaha"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center font-semibold text-primary underline hover:no-underline"
								aria-label="Twitter profile of @vijayhardaha"
							>
								@vijayhardaha
								<MdArrowOutward aria-hidden="true" />
							</a>
							. We’re constantly working to improve Jhunnu Samachar and would love to hear your thoughts and
							suggestions.
						</p>
					</div>

					<div className="mb-8 leading-relaxed">
						<h3 className="mb-2 text-2xl font-semibold">Contact</h3>
						<p>
							For new projects or work opportunities, feel free to reach out to me on Twitter at{" "}
							<a
								href="https://twitter.com/vijayhardaha"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center font-semibold text-primary underline hover:no-underline"
								aria-label="Twitter profile of @vijayhardaha"
							>
								@vijayhardaha
								<MdArrowOutward aria-hidden="true" />
							</a>{" "}
							or through PeoplePerHour at{" "}
							<a
								href="https://pph.me/vijayhardaha"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center font-semibold text-primary underline hover:no-underline"
								aria-label="PeoplePerHour profile of vijayhardaha"
							>
								pph.me/vijayhardaha
								<MdArrowOutward aria-hidden="true" />
							</a>
							.
						</p>
					</div>

					<div className="mb-8 leading-relaxed">
						<h3 className="mb-2 text-2xl font-semibold">Share</h3>
						<p>
							Help spread the word about Kabir Doha Cards! Share this amazing tool with others via WhatsApp:{" "}
							<a
								href={getShareUrl()}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center font-semibold text-primary underline hover:no-underline"
								aria-label="Share on WhatsApp"
							>
								Share on WhatsApp
								<MdArrowOutward aria-hidden="true" />
							</a>{" "}
							or via Twitter:{" "}
							<a
								href={getShareUrl("x")}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center font-semibold text-primary underline hover:no-underline"
								aria-label="Share on Twitter"
							>
								Share on Twitter
								<MdArrowOutward aria-hidden="true" />
							</a>
						</p>
					</div>
				</div>
			</div>

			{/* Footer content */}
			<div className="relative z-10 py-8 text-center bg-accent text-black">
				<div className="container mx-auto">
					<p className="mb-2 font-semibold">Copyright &copy; 2024, Jhunnu Samachar. All rights reserved.</p>

					<p className="mb-2 text-sm">
						Created by{" "}
						<a
							href="https://twitter.com/vijayhardaha"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center underline"
							aria-label="Twitter profile of Vijay Hardaha"
						>
							Vijay Hardaha <MdArrowOutward />
						</a>
						, using{" "}
						<a
							href="https://nextjs.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center underline"
							aria-label="Next.js website"
						>
							Next.js <MdArrowOutward />
						</a>{" "}
						and{" "}
						<a
							href="https://tailwindcss.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center underline"
							aria-label="Tailwind CSS website"
						>
							Tailwind CSS <MdArrowOutward />
						</a>
					</p>
				</div>
			</div>
		</section>
	</footer>
);

export default Footer;
