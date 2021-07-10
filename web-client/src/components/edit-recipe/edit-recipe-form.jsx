import { useForm, useFieldArray } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import './edit-recipe-form.css';

const EditRecipe = () => {
  const location = useLocation();
  const { id } = location.state;
  const authorId = 123456;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const result = {...data, id: id, authorId: authorId}

    console.log(result);
  };

  return (
    <div className="recipe-form-container">
      <form onSubmit={handleSubmit(onSubmit)} style={{color: 'black'}}>
        {console.log(id)}

          <label htmlFor="title">Recipe Title</label>
          {errors?.title?.type === "required" && <p>Title is required</p>}
          <input id="title" defaultValue="" placeholder="" {...register("title", { required: true })} />

          <label htmlFor="ingredients">Ingredients </label>
          <textarea id="ingredients" defaultValue="" placeholder="Separate by comma, e.g 12 eggs, 1L milk, bread, etc.." {...register("ingredients", { required: true })} /> 

          <label htmlFor="preparation"> Preparation Steps</label>
          <textarea id="preparation" defaultValue="" placeholder="" {...register("preparation", { required: true })} /> 

          <label htmlFor="hours">Hours to Prepare</label>
          <input type="number" id="hours" placeholder="0" name="hours" pattern="^-?[0-59]\d*\.?\d*$"  />

          <label htmlFor="minutes">Minutes to Prepare</label>
          <input type="number" id="minutes" placeholder="30" name="minutes" pattern="^-?[0-59]\d*\.?\d*$" />

          <label htmlFor="cost">Total Cost ($)</label>
          {errors?.cost?.type === "pattern" && <p>Cost should be whole number or a whole number + decimal. e.g 1, 1.0, 1.5, 0.6 etc</p>}
          <input type="cost" id="cost" placeholder="5.00" name="cost" pattern="^-?[0-59]\d*\.?\d*$" {...register("cost", { required: true, pattern: '[+-]?([0-9]*[.])?[0-9]+' })}/>

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
