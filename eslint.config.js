import eslint from "@eslint/js";
import typescriptEslint from "typescript-eslint";

import eslintPluginSonarJS from "eslint-plugin-sonarjs";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier";
import vitest from "@vitest/eslint-plugin";

export default typescriptEslint.config(
    {
        ignores: ["coverage"],
    },
    {
        files: ["src/**/*.ts"],
        extends: [
            eslint.configs.recommended,
            ...typescriptEslint.configs.strictTypeChecked,
            ...typescriptEslint.configs.stylisticTypeChecked,
            eslintPluginUnicorn.configs.recommended,
            eslintPluginSonarJS.configs.recommended,
            eslintConfigPrettier,
        ],
        languageOptions: {
            parserOptions: {
                project: "tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            // Needed until https://github.com/import-js/eslint-plugin-import/issues/2948 is resolved.
            import: eslintPluginImport,
        },
        rules: {
            "import/order": [
                "error",
                {
                    alphabetize: {
                        caseInsensitive: true,
                        order: "asc",
                        orderImportKind: "asc",
                    },
                    "newlines-between": "always",
                },
            ],
        },
    },
    {
        files: ["src/**/*.spec.ts"],
        languageOptions: {
            parserOptions: {
                project: "tsconfig.eslint.json",
                tsconfigRootDir: import.meta.dirname,
            },
        },
        extends: [vitest.configs.recommended],
    },
);
