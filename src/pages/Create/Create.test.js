import {render, screen} from '@testing-library/react'
import Create from "./Create";

test("on initial render, the submit button is disabled",  async () => {
        render(<Create/>)
        expect(
            await screen.findByRole("button", {name: /submit/i})
        ).toBeDisabled()
    }
)
