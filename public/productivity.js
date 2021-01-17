(function() {

  const ENTER_KEY = 13;

  window.addEventListener("load", init);

  /**
   * Once the webpage is loaded, adds a listener that adds a new to-do list to the workspace when
   * the add new list (plus) button is clicked once
   */
  function init() {
    id("add").addEventListener("click", newList);
    id("donate-btn").addEventListener("click", donate);
    id("fab-btn").addEventListener("click", friends)
  }

  function friends() {
    window.location = "friends.html";
  }

  /**
   * Creates a new to-do list with a list title input box and a task input box when the add new list
   * button is clicked
   */
  function newList() {
    let article = gen("article");
    let titleInput = gen("input");
    let taskInput = gen("input");
    let ul = gen("ul");

    article.classList.add("list");

    titleInput.type = "text";
    titleInput.placeholder = "Title";
    titleInput.classList.add("title-in");
    article.appendChild(titleInput);
    titleInput.addEventListener("keyup", (event) => {
      if (event.keyCode === ENTER_KEY) {
        addTitle(titleInput);
      }
    });

    taskInput.type = "text";
    taskInput.placeholder = "+ New task";
    taskInput.classList.add("task-in");
    article.appendChild(taskInput);
    article.appendChild(ul);
    taskInput.addEventListener("keyup", (event) => {
      if (event.keyCode === ENTER_KEY) {
        addTask(taskInput);
      }
    });

    id("list-container").insertBefore(article, id("add"));

    article.addEventListener("dblclick", removeObj);
  }

  /**
   * Replaces the title input box with user's title input when the user presses the enter key on the
   * keyboard while the title input box is selected
   */
  function addTitle(input) {
    let h3 = gen("h3");
    h3.textContent = input.value;
    input.parentNode.replaceChild(h3, input);
  }

  /**
   * Adds the user's text input into the task list as a new task (with a checkbox) when the user
   * presses the enter key on the keyboard while the task input box is selected
   */
  function addTask(input) {
    let item = gen("li");
    let box = gen("input");
    let text = gen("p");
    box.classList.add("box");
    box.type = "checkbox";
    text.textContent = input.value;
    input.value = "";
    box.addEventListener("click", removeObj);
    item.appendChild(box);
    item.appendChild(text);
    input.nextElementSibling.appendChild(item);
  }

  /**
   * Deletes a task when its checkbox is unchecked or an entire to-do list when it is double-clicked
   */
  function removeObj() {
    if (this.
      classList.contains("box") && !this.checked) {
      this.parentNode.remove();
    } else if (this.classList.contains("list")) {
      this.remove(this);
    }
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