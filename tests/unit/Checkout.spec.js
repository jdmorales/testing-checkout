import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'

import Checkout from '@/components/Checkout'

describe('test on checkout', () => {
  it('should exist inputs necessary in checkout', async() => {
    expect.assertions(1)
    // arrange
    const { debug } = render(Checkout)
    // eslint-disable-next-line testing-library/no-debug
    debug()

    /*
    * Search types: https://testing-library.com/docs/vue-testing-library/cheatsheet#search-types
    */
    // expect if exist exist the input about coupon
    const couponInput = screen.getByLabelText('Enter a coupon')
    expect(couponInput).toBeTruthy()
  })
})
