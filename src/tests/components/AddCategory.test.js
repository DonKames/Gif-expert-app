import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas <AddCategory />', () => {
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
    test('Debe funcionar Correctamente (SnapShot)', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
