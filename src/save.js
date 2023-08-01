import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';


export default function save({ attributes }) {
	const { text, alignment } = attributes;
	return (
		<>
			<div {...useBlockProps.save({
				className: `align-${alignment}`
			})} >
				<RichText.Content tagName='h2' value={text} />
				<button>Hello wordpress</button>
			</div>
		</>
	);
}
