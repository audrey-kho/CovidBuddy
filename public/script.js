(function() {

  window.addEventListener("load", init);

  /**
   * adds event listeners to various buttons on the pages of the web app
   */
  function init() {
    id("donate-btn").addEventListener("click", donate)
  }

  function donate() {
    window.location = "donate.html"
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

})();