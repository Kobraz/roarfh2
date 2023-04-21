import {fetchAllProducts, renderSingleProductHTML} from "./constant.js";

const movieList =  document.querySelector('.movie-list');

async function fetchFeaturedProducts(id) {
    const response = await fetch(BASE_URL + FEATURED_URL);
        const result = await response.json();
        // console.log(result);
    }

async function renderProducts() {
    const products = await fetchAllProducts();
    console.log(products);
    movieList.innerHTML = '';
    products.forEach(product => {
        const domItem = renderSingleProductHTML(product);
        movieList.append(domItem);
    });
}

renderProducts();
// fetchAllProducts();
// fetchSingleProduct(57);