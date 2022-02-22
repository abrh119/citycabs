import React from "react";
import { useFormik } from "formik";
import signUpSchema from '../../schemas/signUpSchema'


import {  Box, Button, Form, FormField, Grommet, MaskedInput, RadioButtonGroup, TextInput } from 'grommet';
  
const SignUp = ({ index, value, navigate }) => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            contactNumber: "",
            email:"",
            password: "",
            confirmPass: "",
            type:""
        },
        validationSchema: signUpSchema,
        onSubmit: (val) => {
            console.log(val)
        }
    })

    if (index !== value) return null
    return (
        <div>
            <Grommet>
                <Box >
                <Box >
                    <Form
                    onReset={(event) => console.log(event)}
                    onSubmit={formik.handleSubmit}
                    onValidate={({ errors, infos }) =>
                        console.log('Validate', errors, infos)
                    }
                    >
                    <FormField label="First Name" name="firstName" required>
                        <TextInput name="firstName" onChange={formik.handleChange} />
                    </FormField>

                    <FormField label="Last Name" name="lastName" required>
                        <TextInput name="lastName" onChange={formik.handleChange} />
                    </FormField>

                    <FormField label="Email" name="email" required>
                        <MaskedInput
                        name="email"
                        onChange={formik.handleChange}
                        />
                    </FormField>


                    <FormField
                        label="Password"
                        name="password"
                        htmlFor="password"
                    
                    >
                        <TextInput name="password" id="password" type="password" onChange={formik.handleChange} />
                    </FormField>

                    <FormField
                        label="Confirm Password"
                        name="confirmPass"
                        htmlFor="confirmPass"
                        
                    >
                        <TextInput name="confirmPass" id="password" type="password" onChange={formik.handleChange} />
                    </FormField>
                    
                    <FormField label="Contact Number" name="contactNumber" required>
                        <TextInput name="contactNumber" onChange={formik.handleChange} />
                    </FormField>

                    <FormField name="type">
                        <RadioButtonGroup name="type" options={[{label:'Driver', value: 'driver'}, {label:'Passenger', value: 'passenger'}, {label:'Employee', value: 'employee'}]} onChange={formik.handleChange} />
                    </FormField>
                    
                    
                    <Box direction="row" gap='medium' margin={{ top: 'medium' }}>
                
                        <Button type="reset" label="Reset" />
                        <Button type="submit" label="Submit" primary name="submit" />
                    </Box>
                    </Form>
                </Box>
                </Box>
            </Grommet>
            
        </div>
    )
}

export default SignUp