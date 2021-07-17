import React from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { useLocation, useHistory  } from "react-router-dom";
import { Link } from 'react-router-dom';
import './edit-recipe.css';

const EditRecipe = () => {
  // const location = useLocation();
  // const { id } = location.state;
  const id = 1234;
  const history = useHistory();
  const authorId = 123456;

  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const { fields: ingredientsFields, append: ingredientsAppend, remove: ingredientsRemove} = useFieldArray({ control, name: "ingredients" });
  const { fields: preparationFields, append: preparationAppend, remove: preparationRemove} = useFieldArray({ control, name: "preparation" });

  const verifyFormData = (data) => {
    if ('authorId' in data && 'id' in data && 'ingredients' in data && 'preparation' in data && 'hours' in data && 'minutes' in data && 'cost' in data) {
      return true
    }
    return false
  }

  const onSubmit = (data) => {
    let result = {...data, id: id, authorId: authorId}
    result = !result.hours && {...result, hours: 0}
    const isFormValid = verifyFormData(result)
    if (isFormValid) {
      history.push("/");
      console.log(result)
    }
  };

  return (
    <div className="recipe-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
          <label> Recipe Title </label>
          {errors?.title?.type === "required" && <p>Required</p>}
          <input label="title" data-testid="title" id="title" defaultValue="" placeholder="" autoComplete="off" {...register("title", { required: true })} />

          <label>Ingredients</label>
          <ul>
            {ingredientsFields.map((item, index) => {
            return (
                <li key={item.id}>
                <input id="ingredient-input" data-testid="ingredients-item" placeholder="e.g. '2 Cups of Flour'" autoComplete="off" {...register(`ingredients.${index}.name`, { required: true })} />
                <button id="remove-button" type="button" onClick={() => ingredientsRemove(index)}> X </button>
                </li>
            );
            })}
            <button id="add-items" data-testid="ingredients-add-button" type="button" onClick={() => { ingredientsAppend({ name: "" }) }}> Add Ingredient </button>
          </ul>

          <label>Preparation Steps</label>
          <ul>
              {preparationFields.map((item, index) => {
              return (
                  <li key={item.id}>
                  <input id="preparation-input" data-testid="preparation-item" placeholder="e.g. 'Whisk Sugar and Eggs for 3 minutes'" autoComplete="off" {...register(`preparation.${index}.name`, { required: true })} />
                  <button id="remove-button" type="button" onClick={() => preparationRemove(index)}> X </button>
                  </li>
              );
              })}
              <button id="add-items" data-testid="preparation-add-button" type="button" onClick={() => { preparationAppend({ name: "" }) }}> Add Step </button>
          </ul>

          <label>Hours to Prepare</label>
          <input type="number" data-testid="hours" id="small-input" placeholder="0" name="hours" pattern="^-?[0-59]\d*\.?\d*$" autoComplete="off" />

          <label>Minutes to Prepare</label>
          {errors?.minutes?.type === "required" && <p>Required</p>}
          <input type="number" data-testid="minutes" id="small-input" placeholder="30" name="minutes" pattern="^-?[0-59]\d*\.?\d*$" autoComplete="off" {...register("minutes", { required: true })} />

          <label>Total Cost ($)</label>
          {errors?.cost?.type === "pattern" && <p>Cost should be whole number or a whole number + decimal. e.g 1, 1.0, 1.5, 0.6 etc</p>}
          {errors?.cost?.type === "required" && <p>Required</p>}
          <input id="small-input" data-testid="cost" placeholder="5.00" name="cost" pattern="^-?[0-59]\d*\.?\d*$" autoComplete="off" {...register("cost", { required: true, pattern: '[+-]?([0-9]*[.])?[0-9]+' })}/>

          <label>Vegan</label>
          <input id='checkbox' data-testid="vegan" type="checkbox" autoComplete="off" {...register('vegan')} />

          <label>Lactose Free</label>
          <input id='checkbox'data-testid="lactose" type="checkbox" autoComplete="off" {...register('lactoseFree')}  />

          <label>Image</label>
          <input id="image" data-testid="image" type="file" autoComplete="off" {...register('image')} />

          <br/><br/>
        <input label="submit" id="submit" type="submit" />
      </form>

      <Link to='/'> <button className="cancel-button"> Cancel </button> </Link>
    </div>
  );
};

export default EditRecipe;
