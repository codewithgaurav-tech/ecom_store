import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Products from './Products';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ProductStore() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section id="selling-products" className="product-store bg-light-grey padding-large">
      <Container>
        <div className="section-header">
          <Typography variant="h2" className="section-title">
            Best selling products
          </Typography>
        </div>
        <Box sx={{ maxWidth: { xs: 320, sm: 1200 }, bgcolor: 'background.paper' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="Product Categories"
          >
            <Tab label="All" />
            <Tab label="Shoes" />
            <Tab label="Tshirts" />
            <Tab label="Pants" />
            <Tab label="Hoodie" />
            <Tab label="Outer" />
            <Tab label="Jackets" />
            <Tab label="Accessories" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {/* Content for "All" tab */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* Content for "Shoes" tab */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* Content for "Tshirts" tab */}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {/* Content for "Pants" tab */}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {/* Content for "Hoodie" tab */}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {/* Content for "Outer" tab */}
        </TabPanel>
        <TabPanel value={value} index={6}>
          {/* Content for "Jackets" tab */}
        </TabPanel>
        <TabPanel value={value} index={7}>
          {/* Content for "Accessories" tab */}
        </TabPanel>
        <Products />
      </Container>
    </section>
  );
}

