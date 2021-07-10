import { useForm, useFieldArray } from "react-hook-form";
import { useLocation } from "react-router-dom";
import './edit-recipe-form.css';

const EditRecipe = () => {
  const location = useLocation();
  const { id } = location.state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const result = {...data, id: id}
    console.log(result);
  };

  return (
    <div className="recipe-form-container">
      <form onSubmit={handleSubmit(onSubmit)} style={{color: 'black'}}>
        {console.log(id)}

          <label htmlFor="title">Choose a Title</label>
          <input id="title" defaultValue="" placeholder="Recipe Title" {...register("title", { required: true })} />

          <label htmlFor="ingredients"> Add Ingredients </label>
          <textarea id="ingredients" defaultValue="" placeholder="Add Each Ingredient" {...register("ingredients", { required: true })} /> 

          <label htmlFor="preparation"> Preparation </label>
          <textarea id="preparation" defaultValue="" placeholder="How to Make Your Recipe" {...register("preparation", { required: true })} /> 

          <label htmlFor="hours">Hours to Prepare</label>
          <input type="number" id="hours" name="hours" pattern="^-?[0-59]\d*\.?\d*$"  />

          <label htmlFor="minutes">Minutes to Prepare</label>
          <input type="number" id="minutes" name="minutes" pattern="^-?[0-59]\d*\.?\d*$" />

          <label htmlFor="vegan"> Vegan </label>
          <input id='vegan' type="checkbox" {...register('vegan')} />

          <label htmlFor="lactoseFree"> Lactose Free </label>
          <input id='lactoseFree' type="checkbox" {...register('lactoseFree')}  />

          <label htmlFor="image">Upload Image</label>
          <input id="image" type="file" {...register('image')} />

          <br/>
        <input id="submit" type="submit" />
      </form>
    </div>
  );
};

export default EditRecipe;
