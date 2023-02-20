import {render, screen} from "@testing-library/react";
import {Greet} from "./greet";

test('Greet Render Correctly', () => {
    render(<Greet/>);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
});

test('Greet Render with a name props', () => {
    render(<Greet name='Tanzim'/>);
    const textElement = screen.getByText(/hello world tanzim/i);
    expect(textElement).toBeInTheDocument();
});