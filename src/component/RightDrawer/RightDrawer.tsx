/* eslint-disable react/jsx-props-no-spreading */
/*
 * Copyright (c) 2023, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein is strictly forbidden, unless permitted by WSO2 in accordance with
 * the WSO2 Commercial License available at http://wso2.com/licenses.
 * For specific language governing the permissions and limitations under
 * this license, please see the license as well as any agreement you’ve
 * entered into with WSO2 governing the purchase of this software and any
 * associated services.
 */

import { Box, Grow, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import useStyles from './RightDrawer.style';

interface RightDrawerProps {
  title?: React.ReactNode | string;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  onClose?: () => void;
  open?: boolean;
  actions?: React.ReactNode;
  forceExit?: boolean;

}

function RightDrawer(props: RightDrawerProps) {
  const {
    title,
    children,
    size = 'small',
    open = false,
    actions,
    onClose,
  } = props;
  const classes = useStyles();
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <Transition nodeRef={divRef} in={open} timeout={300}>
    {state =>{
        if(state === 'exited'){
          return null;
        }
      return(

<Box
className={clsx(classes[size], {
  [classes.rightDrawer]: true,
  [classes.rightDrawerOpen]: state==='entered',
})}
>
{(title || onClose) && (
  <Box className={classes.rightDrawerHeading}>
    {title && (
      <Box pl={2} className={classes.rightDrawerTitle}>
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
      </Box>
    )}
    {onClose && (
      <Box className={classes.closeButton}>
        <IconButton
          color="default"
          onClick={onClose}
        >
          x
        </IconButton>
      </Box>
    )}
  </Box>
)}

<Box className={classes.rightDrawerBody}>{children}</Box>
{actions && (
  <Box className={classes.rightDrawerFooter}>
    <Box className={classes.rightDrawerActions}>{actions}</Box>
  </Box>
)}
</Box> 
    )
     }}
    </Transition>
  );
}

export default RightDrawer;
