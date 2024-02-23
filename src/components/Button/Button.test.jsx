import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { Button } from "./Button";


const setup = () => {
    return {
      user: userEvent.setup(),
      handleOnClick: jest.fn()
    }
}

describe('Button', () => {
    it('should invoke onClick function', async () => {
        const { user, handleOnClick } = setup()
        render(<Button onClick={handleOnClick}>Create</Button>)

        await user.click(screen.getByRole('button', {name: "Create"}))

        expect(handleOnClick).toHaveBeenCalled();
    });

    it('should not invoke onClick function', () => {
        const { handleOnClick } = setup()
        render(<Button onClick={handleOnClick}>Create</Button>)

        expect(handleOnClick).not.toHaveBeenCalled();
    });
});
