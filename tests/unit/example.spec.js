import { render, screen } from '@testing-library/vue'

import HelloWorld from '@/components/HelloWorld.vue'

describe('hello world vue', () => {
  it('renders props.msg when passed', () => {
    expect.assertions(1)
    const msg = 'new message'
    render(HelloWorld, { props: { msg }})
    expect(screen.getByText(msg)).toBeTruthy()
  })
})
