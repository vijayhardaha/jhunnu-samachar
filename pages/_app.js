import { Montserrat } from "next/font/google";
import PropTypes from "prop-types"; // Import PropTypes

import SEO from "../src/components/SEO";
import "../styles/globals.scss";

const font = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

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
