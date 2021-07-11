import { useForm, useFieldArray } from "react-hook-form";
import { useLocation, useHistory  } from "react-router-dom";
import { Link } from 'react-router-dom';
import './edit-recipe-form.css';

const EditRecipe = () => {
  const location = useLocation();
  const { id } = location.state;
  const history = useHistory();
  const authorId = 123456;

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      ingredients: [{ name: "" }],
      preparation: [{ name: "" }]
    }
  });

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
    // result = !result.hours && {...result, hours: 0}
    // const isFormValid = verifyFormData(result)
    // if (isFormValid) {
    //   history.push("/");
    //   console.log(result)
    // }
    console.log(result)
  };

  return (
    <div className="recipe-form-container">
      <form onSubmit={handleSubmit(onSubmit)} style={{color: 'black'}}>
        {console.log(id)}

          <label htmlFor="title">Recipe Title</label>
          {errors?.title?.type === "required" && <p>Required</p>}
          <input id="title" defaultValue="" placeholder="" {...register("title", { required: true })} />

          <label>Ingredients</label>
          <ul>
            {ingredientsFields.map((item, index) => {
            return (
                <li key={item.id}>
                <input placeholder="e.g. '2 Cups of Flour'" {...register(`ingredients.${index}.name`, { required: true })} />
                <button type="button" onClick={() => ingredientsRemove(index)}> Delete </button>
                </li>
            );
            })}
            <button type="button" onClick={() => { ingredientsAppend({ name: "" }) }}> Add </button>
          </ul>
          
          <label>Preparation Steps</label>
          <ul>
              {preparationFields.map((item, index) => {
              return (
                  <li key={item.id}>
                  <input placeholder="e.g. 'Whisk Sugar and Eggs for 3 minutes'" {...register(`preparation.${index}.name`, { required: true })} />
                  <button type="button" onClick={() => preparationRemove(index)}> Delete </button>
                  </li>
              );
              })}
              <button type="button" onClick={() => { preparationAppend({ name: "" }) }}> Add </button>
          </ul>

          <label htmlFor="hours">Hours to Prepare</label>
          <input type="number" id="hours" placeholder="0" name="hours" pattern="^-?[0-59]\d*\.?\d*$"  />

          <label htmlFor="minutes">Minutes to Prepare</label>
          {errors?.minutes?.type === "required" && <p>Required</p>}
          <input type="number" id="minutes" placeholder="30" name="minutes" pattern="^-?[0-59]\d*\.?\d*$" {...register("minutes", { required: true })} />

          <label htmlFor="cost">Total Cost ($)</label>
          {errors?.cost?.type === "pattern" && <p>Cost should be whole number or a whole number + decimal. e.g 1, 1.0, 1.5, 0.6 etc</p>}
          {errors?.cost?.type === "required" && <p>Required</p>}
          <input id="cost" placeholder="5.00" name="cost" pattern="^-?[0-59]\d*\.?\d*$" {...register("cost", { required: true, pattern: '[+-]?([0-9]*[.])?[0-9]+' })}/>

          <label htmlFor="vegan"> Vegan </label>
          <input id='vegan' type="checkbox" {...register('vegan')} />

          <label htmlFor="lactoseFree"> Lactose Free </label>
          <input id='lactoseFree' type="checkbox" {...register('lactoseFree')}  />

          <label htmlFor="image">Image</label>
          <input id="image" type="file" {...register('image')} />

          <br/>
        <input id="submit" type="submit" />
      </form>

      <Link to='/'> <button className="cancel-button"> Cancel </button> </Link>
    </div>
  );
};

export default EditRecipe;

// Here goes