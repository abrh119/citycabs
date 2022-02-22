import * as Yup from 'yup'

let minDate = new Date()
let maxDate = new Date()
minDate.setFullYear(minDate.getFullYear() - 70, 0, 1)
maxDate.setFullYear(maxDate.getFullYear() - 18, 0, 1)


const signUpSchema = Yup.object({
    firstName: Yup.string('Enter Your Name')
        .min(2, 'Too Short!')
        .max(60, 'Too Long!')
        .required('Required'),
    lastName: Yup.string('Enter Your Name')
        .min(2, 'Too Short!')
        .max(60, 'Too Long!')
        .required('Required'),
    contactNumber: Yup.string('Enter Your Date Of Contact Number')
        .min(12, "Enter a Valid Number")
        .max(12, "Enter a Valid Number")
        .required("Phone Number is Required"),

    email: Yup.string().email()
        .required("E-mail is Required"),

    password: Yup.string('Enter A Password')
        .min(7, "Too Short")
        .required("Enter A Password"),

    confirmPass: Yup.string('Enter A Same Password')
        .oneOf([Yup.ref("password"), null], "Passwords Must Match")
        .required('Required Field & Passwords Must Match'),
    
    type: Yup.string('Pick one of the types')
})

export default signUpSchema