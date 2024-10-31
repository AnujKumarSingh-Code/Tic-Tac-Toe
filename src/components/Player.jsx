import { useState } from "react"


export default function Player({initialName , symbol}) {
    const [ isEditing , setIsEditing ] = useState(false);
    const [ playerName , setPlayerName ] = useState(initialName);

    // for updating state based on previous sate you should noy directly change state rather you should pass a funxction
    function handleEditClick(){
        // setIsEditing(!isEditing);  // schedules a state update to true
        // setIsEditing(!isEditing);  // schedules a state update to true
        // // Both the statements have same isEditing input not different 

        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        // console.log(event);
        setPlayerName(event.target.value);
    }
    
    let editablePlayerName = <span className="player-name"> {playerName}</span>;

    if(isEditing){
        editablePlayerName = <input type="text" value={playerName} required onChange={handleChange}/>;
    }

    return(
        <li>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{ isEditing ? "Save" : "Edit" }</button>
          </li>
    )
}