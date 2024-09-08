import { MdArrowOutward } from "react-icons/md";

/**
 * Footer component for the "Jhunnu Samachar" application.
 *
 * @returns {JSX.Element} The footer component.
 */
const Footer = () => (
	<footer className="relative mt-6">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			preserveAspectRatio="none"
			style={{ width: "100%", height: "5rem", display: "block" }}
		>
			<path
				fill="#f1f5f9"
				d="M0,224L40,218.7C80,213,160,203,240,213.3C320,224,400,256,480,240C560,224,640,160,720,144C800,128,880,160,960,149.3C1040,139,1120,85,1200,96C1280,107,1360,181,1400,218.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
			></path>
		</svg>

		<div className="bg-slate-100">
			<div className="pt-16 pb-12">
				<div className="container mx-auto">
					<h2 className="text-3xl mb-4 font-bold">Welcome to Jhunnu Samachar</h2>

					<p className="text-base mb-8">
						Jhunnu Samachar is your go-to web app for creating and sharing funny fake news stories. With an easy-to-use
						interface, you can generate and customize amusing headlines and content to entertain your friends and
						family. Start crafting your next hilarious news article now!
					</p>

					<h3 className="text-2xl mb-2 font-semibold">Getting Started</h3>

					<p className="text-base mb-4">Follow these steps to create your newspaper clipping:</p>

					<ol className="list-decimal list-inside mb-8">
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

					<h3 className="text-2xl mb-2 font-semibold">Questions or Feedback</h3>

					<p className="text-base mb-2">
						For any questions or feedback, please reach out to us on Twitter:{" "}
						<a
							href="https://twitter.com/vijayhardaha"
							target="_blank"
							rel="noopener noreferrer"
							className="underline text-primary font-semibold"
						>
							@vijayhardaha
						</a>
						. We’re constantly working to improve Jhunnu Samachar and would love to hear your thoughts and suggestions.
					</p>
				</div>
			</div>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
				style={{ width: "100%", height: "5rem", display: "block" }}
			>
				<path
					fill="#FFDBB5"
					d="M0,224L40,218.7C80,213,160,203,240,213.3C320,224,400,256,480,240C560,224,640,160,720,144C800,128,880,160,960,149.3C1040,139,1120,85,1200,96C1280,107,1360,181,1400,218.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
				></path>
			</svg>
			<div className="relative z-10 p-4 pb-8 bg-accent text-center text-black">
				<div className="container mx-auto">
					<p className="mb-2 font-semibold">Copyright &copy; 2024, Jhunnu Samachar. All rights reserved.</p>
					<p className="text-sm mb-2">
						Created by{" "}
						<a
							href="https://twitter.com/vijayhardaha"
							target="_blank"
							rel="noopener noreferrer"
							className="underline inline-flex items-center"
						>
							Vijay Hardaha <MdArrowOutward />
						</a>
						, using{" "}
						<a
							href="https://nextjs.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline inline-flex items-center"
						>
							Next.js <MdArrowOutward />
						</a>{" "}
						and{" "}
						<a
							href="https://tailwindcss.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline inline-flex items-center"
						>
							Tailwind CSS <MdArrowOutward />
						</a>
					</p>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
