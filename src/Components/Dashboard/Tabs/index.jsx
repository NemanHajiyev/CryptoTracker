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
import NotFound from '../../../NotFound404/404';
//
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Loading from '../../Loader/Loading';
import ToTop from '../../BackToTop/ToTop';
import { getAllCoins } from '../../../Functions/getAllCoins';


export default function LabTabs({ inputValue }) {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //search coin
    const searched = coins.filter((item) => (
        item.name.toLowerCase().includes(inputValue.trim().toLowerCase()) ||
        item.symbol.toLowerCase().includes(inputValue.trim().toLowerCase())
    ))
    //search coin


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

    //coins Api// 
    const getData = async () => {
        await getAllCoins(setCoins)
        setTimeout(() => setIsLoading(false), 1000);
    };

    useEffect(() => {
        const fetchData = async () => {
            await getData();
        }
        fetchData()
    }, []);
    //coins Api 

    //Paginate//
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const startOffset = (page - 1) * itemsPerPage;
    const endOffset = startOffset + itemsPerPage;
    const currentItems = searched.slice(startOffset, endOffset);
    const pageCount = Math.ceil(searched.length / itemsPerPage);

    //Paginate//

    return (
        <>
            {isLoading ? (<Loading />) : (
                <Box>
                    <TabContext value={value}>
                        <Box>
                            <TabList onChange={handleChange} variant='fullWidth'>
                                <Tab label="Grid" value="grid" sx={style} />
                                <Tab label="List" value="list" sx={style} />
                            </TabList>
                        </Box>

                        <TabPanel value="grid" sx={style}>
                            <div className='grid-coin'>
                                {currentItems.length > 0 ? (
                                    currentItems.map((coin, i) => (
                                        <GridCoin key={i} coin={coin} />
                                    ))
                                ) : (
                                    <NotFound />
                                )}

                            </div>

                            <Stack
                                spacing={2}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Pagination
                                    size="large"
                                    count={pageCount}
                                    page={page}
                                    onChange={handlePageChange}
                                    sx={{
                                        "& .MuiPaginationItem-root": {
                                            color: "#333",
                                            backgroundColor: "var(--darkgrey)",
                                        },
                                        "& .Mui-selected": {
                                            backgroundColor: "#1976d2 !important",
                                            color: "#fff !important",
                                        },
                                    }}
                                />
                            </Stack>
                        </TabPanel>

                        <TabPanel value="list" sx={style}>
                            <div className='list-coin'>
                                {
                                    searched.length > 0 ? (
                                        <ListCoin coins={searched} />
                                    ) : (
                                        <NotFound />
                                    )
                                }
                            </div>
                        </TabPanel>
                    </TabContext>
                </Box >
            )
            }
            <ToTop />
        </>
    );
}

