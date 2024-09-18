import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { DEFAULT_SEO } from "@/constants/seo";
import { getSiteUrl } from "@/utils/url";

const siteUrl = getSiteUrl();

// Fetch couplets server-side if needed, or pass as props
export const metadata = {
	title: DEFAULT_SEO.title,
	description: DEFAULT_SEO.description,
	keywords: DEFAULT_SEO.keywords,
	author: DEFAULT_SEO.author,
	openGraph: {
		title: DEFAULT_SEO.title,
		description: DEFAULT_SEO.description,
		url: siteUrl || DEFAULT_SEO.url,
		images: [
			{
				url: siteUrl + DEFAULT_SEO.image,
				width: 800,
				height: 600,
				alt: "Kabir Doha Cards Thumbnail",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: DEFAULT_SEO.title,
		description: DEFAULT_SEO.description,
		images: [siteUrl + DEFAULT_SEO.image],
	},
	robots: DEFAULT_SEO.robots,
	googlebot: DEFAULT_SEO.googlebot,
};

/**
 * Main component for the "Jhunnu Samachar" newspaper clipping generator.
 *
 * @returns {JSX.Element} The main component.
 */
const Home = () => (
	<div className="min-h-screen">
		<Header />

		<Main />

		<Footer />
	</div>
);

export default Home;
