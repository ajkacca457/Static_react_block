import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';


export default function save({ attributes }) {
	const { heading, description, alignment } = attributes;
	return (
		<>
			<div {...useBlockProps.save({
				className: `align-${alignment}`
			})} >
				<RichText.Content tagName='h2' value={heading} />
				<RichText.Content tagName='p' value={description} />
			</div>
		</>
	);
}
