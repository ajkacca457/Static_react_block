import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {

	const { text, alignment, displayField } = attributes;

	const changeText = (newText) => {
		setAttributes({ text: newText });
	};

	const changeControl = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeDisplayField = (newDisplayField) => {
		setAttributes({ displayField: newDisplayField });
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar onChange={changeControl} value={alignment} />
			</BlockControls>
			<div {...useBlockProps({
				className: `align-${alignment}`
			})}>
				{displayField &&
					<RichText tagName='h2' onChange={changeText} value={text} placeholder={__('add your text here', 'static-react-block')} />
				}

				<Button isSecondary>Hello</Button>
			</div>
		</>
	);
}
