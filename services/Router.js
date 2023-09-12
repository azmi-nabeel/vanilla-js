const Router = {
  init() {
    const uglyAnchors = document.querySelectorAll("a");
    uglyAnchors.forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        this.go(anchor.getAttribute("href")); //event.target.href
      });
    });
  },
  go(route) {
    console.log(`Going to ${route}`);
    history.pushState({ route }, null, route);

    let elem = null;

    switch (route) {
      case "":
      case "/":
        elem = `<h1>MAIN</h1>`;
        break;
      case "/about":
        elem = `<h1>ABOUT</h1>`;
        break;
      default:
        let category = route.replace("/", "");
        elem = `<p>you are at ${category}</p>`;
    }

    document.querySelector("main").innerHTML = elem;
  },
};

export default Router;
