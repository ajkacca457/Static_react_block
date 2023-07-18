import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { text } = attributes;

	const changeText = (newText) => {
		setAttributes({ text: newText });
	};

	return (
		<RichText {...useBlockProps()} tagName='h2' onChange={changeText} value={text} placeholder={__('add your text here', 'static-react-block')} />
	);
}
