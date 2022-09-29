
<template>

    <div id="app">
        <section class="register" v-if="!hasSeenCongrats">

            <transition name="slide-fade">
                <section v-show="step === 1">
                    <form class="form" method="post" action="#" @submit.prevent="next">
                        <div class="form-group">
                            <label>First Name : </label>
                            <input type="text" v-model="customer.firstName" autocomplete='customer.firstName'
                                placeholder="First name" @keyup="fnameValueFn()" />
                            <div v-if="fnameErr" class="errCls">please fill first name</div>
                        </div>
                        <div class="form-group">
                            <label>Last Name : </label>
                            <input type="text" v-model="customer.lastName" autocomplete='customer.lastName'
                                placeholder="Last name" @keyup="lnameValueFn()" />
                            <div v-if="lnameErr" class="errCls">please fill last name</div>
                        </div>
                        <div class="cta" data-style="see-through" data-alignment="right" data-text-color="custom">
                            <p class="cta-color">
                                <span class="link_wrap">
                                    <input type="submit" value="Next" class="link_text" />
                                    <span class="arrow-next"></span>
                                </span>
                            </p>
                        </div>
                    </form>
                </section>
            </transition>
            <!-- ------------------------------------------- -->
            <transition name="slide-fade">
                <section v-show="step === 2">
                    <form class="form" method="post" action="#" @submit.prevent="next">
                        <input type="text" v-model="customer.middleName" autocomplete="customer.middleName"
                            placeholder="Enter Middle name" />

                        <div class="form-group cta-step">
                            <div class="cta">
                                <p class="cta-color">
                                    <span class="text"></span>
                                    <span class="link_wrap">
                                        <input type="submit" @click.prevent="prev()" value="Prev" class="link_text" />
                                        <input type="submit" value="Next" class="link_text" />
                                        <span class="arrow-next"></span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </form>
                </section>
            </transition>
            <transition name="slide-fade">
                <section v-show="step === 3">
                    <form class="form" action="#" @submit.prevent="customerRegister">
                        <div class="form-group">
                            <input type="date" v-model="customer.birthDay" placeholder="Birthday ('day'/'month'/'year')"
                                @change="dateValueFn()" />
                        </div>
                        <div v-if="dobErr" class="errCls">Please insert date of birth</div>
                        <div class="register-btn">
                            <input type="submit" @click.prevent="prev()" value="Prev" class="link_text" />
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </section>
            </transition>
        </section>


        <section class="congrats register" v-if="hasSeenCongrats">
            <div class="register-icon">
            </div>
            <h1 class="congrats-title">Thank you !</h1>
            <p class="congrats-subtitle">
                You have successfully created your account
                <br /><br />
                <!-- <strong>firstName:</strong> {{ customer.firstName}}<br />
                <strong>lastName:</strong> {{ customer.lastName }}<br />
                <strong>middleName:</strong> {{ customer.middleName }}<br />
                <strong>date of birth:</strong> {{ customer.birthDay }} -->
            </p>
            <table algin="center">
                <tr>
                    <td>First Name</td>
                    <td>{{ customer.firstName }}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{{ customer.lastName }}</td>
                </tr>
                <tr>
                    <td>Middle Name</td>
                    <td>{{ customer.middleName }}</td>
                </tr>
                <tr>
                    <td>Date of birth</td>
                    <td>{{ customer.birthDay }}</td>
                </tr>
            </table>
        </section>

    </div>
</template>

<script>
import { createToaster } from "@meforma/vue-toaster";
export default {
    name: 'FormComp',
    data() {
        return {
            steps: {},
            step: 1,
            customer: {
                firstName: "",
                lastName: "",
                middleName: "",
                birthDay: "",
            },
            fnameErr: false,
            lnameErr: false,
            dobErr: false,
            text: " successfully Register",
            hasSeenCongrats: false,
            tempCustomer: {
                firstName: "",
                lastName: "",
                birthDay: "",
            },
        };
    },
    methods: {
        prev() {
            this.step--;
        },

        next() {
            if (!this.customer.firstName) {
                this.fnameErr = true
            }
            if (!this.customer.lastName) {
                this.lnameErr = true
            }
            else {
                this.step++;
                this.fnameErr = false
                this.lnameErr = false
            }

        },
        fnameValueFn() {
            this.fnameErr = false
        },
        lnameValueFn() {
            this.lnameErr = false
        },

        customerRegister: function () {
            if (!this.customer.birthDay) {
                this.dobErr = true
            } else {
                this.hasSeenCongrats = true
                this.dobErr = false

                const toaster = createToaster({ /* options */ });
                toaster.success(this.text, {
                    position: "top-right",
                });
                return true;
            }
           

        },
        dateValueFn() {
            this.dobErr = false
        },
    }

};
</script>
<style scoped>
section.register {
    width: 500px;
    height: auto;
    /* position: absolute; */
    /* left: 50%; */
    /* top: 50%; */
    /* transform: translate(-50%, -50%); */
    

    margin: 0 auto;

    background: #fff;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
    padding: 25px;
    box-sizing: border-box;
}


section.register label {
    font-size: 16px;
    font-weight: 600;
    color: #000;
}

section.register input[type="text"], section.register  input[type="date"] {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    margin: 10px 0;
    box-sizing: border-box;
}

p.cta-color {
    text-align: right;
}



section.register section {
    width: 100%;
}

section.register .form-group {
    text-align: left;
    margin-bottom: 15px;
}

.register-btn {
    text-align: right;
}

section.register>div {
    text-align: left;
}

span.link_wrap {
    margin: 0;
}

span.link_wrap span {
    margin: 0;
}

span.link_wrap input, .register-btn  input {
    width: 100px;
    height: 45px;
    background: #000;
    color: #fff;
    border: none;
    font-size: 18px;
}

input {
    padding: 4px 8px;
    margin: 4px;
}

span {
    font-size: 18px;
    margin: 4px;
    font-weight: 500;
}

.submit {
    font-size: 15px;
    color: #fff;
    background: #222;
    padding: 6px 12px;
    border: none;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 5px;
}

.errCls {
    color: red;
    font-weight: 700;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: left;
}
table{
    margin-left: 8rem;
}
</style>