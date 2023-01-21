module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};
