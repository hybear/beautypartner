import CardProduct from './index'

const fakeItem = {
    id: 'ABC123',
    title: 'A cool product',
    listPrice: 5000,
    bestPrice: 5000,
    description: "this is really cool",
    image: 'parfum.jpg',
    largeImage: 'largeparfum.jpg'
}

describe('<Item/>', () => {
    it('renders and displays Price properly', ()=>{
        const wrapper = shallow(<CardProduct item={fakeItem} />);
        const PriceTag = wrapper.find('styles__PriceTag');
        expect(PriceTag.children().text()).toBe('$50');
    })
    it('renders and displays Image properly', ()=>{
        const wrapper = shallow(<CardProduct item={fakeItem} />);
        const img = wrapper.find('styles__Image')
        expect(img.props().src).toBe(fakeItem.image);
    })
})

describe('<Item/>', () => {
    it('renders and matches the snapshot', () => {
        const wrapper = shallow(<CardProduct item={fakeItem} />);
        expect(wrapper).toMatchSnapshot();
    })
})