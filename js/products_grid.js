import {fetchAllProducts, renderSingleProductHTML, fetchFeaturedProducts} from "./constant.js";

const movieList =  document.querySelector('.movie-list');
const featuredMovieList =  document.querySelector('.featured-movies');

async function renderProducts() {
    const products = await fetchAllProducts();
    const featuredProducts = await fetchFeaturedProducts();
    console.log(products);
    console.log(featuredProducts);
    movieList.innerHTML = '';
    products.forEach(product => {
        // render single product
        const domItem = renderSingleProductHTML(product);
        movieList.append(domItem);
    });
    featuredProducts.forEach(product => {
        // render featured product
        const domItem = renderSingleProductHTML(product);
        featuredMovieList.append(domItem);
    });
}

renderProducts();