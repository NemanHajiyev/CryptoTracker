import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GridCoin from '../Grid/GridCoin';
import ListCoin from '../List/ListCoin';
//
import './style.css'

export default function LabTabs() {

    const [coins, setCoins] = useState([]);

    //Tab context//
    const [value, setValue] = useState('grid');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const style = {
        color: "var(--white)",
        "& .Mui-selected": {
            color: "var(--blue) !important",
        },
        fontFamily: "Inter,sans-serif",
        fontWeight: 600,
        textTransform: "capitalize",
    };
    //Tab context//


    //coins Api 
    const getData = async () => {
        try {
            const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            const data = await response.json();
            setCoins(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getData();
        };
        fetchData();
    }, []);
    //coins Api 

    return (
        <Box >
            <TabContext value={value}>
                <Box>
                    <TabList onChange={handleChange} variant='fullWidth'>
                        <Tab label="Grid" value="grid" sx={style} />
                        <Tab label="List" value="list" sx={style} />
                    </TabList>
                </Box>

                <TabPanel value="grid" sx={style}>
                    <div className='grid-coin' >

                        {
                            coins?.slice(0, 10).map((coin, i) => (
                                <GridCoin key={i} coin={coin} />
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel value="list" sx={style}>
                    <ListCoin coins={coins} />
                </TabPanel>

            </TabContext>
        </Box>
    );
}

