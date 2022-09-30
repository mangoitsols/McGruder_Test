import { shallowMount } from '@vue/test-utils';
import { mount } from "@vue/test-utils";
import FormComp from '@/views/Form.vue';




// describe("form.vue",()=>{
//   let wrapper;
//   beforeEach(()=>{
//     wrapper = mount(FormComp,{
//       methods: { customerRegister:()=>{}},
//     })
//   })

//   it("render",()=>{
//     expect(wrapper.exists()).toBe(true)
//   })
// })


test('Form test', async () => {
  const wrapper = shallowMount(FormComp,{
    data(){
      return{
        customer: {
          firstName: "",
          lastName: "",
          middleName: "",
          birthDay: "",
        }
      }
    }
  })

  expect(wrapper.vm.customer.firstName).toBe('');
  expect(wrapper.vm.customer.lastName).toBe('');
  expect(wrapper.vm.customer.birthDay).toBe('');
  expect(wrapper.vm.dobErr).toBe(false);
})
