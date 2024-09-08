import { Zilla_Slab } from "next/font/google";
import PropTypes from "prop-types";

import "../styles/globals.css";
import SEO from "@/components/SEO";

const font = Zilla_Slab({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/**
 * Main App component for the "Jhunnu Samachar" application.
 *
 * @param {Object} props - Component properties.
 * @param {JSX.Element} props.Component - The page component to be rendered.
 * @param {Object} props.pageProps - The props for the page component.
 * @returns {JSX.Element} The main application component.
 */
function MyApp({ Component, pageProps }) {
	return (
		<>
			<SEO />
			<div className={`${font.className}`}>
				<Component {...pageProps} />
			</div>
		</>
	);
}

// Define PropTypes for the MyApp component.
MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired, // The page component to be rendered.
	pageProps: PropTypes.object.isRequired, // The props for the page component.
};

export default MyApp;
