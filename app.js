import DB from "./services/DB.js";
import Router from "./services/Router.js";

window.todos = [];
window.DB = DB;
window.Router = Router;

window.addEventListener("DOMContentLoaded", () => {
  DB.init();
  Router.init();
});

/*console.log("hello world");

const btn = document.querySelector("button");

btn.addEventListener("velocity", () => {
  console.log("velocity event has been emitted or dispatched");
});

const velEvent = new Event("velocity");

setTimeout(() => {
  btn.dispatchEvent(velEvent);
}, 3000);
*/
//load and DOMContentLoaded events of window.
