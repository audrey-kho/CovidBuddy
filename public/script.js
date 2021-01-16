(function() {

  window.addEventListener("load", init);

  /**
   * adds event listeners to various buttons on the pages of the web app
   */
  function init() {
    id("donate-btn").addEventListener("click", donate)
    id("video-call").addEventListener("click", () => window.open("call/index.html"))
  }

  function donate() {
    window.location = "donate.html"
  }

  function change() {
    var img1 = "./img/star.png";
    var img2 = "./img/favorited.png";
    var imgElement = document.getElementById('fave');
    imgElement.src = (imgElement.src === img1)? img2 : img1;
  }

  /** ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();