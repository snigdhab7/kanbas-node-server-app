/* import courses from "./courses.json" assert { type: "json" };
import modules from "./modules.json" assert { type: "json" };
import assignments from "./assignments.json" assert { type: "json" };
import users from "./users.json" assert { type: "json" };
import grades from "./grades.json" assert { type: "json" };
import enrollments from "./enrollments.json" assert { type: "json" };
export default {
  courses,
  modules,
  assignments,
  users,
  grades,
  enrollments,
};
 */
const courses = require("./courses.json");
const modules = require("./modules.json");
const assignments = require("./assignments.json");
const users = require("./users.json");
const grades = require("./grades.json");
const enrollments = require("./enrollments.json");

module.exports = {
  courses,
  modules,
  assignments,
  users,
  grades,
  enrollments,
};