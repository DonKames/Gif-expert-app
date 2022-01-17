import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";
//import AddCategory from "../components/AddCategory";

describe('Pruebas <GifExpertApp />', () => {
    let wrapper = shallow(<GifExpertApp />);

    beforeEach(() => {
        wrapper = shallow(<GifExpertApp />);
    });

    test('Debe cargar el componente correctamente ', () => {
        //console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
    })
    
})
