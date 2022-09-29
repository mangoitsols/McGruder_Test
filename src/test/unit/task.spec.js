
import {mount} from '@vue/test-utils';
import {customerRegister} from '../../components/Form.vue'

test('form testing', () => { 
 

  expect(customerRegister('2022-09-22')).toBe(true)
 })
