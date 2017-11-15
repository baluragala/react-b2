export default (prevState = {products: []}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                products: [
                    {id: 1, title: 'apple-r', price: 20},
                    {id: 2, title: 'banana-r', price: 20},
                    {id: 3, title: 'cherry-r', price: 20}
                ]
            };
        default:
            return prevState;
    }
}