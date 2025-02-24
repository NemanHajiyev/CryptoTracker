import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function AnchorTemporaryDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setOpen(true)}>
                <GiHamburgerMenu size={30} color='var(--white)' />
            </Button>
            <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
                <div className='drawer-links'>
                    <a href="/">
                        <p className='link'>Home</p>
                    </a>
                    <a href="/compare">
                        <p className='link'>Compare</p>
                    </a>
                    <a href="/dashboard">
                        <p className='link'>Dashboard</p>
                    </a>
                </div>
            </Drawer>
        </div>
    );
}
