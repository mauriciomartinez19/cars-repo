import Product from "./Product"
import styled from 'styled-components'
import { carsData } from "../data/data"
import { useState, useEffect } from "react"
import { CarsData } from "../interfaces/CarsData"



const ProductList = () => {

    const getCars = async () => {
        const response = await fetch('https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json')
        const data = await response.json()
        setCars(data)
    }

    useEffect(() => {
        getCars()
    })

    const [cars, setCars] = useState<CarsData[]>(carsData)
    return <ProductGrid>
        <ProductsBox>
            {cars.map((car, i) => {
                return <Product
                    car={car}
                    key={i} />
            })}
        </ProductsBox>
    </ProductGrid>
}

export default ProductList

const ProductsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 2rem;
    
`
const ProductGrid = styled.div`
    display:flex;
    width:100%;
    justify-content:center
`