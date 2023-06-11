import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'

function AboutUs() {
  return (
    <div>
         <Grid container>
                <Grid item xs={12} >
                    <Box p={2}>
                        <Typography>About us</Typography>
                        <Box my={4} textAlign="left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum optio inventore fuga quibusdam minus ducimus quo dignissimos itaque. Quo soluta repellendus natus esse ratione tenetur ullam molestias vel explicabo?
                        </Box>
                        <Button variant="contained" color="primary">
                            Open Drawer
                        </Button>
                    </Box>
                </Grid>
            </Grid>
    </div>
  )
}

export default AboutUs