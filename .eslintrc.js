module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'linebreak-style': 0,
		'quotes': [
			'error',
			'single'
		],
		'react/react-in-jsx-scope': 'off',
		'semi': [2, 'always'],
		'no-mixed-spaces-and-tabs': 0,
		'react/prop-types': 'off',
		'no-debugger': 'off',
		'no-unused-vars': 'off',
		'require-yield': 'off',
		'no-case-declarations': 'off',
		'object-curly-spacing': 'off'
	},
	'settings': {
		'react': {
			'version': 'detect'
		},
	},
};
