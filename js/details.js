import { fetchSingleProduct, renderSingleProductHTML } from "./constant.js";

const mainWrapper = document.querySelector('main');
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

console.log({id});

async function renderProduct() {
        const product = await fetchSingleProduct(id);
        const productHTML = renderSingleProductHTML(product);
        mainWrapper.textContent = '';
        mainWrapper.append(productHTML);
}

renderProduct();