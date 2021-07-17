import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import EditRecipe from '../edit-recipe';


describe('form elements initializing', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <EditRecipe />
            </MemoryRouter>
        );
    })

    afterEach(() => {
        cleanup();
    });

    it('title input renders correctly', () => {
        const titleElement = screen.getByTestId('title');

        expect(titleElement).toBeTruthy()
        expect(titleElement.value).toBe("")
    });

    // Input field arrays

    it('hours input renders correctly', () => {
        const hoursElement = screen.getByTestId('hours');

        expect(hoursElement).toBeTruthy()
        expect(hoursElement.value).toBe("")
        expect(hoursElement.placeholder).toBe("0")
    })

    it('minutes input renders correctly', () => {
        const minutesElement = screen.getByTestId('minutes');

        expect(minutesElement).toBeTruthy()
        expect(minutesElement.value).toBe("")
        expect(minutesElement.placeholder).toBe("30")
    })

    it('cost input renders correctly', () => {
        const costElement = screen.getByTestId('cost');

        expect(costElement).toBeTruthy()
        expect(costElement.value).toBe("")
        expect(costElement.placeholder).toBe("5.00")
    })

    it('vegan checkbox renders correctly', () => {
        const veganElement = screen.getByTestId('vegan');

        expect(veganElement).toBeTruthy()
    })

    it('lactose checkbox renders correctly', () => {
        const lactoseElement = screen.getByTestId('lactose');

        expect(lactoseElement).toBeTruthy()
    })

    it('image input renders correctly', () => {
        const imageElement = screen.getByTestId('image');

        expect(imageElement).toBeTruthy()
    })
})
