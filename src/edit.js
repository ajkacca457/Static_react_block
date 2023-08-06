import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, URLInputButton, InspectorControls } from '@wordpress/block-editor';
import { ToggleControl,PanelBody,RangeControl} from '@wordpress/components';
import classNames from "classnames";
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {

	const { heading, description, alignment, displayField, buttonUrl, buttonTarget, showShadow, shadowOpacity } = attributes;

	const classes= classNames(`align-${alignment}`, {
		"has-shadow":showShadow,
		[`shadow-opacity-${shadowOpacity}`]:showShadow && shadowOpacity
	})


	const changeHeading = (newHeading) => {
		setAttributes({ heading: newHeading });
	};

	const changeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	const changeControl = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const changeUrl = (url, post) => {
		setAttributes({ buttonUrl: url, buttonText: (post && post.title) || 'Click' });
	};
	const changeSubtitleDisplay= (value)=>{
		setAttributes({displayField:value});
	};
	const changeShadowDisplay= ()=>{
		setAttributes({showShadow:!showShadow});
	}
	const changeShadowOpacity=( newOpacity ) => {
		setAttributes({
			shadowOpacity:newOpacity
		})
	}

	return (
		<>

			<InspectorControls>
				<PanelBody>
					<ToggleControl
					 label={__('Sub-title Display', 'static-react-block')}
					 checked={ displayField }
					 onChange={changeSubtitleDisplay}
					 />

				{showShadow && <RangeControl
					label={__("Opacity control", "static-react-block")}
					value={shadowOpacity}
					min={10}
					max={40}
					onChange={changeShadowOpacity}
					step={10}
				/>}

				</PanelBody>
			</InspectorControls>

			<BlockControls controls={[
				{
					icon:"art",
					title:__("shadow property","static-react-block"),
					onClick:changeShadowDisplay,
					isActive:showShadow
				}
			]}>
				<AlignmentToolbar onChange={changeControl} value={alignment} />
			</BlockControls>
			<div {...useBlockProps({
				className: classes
			})}>

				<RichText tagName='h2' onChange={changeHeading} value={heading} placeholder={__('add your text here', 'static-react-block')} />

				{displayField &&
					<RichText tagName='p' onChange={changeDescription} value={description} placeholder={__('add your description here', 'static-react-block')} />
				}

				<URLInputButton url={buttonUrl} onChange={changeUrl} target={buttonTarget} />

			</div>
		</>
	);
}
