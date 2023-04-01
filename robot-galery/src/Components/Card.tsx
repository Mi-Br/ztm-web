import './Card.css'
import { Robot } from "../assets/Robots"
import sound from "/plunger-immediate.mp3"
import { useState } from 'react'

const Card = ({name, email, username}: Robot)=>{
    const [isHovering, setIsHovering] = useState(false);

    const imgUrl = `https://robohash.org/${username}`
    return(
        <>
        <div className="card" onMouseEnter={()=>{setIsHovering(true)}} onMouseLeave={()=>{setIsHovering(false)}}>
            <img src={imgUrl} alt="robot image"/>
            <h2>{name}</h2>
            <p>{email}</p>
            <audio src={isHovering ? sound: ''} autoPlay typeof='audio/mp4'></audio>
        </div>
        </>
    )
}
export default Card