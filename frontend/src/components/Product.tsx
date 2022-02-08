import styled from 'styled-components'
import { CarsData } from '../interfaces/CarsData'
// import { CarsData } from './ProductList'

const url: string = 'https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg'

interface Props {
    car: CarsData
}

const Product = ({ car }: Props) => {
    return <Container>
        <Image src={url} />
        <Title>{car.Name.toUpperCase()}</Title>
        <DescriptionBox>
            <DescriptionList>
                <li> Acceleration: {car.Acceleration}s</li>
                <li> Year: {car.Year}</li>
                <li> Weight: {car.Weight_in_lbs}lbs</li>
            </DescriptionList>
            <Price>{car.Origin}</Price>
        </DescriptionBox>
        <Contact>Horse Power: {car.Horsepower}</Contact>
    </Container>
}

export default Product

const Container = styled.section`
    background: linear-gradient(180deg, #ff6161, transparent);
    width:220px;
    border: solid black 1px
`
const Image = styled.img`
    height: 150px;
    object-fit:cover;
    width:100%;
`
const Title = styled.h3`
    margin:5px;
    font-size:14px
`
const DescriptionList = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    text-align:left;
    font-size:0.9em;
    font-family: monospace
`
const Contact = styled.div`
    font-family: fantasy;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Price = styled.h4`
    margin:0;
    font-family: fantasy;
    font-weight: lighter;
`
const DescriptionBox = styled.div`
    padding-top:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    width:100%;
`