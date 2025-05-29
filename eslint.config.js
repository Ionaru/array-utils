import eslint from "@eslint/js";
import typescriptEslint from "typescript-eslint";

import eslintPluginSonarJS from "eslint-plugin-sonarjs";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier";
import vitest from "@vitest/eslint-plugin";

export default typescriptEslint.config(
    {
        ignores: ["coverage", "dist", "node_modules"],
    },
    {
        files: ["src/**/*.ts"],
        extends: [
            eslint.configs.recommended,
            eslintPluginImport.flatConfigs.recommended,
            eslintPluginImport.flatConfigs.typescript,
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
        rules: {
            "import/no-unresolved": "off",
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
