import { useBlockProps, RichText } from '@wordpress/block-editor';


export default function save({ attributes }) {
	const { text } = attributes;
	console.log(useBlockProps.save());
	return (
		<RichText.Content {...useBlockProps.save()} tagName='h2' value={text} />
	);
}
