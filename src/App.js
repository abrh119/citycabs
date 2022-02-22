import { Grommet, Button, Heading, Collapsible, Box, ResponsiveContext, Layer } from 'grommet';
import { Notification, FormClose } from 'grommet-icons';
import { theme } from './styles/theme'
import AppBar from './components/appBar';
import React, { useState } from "react";
import SideBar from './components/sideBar';

import Layout from './components/layout/layout'
import store from './redux/store';
import { Provider } from 'react-redux';
import Auth from './screens/login/Auth';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme'
import AuthProvider from './components/auth/authProvider';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} full themeMode="light">
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>My App</Heading>
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
                app body
              </Box>
              <SideBar size={size} showSidebar={showSidebar} setShowSidebar={(bool) => setShowSidebar(bool)} />
            </Box>

          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet >
  );
}

export default App;
