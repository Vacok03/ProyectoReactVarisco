import cañoSigasImage from '../../src/assets/canosigas.png'
import cañoTigreImage from '../../src/assets/canotigre.png';
export const products = [
    {
        id: 1,
        name: "caño gas",
        description: "caño marca sigas fusion",
        price: "$100",
        stock: 15,
        image: cañoSigasImage,
    },
    {
        id: 2,
        name: "caño agua",
        description: "caño marca aquasystem fusion",
        price: "$160",
        stock: 10,
        image: cañoTigreImage,
    }
];

export const getProducts = () => {
    return fetch('https://fakestoreapi.com/products').then((res) => res.json());
    
    //new Promise((resolve, reject) => {
      //  setTimeout(() => {
        //    resolve(products);
        //}, 2000);
    //});
};


export const setProducts = () => {
    return fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify({
            title: "test product",
            price: 13.5,
            description: "Lorem ipsum",
            image: "https://i.pravatar.cc",
            category: "electronic",
        }),
    }).then((res) => res.json());
}
