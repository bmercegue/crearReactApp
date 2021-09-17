import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { ItemList } from './ItemList'
import './ItemListContainer.css'
import { Loader } from '../Loader/Loader'
import { getFirestore } from '../../firebase/config'


export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { catId } = useParams()

    const [data, setData] = useState([])

    useEffect( ()=> {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')
                
        if (catId) {
            const filtrado = productos.where('categoria', '==', catId)
            filtrado.get()
                    .then((response) => { 
                        const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                        console.log(data)
                        setData(data)
                })
                .finally(()=> {
                    setLoading(false)
                })
        } else { 
            productos.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    console.log(data)
                    setData(data)
                })
                .finally(()=> {
                    setLoading(false)
                })
        }

    }, [catId, setLoading])

    return (
        <>
            {loading 
            ? 
            <Loader/>                 
            :
            <div className="catContainer">
            <hr/>
                <h2>{catId}</h2>
                <ItemList productos={data}/>
            </div>
            }
        </>
    )
}
