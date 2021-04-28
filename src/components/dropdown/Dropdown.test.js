import { Dropdown } from './Dropdown';

import {screen, render, userEvent }  from '../../tests';

const title="Selecione seu carro";
const option = ['gol', 'mercedes', 'bmw']

describe('Dropdown', () => {
    it('should start closed', () => {
        render(
            <Dropdown 
                title={title}
                options={option}
                onSelect={()=>{}}
            />,
        );

        expect(screen.queryByText(option[0])).not.toBeInTheDocument();
        expect(screen.queryByText(option[1])).not.toBeInTheDocument();
        expect(screen.queryByText(option[2])).not.toBeInTheDocument();
    })

    it('should show options when open', () => {
        render(
            <Dropdown 
                title={title}
                options={option}
                onSelect={()=>{}}
            />,
        );

        expect(screen.queryByText(option[0])).not.toBeInTheDocument();
        expect(screen.queryByText(option[1])).not.toBeInTheDocument();
        expect(screen.queryByText(option[2])).not.toBeInTheDocument();

        const dropdownButton = screen.getByRole('button', {name: title});

        userEvent.click(dropdownButton)

        expect(screen.getByRole('menuitem', {name: option[0]}),).toBeInTheDocument();
        expect(screen.getByRole('menuitem', {name: option[1]}),).toBeInTheDocument();
        expect(screen.getByRole('menuitem', {name: option[2]}),).toBeInTheDocument();
        
    })
})