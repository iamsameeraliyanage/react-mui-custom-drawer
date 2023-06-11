import { createContext, useContext, useDebugValue, useRef, useState } from 'react';
import RightDrawer from '../component/RightDrawer/RightDrawer';
import { Box } from '@material-ui/core';
import { createPortal } from 'react-dom';

interface DrawerContent {
  title: string;
  actions: React.ReactNode;
  content: React.ReactNode;
}

const useRightDrawer = (props:DrawerContent) => {
    const {ref, openDrawer, closeDrawer, activeDrawer} = useContext(DrawerContext);
    const drawerId = useRef<Symbol| null>(null);

    const handleDrawer=()=>{
        drawerId.current = Symbol();
        openDrawer(drawerId.current);
    }


  const handleCloseDrawer = () => {
    if(drawerId.current){
        closeDrawer(drawerId.current);
    }
  };
  
  const isOpen = drawerId.current ? drawerId.current === activeDrawer : false;
  const drawerInUse = activeDrawer !== null;

const drawerContent = ref.current&&createPortal(<RightDrawer
                                  open={isOpen}
                                  title={props.title}
                                  actions= {props.actions}
                                  onClose={handleCloseDrawer} 
                                />, ref.current);
  useDebugValue({isOpen,drawerInUse});
  return {  drawerContent, handleDrawer, handleCloseDrawer ,isOpen,drawerInUse};
};

export default useRightDrawer;


type RightDrawerContext ={
    ref: React.RefObject<HTMLDivElement>;
    openDrawer: (value:Symbol) => void;
    closeDrawer: (value:Symbol) => void;
    activeDrawer: Symbol | null;
    isActive: boolean;

}

export const DrawerContext = createContext<RightDrawerContext>(null as any);
