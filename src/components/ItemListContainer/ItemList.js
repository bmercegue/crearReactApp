import React from 'react'
import { Item } from './Item'
import '../ItemListContainer/ItemList.css'

export const ItemList = ({productos = []} ) => {

    return (
        <section className="container">  
            {productos.map((prod) => <Item key={prod.id} {...prod}/>)}       
        </section>
    )
}
