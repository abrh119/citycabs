import { grommet, Box, Tab, Tabs, Text, RadioButton, Button } from 'grommet'
import {} from 'grommet-icons'
import React from 'react'
import SignIn from '../components/auth/signIn'
import SignUp from '../components/auth/signUp'

const Authentication = () => {
    const [selected, setSelected] = React.useState();

  return (

    <Box
            direction="row"
            
            pad="large"
        >
                 <Tabs height='medium' flex='grow' alignSelf='center'>
                    <Tab title='Sign up'>
                         <Box
                            margin='small'
                            pad='small'
                            >
                            <h2>Sign up as a new user</h2>
                            <SignUp />
                        </Box>
      
                    </Tab>
                        <Tab title='Sign in'>
                        <Box
                            margin='small'
                            pad='small'
                        >
                            <h2>Sign In</h2>
                            <SignIn />
                            
                        </Box>
                    </Tab>
                </Tabs>
    </Box>


  )
}

export default Authentication

// <Box align="center" pad="large" gap="large" flex="row">
//                                 <RadioButton
//                                     label="Driver"
//                                     name="name"
//                                     value="option 1"
//                                     checked={selected === 'option 1'}
//                                     onChange={(event) => setSelected(event.target.value)}
//                                 />

//                                 <RadioButton
//                                     label="Passengers"
//                                     name="name"
//                                     value="option 2"
//                                     checked={selected === 'option 2'}
//                                     onChange={(event) => setSelected(event.target.value)}
//                                 />

//                                 <RadioButton
//                                     label="Admin"
//                                     name="name"
//                                     value="option 3"
//                                     checked={selected === 'option 3'}
//                                     onChange={(event) => setSelected(event.target.value)}
//                                 />

//                                 <Button label="clear" onClick={() => setSelected(undefined)} />
//                              </Box>