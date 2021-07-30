import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location: any) => location.pathname === '/',
});

registerApplication({
  name: "@silvio/counter",
  app: () => System.import("@silvio/counter"),
  activeWhen: (location: any) => location.pathname === '/counter'
});

registerApplication({
  name: "@silvio/router",
  app: () => System.import("@silvio/router"),
  activeWhen: ['/router']
});

registerApplication({
  name: "@silvio/todo-list",
  app: () => System.import("@silvio/todo-list"),
  activeWhen: (location: any) => location.pathname === '/todo-list'
});

registerApplication({
  name: "@silvio/todo-input",
  app: () => System.import("@silvio/todo-input"),
  activeWhen: (location: any) => location.pathname === '/todo-input'
});

start({
  urlRerouteOnly: true,
});
