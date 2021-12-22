import {screen, render} from "@testing-library/react";
import Note from "components/Note"

describe('Basic', () => {
    it('should render without crashing', () => {
        render(<Note note={{title: 'Hello', category: 'money', details: 'Test'}}/>)
        const titleElement = screen.getByText('Hello')
        const categoryElement = screen.getByText('money')
        const details = screen.getByText('Test')
        expect(titleElement).toBeTruthy()
        expect(categoryElement).toBeTruthy()
        expect(details).toBeTruthy()
    })

})
