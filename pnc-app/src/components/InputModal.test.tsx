import React from 'react';
import { render, screen } from '@testing-library/react';
import InputModal from './InputModal';

test('renders InputModal', () => {
    render(<InputModal />);
    expect(screen.getByText('Enter number separated by ,')).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
});