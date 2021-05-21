import "./style.css";
import { sayHello } from "./hello.js";

const app = document.querySelector<HTMLDivElement>("#app")!;

sayHello();

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
