module.exports = {
  // App
  "**/*.(ts|tsx|js)": (filenames) => [
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],
  // Format MarkDown and JSON
  "./**/*.(md|mdx|json)": (filenames) => `npx prettier --write ${filenames.join(" ")}`,
};
