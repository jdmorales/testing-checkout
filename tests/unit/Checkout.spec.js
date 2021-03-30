import { render, screen } from '@testing-library/vue'

import Checkout from '@/components/Checkout'

describe('test on checkout', () => {
  it('should exist inputs necessary in checkout', () => {
    expect.assertions(1)
    // arrange
    const { debug } = render(Checkout)
    debug()
    /*
    * Search types: https://testing-library.com/docs/vue-testing-library/cheatsheet#search-types
    */
    // expect if exist exist the input about coupon
    expect(screen.getByLabelText('coupon-input')).toBeTruthy()
  })
})
