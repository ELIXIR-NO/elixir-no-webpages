module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:astro/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
		},
	},
	overrides: [
		{
			files: ['*.astro'],
			plugins: [
				'@typescript-eslint',
				'react',
				'unused-imports',
				'tailwindcss',
				'simple-import-sort',
			],
			env: {
				node: true,
				'astro/astro': true,
				es2020: true,
			},
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
			},
			rules: {
				'astro/no-conflict-set-directives': 'error',
				'astro/no-unused-define-vars-in-style': 'error',
				'react/jsx-uses-react': 'off',
				'react/react-in-jsx-scope': 'off',
			},
		},
		{
			files: ['*.tsx'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:react/recommended',
			],
			rules: {
				'react/jsx-uses-react': 'off',
				'react/react-in-jsx-scope': 'off',
				'react/prop-types': 'off',
				'react/jsx-key': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
		{
			files: ['*.cjs'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['import', 'react', '@typescript-eslint'],
	rules: {
		'import/no-unresolved': 'error',
	},
};
