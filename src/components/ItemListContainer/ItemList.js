import React from 'react'
import { Item } from './Item'
import './ItemList.css'

export const ItemList = ({productos = []} ) => {

    return (
      
        <div className="productos">
            <hr/>
                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}       
        </div>
    )
}
