import { useForm, useFieldArray } from "react-hook-form";

import "./recipe.css";

const Recipe = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
        ingredients: [{ name: "" }],
        preparation: [{ name: "" }]
    }
  });

  const { fields: ingredientsFields, append: ingredientsAppend, remove: ingredientsRemove} = useFieldArray({ control, name: "ingredients" });
  const { fields: preparationFields, append: preparationAppend, remove: preparationRemove} = useFieldArray({ control, name: "preparation" });

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        
        <ul>
            {ingredientsFields.map((item, index) => {
            return (
                <li key={item.id}>
                <input {...register(`ingredients.${index}.name`, { required: true })} />
                <button type="button" onClick={() => ingredientsRemove(index)}> Delete </button>
                </li>
            );
            })}
            <button type="button" onClick={() => { ingredientsAppend({ name: "" }) }}> Add </button>
        </ul>
        
        <ul>
            {preparationFields.map((item, index) => {
            return (
                <li key={item.id}>
                <input {...register(`preparation.${index}.name`, { required: true })} />
                <button type="button" onClick={() => preparationRemove(index)}> Delete </button>
                </li>
            );
            })}
            <button type="button" onClick={() => { preparationAppend({ name: "" }) }}> Add </button>
        </ul>

      <input type="submit" />
    </form>
  );
}

export default Recipe;
