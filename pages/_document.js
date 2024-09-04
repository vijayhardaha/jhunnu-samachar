import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document to augment the server-rendered document markup.
 *
 * @extends {Document}
 */
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
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
				</Head>
				<body>
					<Main /> {/* The main application content */}
					<NextScript /> {/* The Next.js scripts */}
				</body>
			</Html>
		);
	}
}

export default MyDocument;
