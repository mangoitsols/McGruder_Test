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



describe('FormComp', () => {
  const wrapper = shallowMount(FormComp,{
    data(){
      return{
        customers: {
          firstName: "",
          lastName: "",
          birthDay: "",
        }
      }
    }
  })
console.log("---------------",wrapper.vm.customer)

it('test for firstname', () => {
  expect(wrapper.vm.customer.firstName).toBe(wrapper.vm.customers.firstName);
})

it('test for lastName', () => {
  expect(wrapper.vm.customer.lastName).toBe(wrapper.vm.customers.lastName);
})


it('test for date of birth', () => {
  expect(wrapper.vm.customer.birthDay).toBe(wrapper.vm.customers.birthDay);
})
})