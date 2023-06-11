import { Box } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import RightDrawer from '../RightDrawer/RightDrawer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from '../../pages/AboutUs';
import Home from '../../pages/Home';
import Settings from '../../pages/Settings';
import useRightDrawer, { DrawerContext } from '../../hooks/useRightDrawer';

function MainLayout() {
    const [openDrawer, setOpenDrawer] = useState<Symbol|null>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    // const { isOpen, drawerContent, closeDrawer } = useRightDrawer();
    
    // console.log(isOpen, drawerContent, closeDrawer);

    const rightDrawerRef = useRef<any>();
  return (
    <div style={{
        height:'100%',
        display:"flex",
        width:"100%",
    }} ref={(v)=>{
        rightDrawerRef.current = v;
        setIsActive(true);
    }}>
        <DrawerContext.Provider value={{
            ref:rightDrawerRef,
            openDrawer: setOpenDrawer,
            closeDrawer: ()=>setOpenDrawer(null),
            activeDrawer: openDrawer,
            isActive: isActive
        }}>
            <Box flexGrow={1} border="5px solid gray">
                <Router>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about">About Us</Link>
                            </li>
                            <li>
                            <Link to="/settings">Settings</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />  
                        <Route path="/settings" element={<Settings />} />  
                    </Routes>
                </Router>
            </Box>
        </DrawerContext.Provider>
{/* {drawerContent} */}
    </div>
  )
}

export default MainLayout

