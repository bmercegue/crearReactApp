import React, { useEffect } from 'react'

export const Contador = () => {

    const [contador, setContador] = useState(
        {
            clicks:0,
            fecha:null
        }
    )

    const handleClick = () => {
        setContador({
            clicks: contador.clicks + 1,
            fecha: new Date().toLocaleString()
        })
    }

    useEffect( ()=> {

    },[contador])

    return (
        <div>
            
        </div>
    )
}
