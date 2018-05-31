import React from 'react'
import { configure, shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import shallowRenderer from 'react-test-renderer/shallow'
import Adapter from 'enzyme-adapter-react-15';
import Link from './Link'

configure({ adapter: new Adapter() });

describe('Test link component', () => {
  it('shallow link props', () => {
    const wrapper = shallow(<Link link="www.fackbook.com" />);
    expect(wrapper.contains(<a href="www.fackbook.com" target="_blank">www.fackbook.com</a>)).toBe(true);
  })

  it('shallow snapshot', () => {
    const renderer = new shallowRenderer
    const snapshot = renderer.render(<Link link="www.fackbook.com"/>)
    expect(snapshot).toMatchSnapshot()
  })

  it('full snapshot', () => {
    const html = renderer.create(<Link link="www.fackbook.com"/>).toJSON()
    expect(html).toMatchSnapshot()
  })
})