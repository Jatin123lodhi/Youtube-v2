 
import { Outlet } from 'react-router-dom';
import {SideBar} from './SideBar';
 
export const Body = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}
