import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, useNavigate} from 'react-router-dom'
import { MessageList } from './Pages/Message-List'
import { EditMessage } from './Pages/Edit-message'
import { CreateMessage } from './Pages/Create-message'
import { MainLayout } from './layout/main-layout'
import { Login } from './Pages/Login'

function App() {  
 
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/app' element={<MainLayout />}>
          <Route index element={<MessageList/>} />
          <Route path='edit' element={<EditMessage />}/>
          <Route path='create' element={<CreateMessage />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
