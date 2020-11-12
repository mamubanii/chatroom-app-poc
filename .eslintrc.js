module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],

  plugins: ["prettier"],
  rules: {
    camelcase: "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  overrides: [
    {
      files: [
        "api/*.ts",
        "api/classes/*.ts",
        "api/middleware/*.ts",
        "api/routes/*.ts",
      ],
      rules: {
        "no-console": ["warn", { allow: ["warn", "error"] }],
      },
    },
  ],
};
