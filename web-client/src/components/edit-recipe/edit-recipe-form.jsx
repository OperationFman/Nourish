import { useForm } from "react-hook-form";

const CreateRecipe = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input typ='submit' />
        </form>
    )
}

export default CreateRecipe;