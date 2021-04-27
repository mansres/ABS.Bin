"use strict";

// Class definition

var StudioKanbanBoardDemo = (function () {
  // Private functions

  // Basic demo
  var demos = function () {
    var kanban1 = new jKanban({
      element: "#kanban1",
      gutter: "0",
      boards: [
        {
          id: "_todo",
          title: "Try Drag me!",
          item: [
            {
              title: "You can drag me too",
            },
            {
              title: "Buy Milk",
            },
          ],
        },
        {
          id: "_working",
          title: "Working",
          item: [
            {
              title: "Do Something!",
            },
            {
              title: "Run?",
            },
          ],
        },
        {
          id: "_done",
          title: "Done",
          item: [
            {
              title: "All right",
            },
            {
              title: "Ok!",
            },
          ],
        },
      ],
    });

    var kanban2 = new jKanban({
      element: "#kanban2",
      gutter: "0",
      click: function (el) {
        alert(el.innerHTML);
      },
      boards: [
        {
          id: "_todo",
          title: "To Do",
          class: "brand",
          dragTo: ["_working"],
          item: [
            {
              title: "My Task Test",
              class: "info",
            },
            {
              title: "Buy Milk",
              class: "info",
            },
          ],
        },
        {
          id: "_working",
          title: "Working",
          class: "warning",
          item: [
            {
              title: "Do Something!",
              class: "warning",
            },
            {
              title: "Run?",
              class: "warning",
            },
          ],
        },
        {
          id: "_done",
          title: "Done",
          class: "success",
          dragTo: ["_working"],
          item: [
            {
              title: "All right",
              class: "success",
            },
            {
              title: "Ok!",
              class: "success",
            },
          ],
        },
        {
          id: "_test",
          title: "Test",
          class: "primary",
          item: [
            {
              title: "Passed",
              class: "primary",
            },
            {
              title: "Well done!",
              class: "primary",
            },
          ],
        },
        {
          id: "_notes",
          title: "Notes",
          class: "danger",
          item: [
            {
              title: "Warning Task",
              class: "danger",
            },
            {
              title: "Do not enter",
              class: "danger",
            },
          ],
        },
      ],
    });

    var kanban3 = new jKanban({
      element: "#kanban3",
      gutter: "0",
      click: function (el) {
        alert(el.innerHTML);
      },
      boards: [
        {
          id: "_backlog",
          title: "Backlog",
          class: "dark-light",
          item: [
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media abs-media--dark"><span>BF</span></div><div class="abs-kanban_content"><div class="abs-kanban_title">Bug Fixes</div><span class="abs-badge abs-badge--dark abs-badge--inline">Backlog</span></div></div>',
            },
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media"><img src="assets/media/users/100_5.jpg" alt="image"></div><div class="abs-kanban_content"><div class="abs-kanban_title">Documentation</div><span class="abs-badge abs-badge--dark abs-badge--inline">Backlog</span></div></div>',
            },
          ],
        },
        {
          id: "_todo",
          title: "To Do",
          class: "danger-light",
          item: [
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media"><img src="assets/media/users/100_3.jpg" alt="image"></div><div class="abs-kanban_content"><div class="abs-kanban_title">SEO Optimization</div><span class="abs-badge abs-badge--danger abs-badge--inline">To Do</span></div></div>',
            },
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media abs-media--danger"><span>SV</span></div><div class="abs-kanban_content"><div class="abs-kanban_title">Site Verification</div><span class="abs-badge abs-badge--danger abs-badge--inline">To Do</span></div></div>',
            },
          ],
        },
        {
          id: "_working",
          title: "Working",
          class: "brand-light",
          item: [
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media"><img src="assets/media/users/100_1.jpg" alt="image"></div><div class="abs-kanban_content"><div class="abs-kanban_title">Responsive UI</div><span class="abs-badge abs-badge--brand abs-badge--inline">In Progress</span></div></div>',
            },
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media abs-media--brand"><span>SB</span></div><div class="abs-kanban_content"><div class="abs-kanban_title">Sidebars</div><span class="abs-badge abs-badge--brand abs-badge--inline">In Progress</span></div></div>',
            },
          ],
        },
        {
          id: "_done",
          title: "Done",
          class: "success-light",
          item: [
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media abs-media--success"><span>FE</span></div><div class="abs-kanban_content"><div class="abs-kanban_title">Frontend</div><span class="abs-badge abs-badge--success abs-badge--inline">Completed</span></div></div>',
            },
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media"><img src="assets/media/users/100_4.jpg" alt="image"></div><div class="abs-kanban_content"><div class="abs-kanban_title">Server Setup</div><span class="abs-badge abs-badge--success abs-badge--inline">Completed</span></div></div>',
            },
          ],
        },
        {
          id: "_deploy",
          title: "Deploy",
          class: "primary-light",
          item: [
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media abs-media--primary"><span>CU</span></div><div class="abs-kanban_content"><div class="abs-kanban_title">Content Upload</div><span class="abs-badge abs-badge--primary abs-badge--inline">Deploy</span></div></div>',
            },
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media"><img src="assets/media/users/100_2.jpg" alt="image"></div><div class="abs-kanban_content"><div class="abs-kanban_title">Proofreading</div><span class="abs-badge abs-badge--primary abs-badge--inline">Deploy</span></div></div>',
            },
          ],
        },
      ],
    });

    var toDoButton = document.getElementById("addToDo");
    toDoButton.addEventListener("click", function () {
      kanban3.addElement("_todo", {
        title:
          '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media abs-media--danger"><span>NW</span></div><div class="abs-kanban_content"><div class="abs-kanban_title">New Task</div><span class="abs-badge abs-badge--danger abs-badge--inline">To Do</span></div></div>',
      });
    });

    var addBoardDefault = document.getElementById("addDefault");
    addBoardDefault.addEventListener("click", function () {
      kanban3.addBoards([
        {
          id: "_default",
          title: "New Board",
          class: "brand-light",
          item: [
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media abs-media--brand"><span>FT</span></div><div class="abs-kanban_content"><div class="abs-kanban_title">New Task 1</div><span class="abs-badge abs-badge--brand abs-badge--inline">New</span></div></div>',
            },
            {
              title:
                '<div class="abs-kanban_badge"><div class="abs-kanban_image abs-media abs-media--brand"><span>FT</span></div><div class="abs-kanban_content"><div class="abs-kanban_title">New Task 2</div><span class="abs-badge abs-badge--brand abs-badge--inline">New</span></div></div>',
            },
          ],
        },
      ]);
    });

    var removeBoard = document.getElementById("removeBoard");
    removeBoard.addEventListener("click", function () {
      kanban3.removeBoard("_done");
    });

    // kanban 4
    var kanban4 = new jKanban({
      element: "#kanban4",
      gutter: "0",
      click: function (el) {
        alert(el.innerHTML);
      },
      boards: [
        {
          id: "_board1",
          title: "Board 1",
          item: [
            {
              title: "My Task Test",
            },
            {
              title: "Buy Milk",
            },
          ],
        },
        {
          id: "_board2",
          title: "Board 2",
          item: [
            {
              title: "Do Something!",
            },
            {
              title: "Run?",
            },
          ],
        },
        {
          id: "_board3",
          title: "Board 3",
          item: [
            {
              title: "All right",
            },
            {
              title: "Ok!",
            },
          ],
        },
      ],
    });

    var addBoard = document.getElementById("addBoard");
    addBoard.addEventListener("click", function () {
      var boardTitle = $("#kanban-add-board").val();
      var boardId = "_" + $.trim(boardTitle);
      var boardColor = $("#kanban-add-board-color").val();
      var option =
        '<option value="' + boardId + '">' + boardTitle + "</option>";
      kanban4.addBoards([
        {
          id: boardId,
          title: boardTitle,
          class: boardColor,
        },
      ]);
      $("#kanban-select-task").append(option);
      $("#kanban-select-board").append(option);
    });

    var addTask = document.getElementById("addTask");
    addTask.addEventListener("click", function () {
      var target = $("#kanban-select-task").val();
      var title = $("#kanban-add-task").val();
      var taskColor = $("#kanban-add-task-color").val();
      kanban4.addElement(target, {
        title: title,
        class: taskColor,
      });
    });

    var removeBoard2 = document.getElementById("removeBoard2");
    removeBoard2.addEventListener("click", function () {
      var target = $("#kanban-select-board").val();
      kanban4.removeBoard(target);
      $('#kanban-select-task option[value="' + target + '"]').remove();
      $('#kanban-select-board option[value="' + target + '"]').remove();
    });
  };

  return {
    // public functions
    init: function () {
      demos();
    },
  };
})();

jQuery(document).ready(function () {
  StudioKanbanBoardDemo.init();
});
