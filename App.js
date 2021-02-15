import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootSwitch from './src/navigation/RootSwitch';

export const Appcontext = React.createContext({
  loggedIn: false,
  onLogin: () => {},
});
export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Appcontext.Provider
      value={{loggedIn: loggedIn, onLogin: () => setLoggedIn(true)}}>
      <NavigationContainer>
        <RootSwitch />
      </NavigationContainer>
    </Appcontext.Provider>
  );
}
