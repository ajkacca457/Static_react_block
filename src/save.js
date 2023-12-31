import { useBlockProps, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';


export default function save({ attributes }) {
	const { heading, description, alignment, buttonUrl, buttonText,showShadow,shadowOpacity } = attributes;
	const classes= classNames(`align-${alignment}`, {
		"has-shadow":showShadow,
		[`shadow-opacity-${shadowOpacity}`]:showShadow && shadowOpacity
	})

	return (
		<>
			<div {...useBlockProps.save({
				className: classes
			})} >
				<RichText.Content tagName='h2' value={heading} />
				<p>{description}</p>

				{buttonUrl && <a href={buttonUrl} target='_blank' rel="noopener">{buttonText}</a>}
				
			</div>
		</>
	);
}
