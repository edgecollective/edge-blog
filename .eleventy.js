const CleanCSS = require("clean-css");
module.exports = function(eleventyConfig) {
	
	//handle css
	eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  
  // Copy the `img/` directory
  eleventyConfig.addPassthroughCopy("img");

  return {
    passthroughFileCopy: true
  };
};

