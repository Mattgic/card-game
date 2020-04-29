module.exports = {
  arrowParens: 'always',
  bracketSpacing: false,
  singleQuote: true,
  overrides: [
    {
      files: ['**/*.css', '**/*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
