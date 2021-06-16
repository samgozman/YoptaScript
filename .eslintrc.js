
module.exports = {
	'env': {
		'node': true,
		'es6': true
	},
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2021
    },
	'extends': [
        'plugin:@typescript-eslint/recommended',
    ],
	'rules': {
		'linebreak-style': [
			'warn',
			'unix'
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'always'
		]
	}
};