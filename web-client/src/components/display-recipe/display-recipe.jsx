import { Link } from 'react-router-dom';
import './display-recipe.css';


const Recipe = (props) => {

    return (
        <div style={{width: '100px', background: 'grey'}}>
            <Link to='/'>Go Back</Link>
        </div>

    )
}

export default Recipe;