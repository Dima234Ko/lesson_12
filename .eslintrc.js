module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
