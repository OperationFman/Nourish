import { useForm, useFieldArray } from "react-hook-form";

const IngredientList = () => {
    const { control, register } = useForm();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "task", // unique name for your Field Array
        // keyName: "id", default to "id", you can change the key name
  });

  return (
    <>
        {fields.map((field, index) => {
        return <input
            key={field.id} {...register(`task.${index}.value`)} defaultValue={field.value} />
        })}
    </>
  );
}

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
        <label htmlFor="image"> Upload Image </label>
        <input id="image" type="file" {...register('image')} />

        <label htmlFor="title"> Choose a Title </label>
        <input id="title" defaultValue="" placeholder="Recipe Title" {...register("title", { required: true })} />

        <label htmlFor="ingredients"> Add an Ingredient (inc. Amount) </label>
        <IngredientList />

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
