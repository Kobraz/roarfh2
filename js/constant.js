const BASE_URL = 'https://falchhanssen.net/stud/wp-json/wc/store';
const FEATURED_URL = '/products?&featured=true';
const PRODUCT_URL = '/products';


async function fetchAllProducts() {
    const response = await fetch(BASE_URL + PRODUCT_URL);
    const result = await response.json();
    return result;
    // console.log(result);
}

async function fetchFeaturedProducts(id) {
    const response = await fetch(BASE_URL + FEATURED_URL);
    const result = await response.json();
    return result;
}

async function fetchSingleProduct(id) {
    const response = await fetch(BASE_URL + PRODUCT_URL + `/${id}`);
        const result = await response.json();
        return result;
        // console.log(result);
    }

function renderSingleProductHTML(product) {
    const { id, name, description } = product;
    const wrapper = document.createElement('a');
    wrapper.classList.add('contentmod');
    // <a href="#"></a>
    const heading = document.createElement('h2');
    // <h2></h2>
    const body = document.createElement('p');
    wrapper.href = `details.html?id=${id}`;
    heading.innerText = name;
    body.innerText = description;
    wrapper.append(heading, body);
    return wrapper;
}

export {
    BASE_URL,
    FEATURED_URL,
    PRODUCT_URL,
    fetchSingleProduct,
    fetchAllProducts,
    renderSingleProductHTML,
    fetchFeaturedProducts
}