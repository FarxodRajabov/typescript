"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
    var user = res.data;
    var ID = user.id;
    var Title = user.title;
    var Completed = user.completed;
    console.log("\n    My id: ".concat(ID, "    \n    My Title: ").concat(Title, "    \n    My Completed: ").concat(Completed, "    \n"));
});
