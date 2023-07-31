import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, CheckboxControl } from '@wordpress/components';
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {

	const { text, alignment, backgroundcolor, checkboxField } = attributes;

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

	const onChangeCheckboxField = (newValue) => {
		setAttributes({ checkboxField: newValue });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Background Color Settings', 'static-react-block')}>
					<CheckboxControl
						heading="Checkbox Field"
						label="Tick Me"
						help="Additional help text"
						checked={checkboxField}
						onChange={onChangeCheckboxField}
					/>
				</PanelBody>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar onChange={changeControl} value={alignment} />
			</BlockControls>

			<RichText {...useBlockProps({
				className: `align-${alignment}`
			})} tagName='h2' onChange={changeText} value={text} placeholder={__('add your text here', 'static-react-block')} />
		</>
	);
}
