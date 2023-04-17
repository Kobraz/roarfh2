const apiBase = "https://falchhanssen.net/stud";
const wooBase = "/wp-json/wc/store";
const productBase = "/products";
const pagesBase = "/wp-json/wp/v2/pages";
const productId = "/" + 57;

const fullPagesURL = apiBase + pagesBase;
const fullProductURL = apiBase + wooBase + productBase;
const fullProductURLExample = "https://falchhanssen.net/stud/wp-json/wc/store/products";


async function getProducts() {
    const response = await fetch(fullProductURL);

    const products = await response.json();

    return products;
}

function createProductHTML(product) {
    const container = document.querySelector(".cardImg");

    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;

    // const title = document.createElement("h2");
    // title.innerText = product.name;
    // productContainer.append(title);

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img);
    }

    container.append(productContainer);

}

function createProductsHTML(products) {
    for (let i = 0; i < 1; i++) {
        const product = products[1];
        createProductHTML(product);
    }
}

async function productPage() {
    const products = await getProducts();
    createProductsHTML(products);
}

productPage();