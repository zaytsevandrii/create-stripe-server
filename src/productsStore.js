//Coffee price_1MC5MrGyiZQzD7czb9Zmi4Nc
//Sungl price_1MC5O8GyiZQzD7czQa2lTeL2
//Camera price_1MC5OVGyiZQzD7czZ2kDMUJk

const productsArray = [
    {
        id: 1,
        title: "Cofee",
        price: 4.99,
    },
    {
        id: 2,
        title: "Sunglasses",
        price: 9.99,
    },
    {
        id: 3,
        title: "Camera",
        price: 39.99,
    },
]

function getProductData(id) {
    let productData = productsArray.find((product) => product.id === id)

    if (productData === undefined) {
        console.log("Product not found")
        return undefined
    }
    return productData
}

export { productsArray,getProductData }
