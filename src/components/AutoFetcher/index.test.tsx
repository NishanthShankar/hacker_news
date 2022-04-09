import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Component from './index'
Enzyme.configure({ adapter: new Adapter() })

describe('<AutoFetcher />', () => {
  it('renders without props', () => {
    const tree = shallow(<Component />)
    expect(toJson(tree)).toMatchSnapshot()
  })

  it('renders null with hide props', () => {
    const tree = shallow(<Component hide onVisible={() => {}} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
