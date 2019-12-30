import { shallowMount } from '@vue/test-utils'
import Top from '../Top.vue'

describe('Top.vue', () => {
  test('renders textContent', () => {
    const wrapper = shallowMount(Top)
    expect(wrapper.vm.$el.textContent).toMatch('TopPage')
  })
})
