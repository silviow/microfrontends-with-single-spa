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
  name: "@silvio/react-app-1",
  app: () => System.import("@silvio/react-app-1"),
  activeWhen: (location: any) => location.pathname === '/react-app-1'
});

registerApplication({
  name: "@silvio/react-app-2",
  app: () => System.import("@silvio/react-app-2"),
  activeWhen: ['/react-app-2']
});

registerApplication({
  name: "@silvio/react-app-3",
  app: () => System.import("@silvio/react-app-3"),
  activeWhen: (location: any) => location.pathname === '/react-app-3'
});

registerApplication({
  name: "@silvio/react-app-4",
  app: () => System.import("@silvio/react-app-4"),
  activeWhen: (location: any) => location.pathname === '/react-app-4'
});

start({
  urlRerouteOnly: true,
});
