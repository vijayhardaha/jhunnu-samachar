import PropTypes from "prop-types";

/**
 * WaveSVG component for displaying a customizable wave SVG.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.color="#f1f5f9"] - Fill color for the wave path.
 * @param {Object} [props.props] - Additional properties to pass to the SVG element.
 * @returns {JSX.Element} The wave SVG component.
 */
const WaveSVG = ({ color = "#f1f5f9", ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		preserveAspectRatio="none"
		style={{ width: "100%", height: "5rem", display: "block" }}
		{...props}
	>
		<path
			fill={color}
			d="M0,224L40,218.7C80,213,160,203,240,213.3C320,224,400,256,480,240C560,224,640,160,720,144C800,128,880,160,960,149.3C1040,139,1120,85,1200,96C1280,107,1360,181,1400,218.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
		></path>
	</svg>
);

WaveSVG.propTypes = {
	/** Fill color for the wave path. */
	color: PropTypes.string,
	/** Additional properties to pass to the SVG element. */
	props: PropTypes.object,
};

export default WaveSVG;
