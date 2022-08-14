const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('shopping_cart'));
}
console.log(getFromLocalStorage())
const addToLocalStorage = (id) => {
    console.log('added to local storage'); //inspact e showing
    // localStorage.setItem('shopping_cart', id)
    const exist = getFromLocalStorage();
    console.log(exist)

    let shoppingCart = {};
    if (!exist) {
        shoppingCart[id] = 1;
    } else {
        shoppingCart = exist;
        if (shoppingCart[id]) {
            const newCount = shoppingCart[id] + 1;
            shoppingCart[id] = newCount
        } else {
            shoppingCart[id] = 1;
        }
    }

    localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));
    //stringfy na korle obj obj show hbe 
    //square braket er vitore dynamic data pass kora jae tai square braket diye korlam
}

export { addToLocalStorage };