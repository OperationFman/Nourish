import { Link } from 'react-router-dom';
import './recipe.css';

import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

const Recipe = (props) => {
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
          test: [{ firstName: "Bill"}]
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
                <input defaultValue={`${item.firstName}`} // make sure to set up defaultValue
                {...register(`test.${index}.firstName`)}
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
            onClick={() => {
            append({ firstName: "appendBill"});
            }}
        >
            append
        </button>

        
        <input type="submit" />
        </form>
</>
    )
}

export default Recipe;