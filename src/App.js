import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Sidebar, ThemeSettings } from './components';
import { useStateContext } from './contexts/ContextProvider';

import { Area, ColorPicker, Customers, Ecommerce,Editor,Kanban,Line,Orders } from './pages';

import './App.css';
import Navbar from './components/Navbar';
import Employees from './pages/Employees';
import Calendar from './pages/Calendar';

const App = () => {

  const {activeMenu , themeSettings , setThemeSettings,currentColor,currentMode} = useStateContext();
  return (
    <div className={currentMode === 'Dark'? 'dark' : ''}>
      <BrowserRouter>

        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
            <TooltipComponent content="Settings" position='TopCenter'>
              <button type='button' className='text-3xl p-3
              hover:drop-shadow-xl hover:bg-light-gray
              text-white' style={{background:currentColor , borderRadius:'50%'}}
              onClick={() => {setThemeSettings(true)}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {
            activeMenu? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )
          }

          <div className={`dark:bg-main-dark-bg bg-main-bg
              min-h-screen w-full ${activeMenu?'md:ml-72':
              'flex-2'}`}
          >

            <div className='fixed md:static bg-main-bg
            dark:bg-main-dark-bg navbar w-full'>
                <Navbar/>
            </div>

          <div>

          {themeSettings && <ThemeSettings />}

            <Routes>
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />
                <Route path="/orders" element={(<Orders />)} />
                <Route path="/employees" element={(<Employees />)} />
                <Route path="/customers" element={(<Customers />)} />

                <Route path='/calendar' element={<Calendar />}/>
                <Route path='/kanban' element={<Kanban />}/>
                <Route path='/editor' element={<Editor />}/>
                <Route path='/color-picker' element={<ColorPicker />}/>

                <Route path='/line' element={<Line />}/>
                <Route path='/area' element={<Area />}/>
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
