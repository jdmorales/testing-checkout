import { render, screen, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'

import Checkout from '@/components/Checkout'

describe('test on checkout', () => {
  it('should exist inputs necessary in checkout', async() => {
    expect.assertions(4)
    // arrange
    const { debug } = render(Checkout)
    // eslint-disable-next-line testing-library/no-debug
    debug()

    /*
    * Search types: https://testing-library.com/docs/vue-testing-library/cheatsheet#search-types
    */
    // assert: if exist exist the input about coupon
    const couponInput = screen.getByLabelText('Enter a coupon')
    expect(couponInput).toBeTruthy()

    // assert: if exist the submit button and total to pay
    expect(screen.getByRole('button')).toBeTruthy()

    //assert: if exist total to pay
    expect(screen.getByTestId('total-before-discount')).toBeTruthy()

    //assert: if exist total to pay
    expect(screen.getByTestId('total-to-pay')).toBeTruthy()
  })

  it('should be working find the applying of discount', async () => {
    expect.assertions(2)
    // arrange
    render(Checkout, {
      props: { totalToPay: 100 }
    })
    // act
    const couponInput = screen.getByLabelText('Enter a coupon')
    await fireEvent.update(couponInput, 'TESTING_DISCOUNT_25')

    //assert if total before discount show the value correctly
    expect(screen.getByTestId('total-before-discount')).toHaveTextContent('100')

    //assert if discount works fine
    expect(screen.getByTestId('total-to-pay')).toHaveTextContent('75')
  })
})
