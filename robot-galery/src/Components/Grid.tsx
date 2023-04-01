import Card from "./Card";
import './Grid.css'
import { Robot } from "../assets/Robots";

interface GridProps {
    robots: Robot[]
}

const Grid = ({robots}:GridProps)=>{
    return (
        <>
        <div className="grid">
            {robots.map((r)=>{
            return (<Card key={r.id} {...r}></Card>)
            })}
        </div>
        
        </>
    )
}

export default Grid