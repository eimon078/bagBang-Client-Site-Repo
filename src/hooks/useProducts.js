import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
            })
    }, [])
    return products;
}

export default useProducts;