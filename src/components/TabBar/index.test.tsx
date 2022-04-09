import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Component from './index'
import toJson from 'enzyme-to-json'
Enzyme.configure({ adapter: new Adapter() })

const Element = (): JSX.Element => (
  <BrowserRouter>
    <Component />
  </BrowserRouter>
)

describe('<TabBar />', () => {
  it('renders without props', () => {
    const tree = shallow(<Element />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
