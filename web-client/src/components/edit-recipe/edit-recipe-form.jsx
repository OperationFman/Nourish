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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="" {...register("example", { required: true })} />

      <input type="submit" />
    </form>
  );
};

export default EditRecipe;
