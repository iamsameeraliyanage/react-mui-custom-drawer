import { AppBar, Box, Button, Grid, Tab, Tabs, Typography } from '@material-ui/core'
import React from 'react'

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Settings() { 
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
         <Grid container>
                <Grid item xs={12} >
                    <Box p={2}>
                        <Typography>Settings</Typography>
                        <Box>
                            <AppBar position="static">
                                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                    <Tab label="Item One" {...a11yProps(0)} />
                                    <Tab label="Item Two" {...a11yProps(1)} />
                                    <Tab label="Item Three" {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                Item One
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Item Three
                            </TabPanel>
                        </Box>

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

export default Settings