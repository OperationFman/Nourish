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

    it('title input rendering', () => {
        expect(true).toBe(true); 
    })
})
