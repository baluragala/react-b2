export default (prevState = {products: [], offers: [], customers: [], sales: []}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
        case 'GET_POSTS':
        case 'GET_COMMENTS':
            return Object.assign({}, prevState, {isLoading: true});
        case 'GET_PRODUCTS_SUCCESS':
            return Object.assign({}, prevState, {isLoading: false, products: action.products});
        case 'GET_POSTS_SUCCESS':
            return Object.assign({}, prevState, {isLoading: false, posts: action.posts});
        case 'GET_COMMENTS_SUCCESS':
            return Object.assign({}, prevState, {isLoading: false, comments: action.comments});

        default:
            return prevState;
    }
}