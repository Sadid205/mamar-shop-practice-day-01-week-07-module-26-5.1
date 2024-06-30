const loadAllProducts=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>showAllProducts(data))
}

const showAllProducts=(products)=>{
    const parent = document.getElementById('products')
    products.forEach((product)=>{
        const div = document.createElement("div")
        div.classList.add("product_card","m-auto")
        div.innerHTML = `
            <div class="d-flex justify-content-center">
                <img src="${product.image}" class="product_image" alt="image">
            </div>
            <div class="">
                <h5 class="card-title">${product.title.slice(0,10)}</h5>
                <p class="card-text text-secondary"><span class="fw-bold">Description:</span>${product.description.slice(0,100)}</p>
                <div class="d-flex justify-content-between">
                    <p class="fw-semibold">Category : ${product.category}</p>
                    <p>Rating :<span class="fw-bold">${product.rating.rate}</span></p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="fw-bold">Price:${product.price}$</p>
                    <p class="fw-bold">Quantity:${product.rating.count}</p>
                </div>
                <a href="./productDetails.html?productId=${product.id}" class="btn w-100 btn-outline-primary">details</a>
            </div>
            `
       parent.appendChild(div) 
    })
}

const displayCategoryWiseProduct = (category)=>{
    const parent = document.getElementById("products")
    parent.innerHTML = ""
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.json())
    .then((products)=>{
        products.forEach((product)=>{
            const div = document.createElement("div")
            div.classList.add("product_card","m-auto")
            div.innerHTML = `
                <div class="d-flex justify-content-center">
                    <img src="${product.image}" class="product_image" alt="image">
                </div>
                <div class="">
                    <h5 class="card-title">${product.title.slice(0,10)}</h5>
                    <p class="card-text text-secondary"><span class="fw-bold">Description:</span>${product.description.slice(0,100)}</p>
                    <div class="d-flex justify-content-between">
                        <p class="fw-semibold">Category : ${product.category}</p>
                        <p>Rating :<span class="fw-bold">${product.rating.rate}</span></p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="fw-bold">Price:${product.price}$</p>
                        <p class="fw-bold">Quantity:${product.rating.count}</p>
                    </div>
                    <a href="./productDetails.html?productId=${product.id}" class="btn w-100 btn-outline-primary">details</a>
                </div>
                `
           parent.appendChild(div) 
        })
    })
    .catch((err)=>console.log(err))
}

const loadAllCategory = ()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(categories=>{
                const parent = document.getElementById("parent");
                categories.forEach((category)=>{
                    const li = document.createElement("li");
                    li.addEventListener("click",(li)=>{
                        displayCategoryWiseProduct(li.target.innerText)
                    })
                    li.innerHTML = `
                    <a class="dropdown-item fw-bold" href="#">${category}</a>
                    `
                    parent.appendChild(li)
                })
            })
            .catch((err)=>console.log(err))
}

loadAllCategory()
loadAllProducts()