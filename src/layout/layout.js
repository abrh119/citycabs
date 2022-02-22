import { useState } from "react";
import { Box, Heading, Button } from 'grommet';
import {AppsRounded} from 'grommet-icons'
import AppBar from '../components/appBar';
import SideBar from '../components/sideBar';

  
export default function Layout({ children, size }) {
const [showSidebar, setShowSidebar] = useState(false);


    return (
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>My App</Heading>
              <Button
                icon={<AppsRounded />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
                {children}
              </Box>
              <SideBar size={size} showSidebar={showSidebar} setShowSidebar={(bool) => setShowSidebar(bool)} />
            </Box>

          </Box>
        
    );
}
