import { useForm } from "react-hook-form";

const EditRecipe = () => {
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
        <input id="image" type="file" {...register('image')} />

        <input defaultValue="" placeholder="Recipe Title" {...register("title", { required: true })} />

        <input id='vegan' type="checkbox" {...register('vegan')} />
        <label htmlFor="vegan"> Vegan </label>

        <input id='lactoseFree' type="checkbox" {...register('lactoseFree')}  />
        <label htmlFor="lactoseFree"> Lactose Free </label>

      <input type="submit" />
    </form>
  );
};

export default EditRecipe;
