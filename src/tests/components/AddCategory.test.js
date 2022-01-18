import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = { setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
    });
    test('Debe funcionar Correctamente (SnapShot)', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });
        //console.log(input.prop('value'));
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( value );
    })
    
    test('No debe postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault() {}});
        
        expect( setCategories ).not.toHaveBeenCalled();
        
    })
    
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find( 'form' ).simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes( 1 );
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );
        expect( wrapper.find( 'input' ).prop('value') ).toBe('');
    });
})
