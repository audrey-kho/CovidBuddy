(function() {

  window.addEventListener("load", init);

  /**
   * adds event listeners to various buttons on the pages of the web app
   */
  function init() {
    id("donate-btn").addEventListener("click", donate)
    id("submit-btn").addEventListener("click", donateRes)
  }

  function donate() {
    window.location = "donate.html"
  }

  function donateRes() {
    let donation = parseFloat(id("donation-amt").value)
    if (donation > 0 && donation <= 6.50) {
      alert("You have donated $" + donation + " Thank you for your donation!");
    } else if (donation > 6.50) {
      alert("ERROR: Sorry you don't have enough points to make a donation of $" + donation);
    } else {
      alert("ERROR: Input invalid. Please try again.");
    }
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