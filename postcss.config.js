module.exports = {
  plugins: [
    require("postcss-import")(),
    require("postcss-custom-media")(),
    require("postcss-nested")({}),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
        },
      ],
    }),
  ],
};
