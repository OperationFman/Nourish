import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import EditRecipe from '../edit-recipe';

beforeEach(() => {
    render(<EditRecipe />);
})

afterEach(() => {
    cleanup();
});
