import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useRightDrawer from '../hooks/useRightDrawer';

function Home() {
    const drawer1 = useRightDrawer({
        title: 'Drawer Title1',
        actions: <Box>test</Box>,
        content: <div>Drawer Content1</div>
    });
    const drawer2 = useRightDrawer({
        title: 'Drawer Title2',
        actions: <Box>test</Box>,
        content: <div>Drawer Content2</div>
    })
  return (
    <div>
        {drawer1.drawerContent}
        {drawer2.drawerContent}
         <Grid container>
                <Grid item xs={12} >
                    <Box p={2}>
                        <Typography>Home</Typography>
                        <Box my={4} textAlign="left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum optio inventore fuga quibusdam minus ducimus quo dignissimos itaque. Quo soluta repellendus natus esse ratione tenetur ullam molestias vel explicabo?
                        </Box>
                        <Button variant="contained" color="primary" onClick={drawer1.handleDrawer}>
                            Open Drawer1
                        </Button>
                        <Button variant="contained" color="primary" onClick={drawer2.handleDrawer}>
                            Open Drawer2
                        </Button>
                    </Box>
                </Grid>
            </Grid>
    </div>
  )
}

export default Home