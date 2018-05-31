import { calculate } from './calculate'
import { sub } from './sub'
import * as subTest from './sub'

jest.mock('./sub')

beforeEach(() => {
  sub.mockClear();
});

describe('Test app component', () => {
  it('shallow snapshot', () => {
    // sub.mockReturnValue(4)
    sub.mockImplementation((a) => {
      // if (a === 5) {
      //   return 100
      // }
      return 4
    });
    const actual = calculate(2, 3, 1)
    expect(actual).toEqual(4);
    expect(sub).toBeCalled();
  })
})