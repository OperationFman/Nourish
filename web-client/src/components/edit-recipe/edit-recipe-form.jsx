import { useForm } from "react-hook-form";

const CreateRecipe = () => {
    const { handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        </form>
    )
}

export default CreateRecipe;