import { Link } from 'react-router-dom';
import './display-recipe.css';


const Recipe = ({label}) => {

    return (
        <>
        <div style={{width: '100px', background: 'grey'}}>
            <Link to='/'>Go Back</Link>
        </div>

        <div data-testid="button">
            {label}
        </div>
        </>
    )
}

export default Recipe;