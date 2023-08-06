/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	icon: {
		src: 'text',
	},
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	transforms:{
		from :[
			{
				type:"block",
				blocks:["core/paragraph"],
				transform:({content,align})=>{
					return createBlock("create-block/static-react-block", {
						heading:"paragraph",
						description:content,
						alignment:align,
						displayField:true
					})
				}
			}
		],
		to:[
			{
				type:"block",
				blocks:["core/paragraph"],
				isMatch:({description,displayField})=>{
					return description && displayField?true:false
				},
				transform:({description,alignment})=>{
					return createBlock("core/paragraph", {
						content:description,
						align:alignment,
					})
				}
			}

		]
	}
});
