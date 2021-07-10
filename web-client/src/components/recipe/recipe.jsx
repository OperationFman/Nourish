import { Link } from 'react-router-dom';
import './recipe.css';

import { useForm, useFieldArray } from "react-hook-form";

const Recipe = (props) => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
          ingredients: [{ ingredient: "Pasta"}]
        }
      });
    const { fields, append, remove} = useFieldArray(
    {
        control,
        name: "ingredients"
    }
    );

    const onSubmit = (data) => console.log(data);

    return (
        <>
        <div style={{width: '100px', background: 'grey'}}>
            <Link to='/'>Go Back</Link>
            <p> Sandbox to figure out Field Arrays</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
        {fields.map((item, index) => {
            return (
            <li key={item.id}>
                <input
                defaultValue={`${item.ingredient}`} 
                {...register(`ingredients.${index}.ingredient`, { required: true })}
                />

                <button type="button" onClick={() => remove(index)}>
                Delete
                </button>
            </li>
            );
        })}
        </ul>

        <button
            type="button"
            onClick={() => {append({ ingredient: ""});}}
        >Add</button>


        <input type="submit" />
        </form>
</>
    )
}

export default Recipe;