import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditRecipe from "./edit-recipe";
import { act } from "react-dom/test-utils";

describe("EditRecipe", () => {

    it.todo('calls onSubmit function', async () => {
        // given, when, then
        const mockOnSubmit = jest.fn();
        const {getByLabeltext, getByRole} = render(<EditRecipe onSubmit={mockOnSubmit} />)
        await act(async () => {
            fireEvent.change(getByLabeltext("title"), {target: {value: "test@email.com"}})
        })

        await act(async () => {
            fireEvent.click(getByRole("button"))
        })

        expect(mockOnSubmit).toHaveBeenCalled()
    })
});