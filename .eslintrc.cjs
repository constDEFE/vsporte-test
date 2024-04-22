module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react-refresh", "simple-import-sort", "import"],
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"react-hooks/exhaustive-deps": "off",
		"@typescript-eslint/consistent-type-imports": "warn",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error"
	}
};
