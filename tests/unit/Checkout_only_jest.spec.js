import { mount } from '@vue/test-utils'

import Checkout from '@/components/Checkout'

describe('test on checkout', () => {

  it('should exist inputs necessary in checkout', async() => {
    expect.assertions(5)
    // arrange
    const wrapper = mount(Checkout)
    console.log(wrapper.html())

    // assert with snapshot
    // expect(wrapper.html()).toMatchSnapshot()

    // assert: if exist exist the input about coupon
    const couponInput = wrapper.find('#coupon-input')
    expect(couponInput.exists()).toBeTruthy()

    // assert: if exist the submit button and total to pay
    expect(wrapper.find('button').exists()).toBeTruthy()

    //assert: if exist total to pay
    expect(wrapper.find('#total-before-discount').exists()).toBeTruthy()

    //assert: if exist total to pay
    expect(wrapper.find('#total-to-pay').exists()).toBeTruthy()
  })

  it('should be working fine the applying of discount', async () => {
    expect.assertions(2)
    // arrange
    const wrapper = mount(Checkout, {
      propsData: { totalToPay: 100 }
    })

    //assert if total after discount work with the coupon
    wrapper.vm.coupon = 'TESTING_DISCOUNT_25'
    wrapper.vm.applyingDiscount()

    expect(wrapper.vm.totalAfterDiscount).toStrictEqual(75)


    //assert if total after discount work with the coupon
    wrapper.vm.coupon = 'TESTING_DISCOUNT_60'
    wrapper.vm.applyingDiscount()

    expect(wrapper.vm.totalAfterDiscount).toStrictEqual(40)
  })
})
