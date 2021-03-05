import CharacterProfile from './CharacterProfile';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardContent,
    CardImage
} from 'bloomer';
import 'bulma/css/bulma.css';


const CharacterList = (props) => {
    const { characters, index } = props;
    const { url, path } = useRouteMatch(); 
    return (

        <>
            <h1>
              Here Lies the list of characters
            </h1>
            <ul>
            {!!characters.length ? (
              characters.map((character, index) => (
                <li>
                <Link to={`${url}character/${index}`}>
                    <Card>
                        <CardHeader className='is-flex is-justify-content-center'>
                            <h1>{character.name}</h1>
                        </CardHeader>
                        <CardContent>
                            <CardImage>
                                <img src="" alt=""/>
                            </CardImage>
                        </CardContent>
                    </Card>
                </Link>
            </li>
              ))
            ) : (
              <p>Loading Character Data</p>
            )}
            </ul>
            <Route exact path={path}>
                <h2>Please Choose a Profile</h2>
            </Route>
            </>
    );
}

export default CharacterList;