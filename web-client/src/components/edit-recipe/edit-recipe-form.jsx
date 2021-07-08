import { useForm, useFieldArray } from "react-hook-form";
import { useLocation } from "react-router-dom";

const EditRecipe = () => {
  const location = useLocation();
  const { id } = location.state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{color: 'black'}}>
      {console.log(id)}
        <label htmlFor="image"> Upload Image </label>
        <input id="image" type="file" {...register('image')} />

        <label htmlFor="title"> Choose a Title </label>
        <input id="title" defaultValue="" placeholder="Recipe Title" {...register("title", { required: true })} />

        <label htmlFor="ingredients"> Add Ingredients </label>
        <textarea id="ingredients" defaultValue="" placeholder="Add Each Ingredient" {...register("ingredients", { required: true })} /> 

        <label htmlFor="preparation"> Preparation </label>
        <textarea id="preparation" defaultValue="" placeholder="How to Make Your Recipe" {...register("preparation", { required: true })} /> 

        <input id='vegan' type="checkbox" {...register('vegan')} />
        <label htmlFor="vegan"> Vegan </label>

        <input id='lactoseFree' type="checkbox" {...register('lactoseFree')}  />
        <label htmlFor="lactoseFree"> Lactose Free </label>

      <input type="submit" />
    </form>
  );
};

export default EditRecipe;
