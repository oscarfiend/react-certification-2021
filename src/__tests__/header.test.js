import {render,screen} from '@testing-library/react'
import React from 'react';

import Header from '../components/Header'
import VideoContext from '../context/videoContext';

describe('Header component tests',()=>{
    let realUseContext;
    let useContextMock;

    beforeEach(() => {
        render(<VideoContext><Header/></VideoContext>)
    });

    test('should containt a toggle button',()=>{
        
        const toggle=screen.getByTestId(/toggle_checkbox/i)
        expect(toggle).toBeInTheDocument()
    })

    test('Toggle button should be checkbox type',()=>{
        const toggle=screen.getByTestId(/toggle_checkbox/i)
        expect(toggle).toHaveAttribute('type', 'checkbox')
    })

    test('Toggle button should containt a label',()=>{
        const toggle=screen.queryByLabelText(/Light Mode/i)
        expect(toggle).toBeInTheDocument()
    })

    test('should containt a login component',()=>{
        const login=screen.getByTestId(/avatar_login/i)
        expect(login).toBeInTheDocument()
    })
    
    test('should containt a search form',()=>{
        const search=screen.getByTestId(/search_form/i)
        expect(search).toBeInTheDocument()
    })

    test('search field should be disabled',()=>{
        const search=screen.getByTestId(/search_field/i)
        expect(search).not.toHaveAttribute('disabled')
    })
    
    test('should containt a hamburguer menu',()=>{
        // render(<Header/>)
        const menu=screen.getByTestId(/hamburguerMenu/i)
        expect(menu).toBeInTheDocument()
    })

    test('menu should be type checkbox',()=>{
        // render(<Header/>)
        const menu=screen.getByTestId(/hamburguerMenu/i)
        expect(menu).toHaveAttribute('type', 'checkbox')
    })
})