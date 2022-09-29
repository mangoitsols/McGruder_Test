import { shallowMount } from '@vue/test-utils';
import { mount } from "@vue/test-utils";
import FormComp from '@/views/Form.vue';


test('submit form testing', async () => {
  const wrapper = mount(FormComp)

  await wrapper.setData({customer:{
    firstName:'firstname',
    lastName:'lastname',
    birthDay:'2022-09-14'
  },
  dobErr:false
})

  expect(wrapper.vm.customer.firstName).toBe('firstname')
  expect(wrapper.vm.customer.lastName).toBe('lastname');
  expect(wrapper.vm.customer.birthDay ).toBe('2022-09-14');
  expect(wrapper.vm.dobErr ).toBe(false);
})


