import {render, screen, fireEvent} from '@testing-library/react'
import Create from "./Create";
import userEvent from "@testing-library/user-event";

test("on initial render, the submit button is disabled", async () => {
        render(<Create/>)
        expect(
            await screen.findByRole("button", {name: /submit/i})
        ).toBeDisabled()
    }
)

test("display required when title is empty", async () => {
        render(<Create/>)

        fireEvent.blur(
            screen.getByRole('textbox', {name: /note title/i})
        )

        expect(
            await screen.findByText(/required/i)
        ).toBeTruthy()
    }
)

test("display required when no category selected", async () => {
        render(<Create/>)

        fireEvent.blur(
            screen.getByRole('radio', {name: /money/i})
        )

        expect(
            await screen.findByText(/required/i)
        ).toBeTruthy()
    }
)

test("enable button when title and category are not empty", async () => {
        render(<Create/>)

        userEvent.type(
            screen.getByRole('textbox', {name: /note title/i}),
            'Test'
        )
        userEvent.click(screen.getByRole('radio', {name: /money/i}))

        expect(
            await screen.findByRole("button", {name: /submit/i})
        ).toBeEnabled()
    }
)


