import { shallow } from 'enzyme';

import { GifGridItem } from "../../components/GifGridItem";


describe('Pruebas GifGridItem', () => {
    const title = 'Titulo';
    const url = 'https://media1.giphy.com/media/l0HlW7qQ7zqQkQq0c/giphy.gif';
    let wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener un <p></p> con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });
    
    test('Debe los datos de la img igual al de las props', () => {
        const img = wrapper.find('img');
        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );
    });

    test('Debe tener animate__backInUp', () => {
        const div = wrapper.find('div');
        //expect( div.prop('className').indexOf('animate__backInUp') ).toBeGreaterThanOrEqual(0); el que hice yo
        //expect( div.prop( 'className' ).includes( 'animate__backInUp' ) ).toBe( true ); El que hizo el profe
        expect( div.hasClass( 'animate__backInUp' ) ).toBe( true );
        
    });
    
})
