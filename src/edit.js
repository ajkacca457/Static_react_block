import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
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
			<InspectorControls>
				<PanelBody title={__('Display Setting', 'static-react-block')}>
					<ToggleControl
						label="Display text"
						checked={displayField}
						onChange={onChangeDisplayField}
					/>
				</PanelBody>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar onChange={changeControl} value={alignment} />
			</BlockControls>

			{displayField &&
				<RichText {...useBlockProps({
					className: `align-${alignment}`
				})} tagName='h2' onChange={changeText} value={text} placeholder={__('add your text here', 'static-react-block')} />
			}
		</>
	);
}
