import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';


export default function save({ attributes }) {
	const { heading, description, alignment, buttonUrl, buttonText } = attributes;
	return (
		<>
			<div {...useBlockProps.save({
				className: `align-${alignment}`
			})} >
				<RichText.Content tagName='h2' value={heading} />
				<p>{description}</p>
				<a href={buttonUrl} target='_blank' rel="noopener">{buttonText}</a>
			</div>
		</>
	);
}
