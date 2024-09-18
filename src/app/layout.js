import { Zilla_Slab } from "next/font/google";
import PropTypes from "prop-types";

import "@/styles/globals.css";

// Load fonts
const font = Zilla_Slab({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/**
 * Root Layout component for the Next.js App Router.
 *
 * This layout component sets the HTML document structure, applies global styles,
 * and includes global components such as SEO and Toaster. It also ensures that
 * the current page's component is rendered within this layout.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The page content to be rendered.
 * @example
 * return <RootLayout>{pageContent}</RootLayout>;
 */
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />

				{/* Apple Touch Icon */}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

				{/* Android Chrome Icons */}
				<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
				<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

				{/* Favicons */}
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			</head>
			<body className={`${font.className}`}>
				<div>{children}</div>
			</body>
		</html>
	);
}

RootLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
