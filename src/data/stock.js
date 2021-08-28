const dress1 = require('../images/dresses/dress1.jpeg').default
const dress2 = require('../images/dresses/dress2.jpeg').default
const dress3 = require('../images/dresses/dress3.jpeg').default

const pants1 = require('../images/pants/pants1.jpeg').default
const pants2 = require('../images/pants/pants2.jpeg').default
const pants3 = require('../images/pants/pants3.jpeg').default

const shirt1 = require('../images/shirts/shirt1.jpeg').default
const shirt2 = require('../images/shirts/shirt2.jpeg').default
const shirt3 = require('../images/shirts/shirt3.jpeg').default


export const stock = [
    {
        id: 1,
        categoria: 'vestidos',
        nombre: "Pants Corto V&",
        desc: "Pantalón Corto Marrón, Talla S",
        precio: "10.000 CLP",
        img: dress1
    },
    {
        id: 2,
        categoria: 'vestidos',
        nombre: "Vestido M&B",
        desc: "Vestido Color Marrón, Talla S",
        precio: "18600 CLP",
        img: dress2
    },
    {
        id: 3,
        categoria: 'vestidos',
        nombre: "Vestido A&B",
        desc: "Vestido Color Azul, Talla M",
        precio: "15600 CLP",
        img: dress3
    },
    {
        id: 4,
        categoria: 'jeans',
        nombre: "Jeans Retro 1",
        desc: "Jeans Talla M",
        precio: "12000 CLP",
        img: pants1
    },
    {
        id: 5,
        categoria: 'jeans',
        nombre: "Jeans Retro 2",
        desc: "Jeans Talla M",
        precio: "12000 CLP",
        img: pants2
    },
    {
        id: 6,
        categoria: 'jeans',
        nombre: "Jeans Retro 3",
        desc: "Jeans Talla M",
        precio: "12000 CLP",
        img: pants3
    },
    {
        id: 7,
        categoria: 'poleras',
        nombre: "Polera STM 1",
        desc: "Polera Talla M",
        precio: "5600 CLP",
        img: shirt1
    },
    {
        id: 8,
        categoria: 'poleras',
        nombre: "Polera STM 2",
        desc: "Polera Talla S",
        precio: "5600 CLP",
        img: shirt2
    },
    {
        id: 9,
        categoria: 'poleras',
        nombre: "Polera STM 3",
        desc: "Polera Talla S",
        precio: "5600 CLP",
        img: shirt3
    }
]