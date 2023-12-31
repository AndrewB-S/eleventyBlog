const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addFilter("specialsDate", (suppliedDate) => {
    return DateTime.fromJSDate(suppliedDate).toLocaleString(
      DateTime.DATE_SHORT
    );
  });

  eleventyConfig.add;

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
