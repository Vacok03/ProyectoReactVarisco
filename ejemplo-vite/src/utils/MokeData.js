import cañoSigasImage from '../../src/assets/canosigas.png';
import cañoTigreImage from '../../src/assets/canotigre.png';
import cañoAwadukImage from "../../src/assets/canoawaduc.jpeg";
import codoAwadukImage from "../../src/assets/codoawaduc.jpg";
import codoSigasImage from '../../src/assets/codosigas.jpeg';
import codoTigreImage from '../../src/assets/codotigre.png';
export const products = [
    {
        id: 1,
        name: "caño gas",
        description: "caño marca sigas fusion",
        price: "$100",
        stock: 15,
        type: "Gas",
        image: cañoSigasImage,
    },
    {
        id: 2,
        name: "caño agua",
        description: "caño marca tigre",
        price: "$160",
        stock: 10,
        type: "Agua",
        image: cañoTigreImage,
    },
    {
        id: 3,
        name: "codo agua",
        description: "codo marca tigre",
        price: "$160",
        stock: 10,
        type: "Agua",
        image: codoTigreImage,
    },
    {
        id: 4,
        name: "caño awaduk",
        description: "caño marca awaduk",
        price: "$160",
        stock: 10,
        type: "Cloaca",
        image: cañoAwadukImage,
    },
    {
        id: 5,
        name: "codo awaduk",
        description: "codo marca awaduk",
        price: "$160",
        stock: 10,
        type: "Cloaca",
        image: codoAwadukImage,
    },
    {
        id: 6,
        name: "codo sigas",
        description: "codo marca sigas",
        price: "$160",
        stock: 10,
        type: "Gas",
        image: codoSigasImage,
    }
];

export const getProducts = () => {
    return fetch('https://fakestoreapi.com/products').then((res) => res.json());
    
    new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(products);
        }, 1000);
    });
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

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve (products.filter((elem) => elem.type === categoryId));            
        }, 1000);
    });
};