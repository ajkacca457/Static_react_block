import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { text, alignment, backgroundcolor } = attributes;

	const changeText = (newText) => {
		setAttributes({ text: newText });
	};

	const changeControl = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const changeBackgroundColor = (e) => {
		console.log(e.target.value);
		setAttributes({ backgroundcolor: e.target.value });
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar onChange={changeControl} value={alignment} />
			</BlockControls>
			<RichText {...useBlockProps({
				className: `align-${alignment}`
			})} tagName='h2' onChange={changeText} value={text} placeholder={__('add your text here', 'static-react-block')} />
		</>
	);
}
