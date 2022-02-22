import React from 'react';

import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  MaskedInput,
  RadioButtonGroup,
  TextInput,
} from 'grommet';

const test = () => (
  <Grommet>
    <Box >
      <Box >
        <Form
          onReset={(event) => console.log(event)}
          onSubmit={({ value }) => console.log('Submit', value)}
          onValidate={({ errors, infos }) =>
            console.log('Validate', errors, infos)
          }
        >
          <FormField label="First Name" name="first-name" required>
            <TextInput name="fname" />
          </FormField>

          <FormField label="Last Name" name="last-name" required>
            <TextInput name="lname" />
          </FormField>

          <FormField label="Email" name="email" required>
            <MaskedInput
              name="email"
            />
          </FormField>
          <FormField
            label="Password"
            name="password"
            htmlFor="password"
          >
            <TextInput name="password" id="password" type="password" />
          </FormField>

          <FormField
            label="Confirm Password"
            name="confirm-password"
            htmlFor="password"
          >
            <TextInput name="password" id="password" type="password" />
          </FormField>
         
          <FormField label="Contact Number" name="contact" required>
            <TextInput name="contact" />
          </FormField>

          <FormField name="mode">
            <RadioButtonGroup name="mode" options={['Driver', 'Passenger', 'Admin']} />
          </FormField>
          
          
          <Box direction="row" gap='medium' margin={{ top: 'medium' }}>
     
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  </Grommet>
);

export default test



