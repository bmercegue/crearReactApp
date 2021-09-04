import React, { useContext, useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { ItemList } from './ItemList'
import './ItemList.css'
import Loader from '../Loader'

export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { catId } = useParams()

    const [data, setData] =useState([])

    useEffect( ()=> {
        setLoading(true)

        pedirDatos()
            .then(res => {
                
                if (catId) {
                    const arrayFiltrado = res.filter( prod => prod.categoria === catId)
                    setData( arrayFiltrado )
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {loading 
            ? 
            <div className="loaderContainer">
                <div className="loader">
                 <Loader/>   
                </div>    
            </div>               
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
