import { useBlockProps, RichText } from '@wordpress/block-editor';


export default function save({ attributes }) {
	const { text, alignment, backgroundcolor } = attributes;
	return (
		<>
			<RichText.Content {...useBlockProps.save({
				className: `align-${alignment}`
			})} tagName='h2' value={text} />
			<h3 style={{ backgroundColor: "red", color: "white" }}>{backgroundcolor}</h3>
		</>
	);
}
