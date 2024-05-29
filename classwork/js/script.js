import { card } from "../components/index.js";
import { products } from "../data/pro.js";

console.log(products);
let readerarea = document.querySelector("#card-area");
products.map((p) => {
    readerarea.innerHTML += card(p);
})