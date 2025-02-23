import React, { useState } from 'react';
import Button from '../Common/Butoon/button';
import './style.css';
import iphone from '../../Assets/iphone.png';
import gradient from '../../Assets/gradient.png';
import { motion } from "framer-motion";
//
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import { FaCopy, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';


const LandingPage = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const projectLink = "ProjectLink";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(projectLink);
        alert("Link Copied")
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


    return (
        <div className="main-flex">
            <div className="info-landing">
                <motion.h1
                    className="heading1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Track Crypto
                </motion.h1>
                <motion.h1
                    className="heading2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.75, duration: 1 }}
                >
                    Real Time.
                </motion.h1>
                <motion.p
                    className="info-text"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Track crypto through a public api in real time. Visit the dashboard to
                    do so!{" "}
                </motion.p>
                <motion.div
                    className="btn-flex"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.25, duration: 0.75 }}
                >
                    <a href="/dashboard">
                        <Button text={"Dashboard"} />
                    </a>

                    <button className='btn-outlined ' onClick={handleOpen} >
                        Share
                    </button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style} color={"black"}>

                            <div className="share-link">
                                <input type="text" value={projectLink} readOnly />
                                <button onClick={copyToClipboard}><FaCopy size={25} color='var(--blue)' /></button>
                            </div>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/">
                                    <FaFacebook size={45} />
                                </a>
                                <a href="https://github.com/NemanHajiyev">
                                    <FaGithub size={45} />
                                </a>
                                <a href="https://www.linkedin.com/in/nemanhajiyev">
                                    <FaLinkedin size={45} />
                                </a>
                            </div>
                        </Box>
                    </Modal>
                </motion.div>
            </div>
            <div className="gradient-div">
                <img src={gradient} className="gradient" />
                <motion.img
                    src={iphone}
                    className="iphone"
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2,
                        repeat: Infinity,
                    }}
                />
            </div>
        </div>
    )
}

export default LandingPage
