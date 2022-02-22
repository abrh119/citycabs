import { Grommet, ResponsiveContext } from 'grommet';
import { theme } from './styles/theme'
import Layout from './layout/layout'
import Authentication from './pages/Authentication'
// import store from './redux/store';
// import { Provider } from 'react-redux';
// import AuthProvider from './components/auth/authProvider';
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    

      <Grommet theme={theme} full themeMode="light">
          <Routes>

              <Route path="/" element={<Authentication />} />
              
                    {/* <ResponsiveContext.Consumer>
                          {size => ( 
                            <Layout size={size}>

                            </Layout>
                          )}
                    </ResponsiveContext.Consumer> */}
          </Routes>
      </Grommet >

  
    
  );
  
}

export default App;
