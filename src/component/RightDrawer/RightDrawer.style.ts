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
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rightDrawer: {
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      borderLeft: `1px solid ${theme.palette.grey[100]}`,
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s',
      overflow: 'hidden',
    },
    rightDrawerOpen: {
      '&$small': {
        flex: `0 0 ${theme.spacing(40)}px`,
        MsFlex: `0 0 ${theme.spacing(40)}px`,
        maxWidth: theme.spacing(40),
      },
      '&$medium': {
        flex: `0 0 ${theme.spacing(50)}px`,
        MsFlex: `0 0 ${theme.spacing(50)}px`,
        maxWidth: theme.spacing(50),
      },
      '&$large': {
        flex: `0 0 ${theme.spacing(60)}px`,
        MsFlex: `0 0 ${theme.spacing(60)}px`,
        maxWidth: theme.spacing(60),
      },
    },
    small: {
      flex: `0 0 0`,
      MsFlex: `0 0 0`,
      maxWidth: 0,
    },
    medium: {
      flex: `0 0 0`,
      MsFlex: `0 0 0`,
      maxWidth: 0,
    },
    large: {
      flex: `0 0 0`,
      MsFlex: `0 0 0`,
      maxWidth: 0,
    },
    rightDrawerHeading: {
      display: 'flex',
      alignItems: 'center',
      height: theme.spacing(6.5),
      maxHeight: theme.spacing(6.5),
      padding: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.grey[100]}}`,
    },
    rightDrawerTitle: {
      marginRight: theme.spacing(1),
      padding: theme.spacing(1),
    },
    closeButton: {
      marginLeft: 'auto',
    },
    rightDrawerBody: {
      flexGrow: 1,
      padding: theme.spacing(2),
      overflowY: 'auto',
    },
    rightDrawerFooter: {},
    rightDrawerActions: {
      padding: theme.spacing(2),
    },
  })
);
export default useStyles;
