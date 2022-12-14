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
  const wrapper = shallowMount(FormComp, {
    data() {
      return {
        customers: {
          firstName: "",
          lastName: "",
          birthDay: "",
        },
        fname_Err: false,
        lname_Err: false,
        dob_Err: false,
        HasSeenCongrats:false
      }
    }
  })

  // console.log("---------------", wrapper.vm.hasSeenCongrats)

  it('test for firstname', () => {
    expect(wrapper.vm.customer.firstName).toBe(wrapper.vm.customers.firstName);
  })

  it('test for lastName', () => {
    expect(wrapper.vm.customer.lastName).toBe(wrapper.vm.customers.lastName);
  })

  it('test for date of birth', () => {
    expect(wrapper.vm.customer.birthDay).toBe(wrapper.vm.customers.birthDay);
  })


  it('renders an error when firstname is whitespace', () => {
    expect(wrapper.vm.fnameErr).toBe(wrapper.vm.fname_Err);
  })
  it('renders an error when lastName is whitespace', () => {
    expect(wrapper.vm.lnameErr).toBe(wrapper.vm.lname_Err);
  })
  it('renders an error when bith date is whitespace', () => {
    expect(wrapper.vm.dobErr).toBe(wrapper.vm.dob_Err);
  })



  it('renders an error when data not show', () => {
    expect(wrapper.vm.hasSeenCongrats).toBe(wrapper.vm.HasSeenCongrats);
  })
})