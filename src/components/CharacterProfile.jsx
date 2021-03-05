import { useParams } from "react-router-dom";

const CharacterProfile = (props) => {
    const { index } = useParams();
    console.log("props are: ", props);
    console.log("index is: ", index)
    const character = props.characters[index];
    console.log("Character is: ", character)

    return (
        <>
            <h1>{character.name}</h1>
            <p>{character.birth_year}</p>
            <p>{character.skin_color}</p>
        </>
    )
}

export default CharacterProfile;