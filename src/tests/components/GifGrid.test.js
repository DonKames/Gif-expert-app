import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas <GifGrid />', () => {
    const category = 'One Punch';

    useFetchGifs.mockReturnValue({
        data: [],
        loading: true
    });

    let wrapper = shallow(<GifGrid category= {category}/>);

    test('Debe Coincidir con Snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
    
    test('Debe mostrar items cuando se cargan imagenes "useFetchGifs"', () => {
        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/asdfasdf/img.jpg',
            title: 'La imagen'
        },
        {
            id: 'A23',
            url: 'http://localhost/asdfasdf/img23.jpg',
            title: 'La imagen 23'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        let wrapper = shallow(<GifGrid category= {category}/>);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})
