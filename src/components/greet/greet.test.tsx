import {render, screen} from "@testing-library/react";
import {Greet} from "./greet";

describe('Greet', () => {
    test('Render Correctly', () => {
        render(<Greet/>);
        const textElement = screen.getByText(/hello world guest/i);
        expect(textElement).toBeInTheDocument();
    });

    test('Render with a name props', () => {
        render(<Greet name='Tanzim'/>);
        const textElement = screen.getByText(/hello world tanzim/i);
        expect(textElement).toBeInTheDocument();
    });
});

// 5,20,000
