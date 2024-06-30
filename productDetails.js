const getParam = ()=>{
    const param = new URLSearchParams(window.location.search).get('productId');
    productDetailsView(param)
}



const productDetailsView = (id)=>{
    const parent = document.getElementById("product_details");
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(product=>{
        parent.innerHTML = `
        <div class="col-md-4 d-flex justify-content-center">
            <img width="300px" height="300px" style="" src="${product.image}" alt="image">
        </div>
        <div class="col-md-8">
            <h1 class="fw-bold text-secondary">${product.title}</h1>
            <h4 class="text-secondary fw-semibold">Category : ${product.category}</h4>
            <p><span class="fw-bold">Description</span> :${product.description}</p>
            <p>Price : <span class="fw-bold">${product.price}$</span></p>
            <button type="button" class="btn btn-primary">Buy Now</button>
        </div>
        `
    })
   
}

getParam()



