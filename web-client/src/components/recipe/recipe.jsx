import { Link } from 'react-router-dom';
import './recipe.css';
import { useForm, useFieldArray } from "react-hook-form";
import React from "react";


const Recipe = (props) => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
          food: [{ name: "pizza" }],
          drinks: [{ name: "martini" }]
        }
      });
    const {
    fields: foodFields,
    append: foodAppend,
    remove: foodRemove
    } = useFieldArray({ control, name: "food" });
    const {
    fields: drinkFields,
    append: drinkAppend,
    remove: drinkRemove
    } = useFieldArray({ control, name: "drinks" });

    const onSubmit = data => console.log("data", data);

    return (
        <>
        <div style={{width: '100px', background: 'grey'}}>
            <Link to='/'>Go Back</Link>
            <p> Sandbox to figure out Field Arrays</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
        <h5>FOOD</h5>

        {foodFields.map((item, index) => {
            return (
            <li key={item.id}>
                <input name={`food[${index}].name`} {...register('foods')} />

                <button type="button" onClick={() => foodRemove(index)}>
                Delete
                </button>
            </li>
            );
        })}
        <button
            type="button"
            onClick={() => {
            foodAppend({ name: "" });
            }}
        >
            append food
        </button>
        </ul>
        <ul>
        <h5>DRINKS</h5>
        {drinkFields.map((item, index) => {
            return (
            <li key={item.id}>
                <input name={`drinks[${index}].name`} {...register('drink')} />
                <button type="button" onClick={() => drinkRemove(index)}>
                Delete
                </button>
            </li>
            );
        })}
        <button
            type="button"
            onClick={() => {
            drinkAppend({ name: "" });
            }}
        >
            append drinks
        </button>
        </ul>

        <input type="submit" />
        </form>
    </>
    )
}

export default Recipe;