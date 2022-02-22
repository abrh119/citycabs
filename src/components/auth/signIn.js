import { useFormik } from "formik";
import { Grommet, Form, FormField,TextInput, Box, Button, RadioButtonGroup, MaskedInput } from 'grommet';
import * as Yup from 'yup'
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { useState } from 'react'


const SignIn = ({ index, value, navigate }) => {
    const auth = useAuth()
    const naviagate = useNavigate()
    const [helper, setHelper] = useState("")
    const [selected, setSelected] = useState()


    const loginSchema = Yup.object({
        email: Yup.string().email()
        .required("E-mail is Required"),
        password: Yup.string('Enter A Password')
            .required('Enter A Password')
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: '',
            type:''
        },
        validationSchema: loginSchema,
        onSubmit: (val) => {
            console.log(val)
        }
    })

    // const handleLogin = async (values) => {
    //     const req = { userName: values.username, password: values.password }
    //     const value = await auth.signIn(req)
    //     if (value) {
    //         setHelper("Login Success")
    //         navigate("/protected/CustomerHandling")
    //     } else {
    //         setHelper("Login Failed")
    //     }
    // }

    if (index !== value) return null
    return (
           
           <Grommet>
            <Box >
                <Box >
                    <Form

                        onReset={(event) => console.log(event)}
                        onSubmit = {formik.handleSubmit}
                        onValidate={({ errors, infos }) =>
                            console.log('Validate', errors, infos)
                        }
                        >
                <FormField label="Email" name="email" required>
                    <MaskedInput
                    name="email"
                    onChange={formik.handleChange}
                    mask={[
                        { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                        { fixed: '@' },
                        { regexp: /^[\w]+$/, placeholder: 'my' },
                        { fixed: '.' },
                        { regexp: /^[\w]+$/, placeholder: 'com' },
                    ]}
                />
                </FormField>
                <FormField
                    label="Password"
                    name="password"
                    htmlFor="password"
            
                >
                    <TextInput name="password" id="password" type="password" onChange={formik.handleChange} />
                </FormField>
            
                <FormField name="type">
                    <RadioButtonGroup name="type" options={[{label:'Driver', value: 'driver'}, {label:'Passenger', value: 'passenger'}, {label:'Employee', value: 'employee'}]} onChange={formik.handleChange} />
                </FormField>

                <Box direction="row" gap="medium" margin={{ top: 'medium' }}>
            
                    <Button type="reset" label="Reset" />
                    <Button type="submit" label="Submit" primary />
                </Box>
                </Form>
      </Box>
    </Box>
  </Grommet>
        
    )
}

export default SignIn
