import Card from "./Card";
import { Robot } from "../assets/Robots";

const robot:Robot = {
    id: 123,
    username: 'Michail',
    name: 'Michail',
    email: 'myemail@lt.com'
}

const Grid = ()=>{
    return (
        <>
        This is Grid:
            <Card {...robot} />
        </>
    )
}

export default Grid