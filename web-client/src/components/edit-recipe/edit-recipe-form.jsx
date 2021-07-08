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
        <input defaultValue="" {...register("title", { required: true })} />

        <input type="checkbox" {...register('vegan')}  />
        <label htmlFor="vegan"> Vegan</label>


        {/* <input name="lactoseFree" type="checkbox" {...register('lactoseFree')} id="vegan" />
        <label htmlFor="vegan" className="form-check-label">Vegan / Vegetarian</label> */}

      <input type="submit" />
    </form>
  );
};

export default EditRecipe;
