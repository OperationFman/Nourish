import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import EditRecipe from '../edit-recipe';


test('render component', () => {
    
    render(
        <MemoryRouter>
            <EditRecipe />
        </MemoryRouter>
    );
    expect(true).toBe(true); 
})