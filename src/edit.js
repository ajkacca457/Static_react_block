import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {

	const { heading, description, alignment, displayField } = attributes;

	const changeHeading = (newHeading) => {
		setAttributes({ heading: newHeading });
	};

	const changeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	const changeControl = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar onChange={changeControl} value={alignment} />
			</BlockControls>
			<div {...useBlockProps({
				className: `align-${alignment}`
			})}>

				<RichText tagName='h2' onChange={changeHeading} value={heading} placeholder={__('add your text here', 'static-react-block')} />

				{displayField &&
					<RichText tagName='p' onChange={changeDescription} value={description} placeholder={__('add your description here', 'static-react-block')} />
				}
			</div>
		</>
	);
}
