
import React from 'react'

import AppNavigation from './navigation/appNavigation'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import Toast ,{ BaseToast }from 'react-native-toast-message'


const App = () => {
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'green',backgroundColor:'#c99d6b' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 18,
          fontWeight: '600',
          color:'#f5e8e4'
        }}
        text2Style={{
          fontSize: 14,
          fontWeight: '600',
          color:'#f5e8e4'
        }}
      />
    ),
  };

  return (
    <Provider store={Store}>
      <AppNavigation/>
      <Toast config={toastConfig}/>
    </Provider>
  )
}

export default App

