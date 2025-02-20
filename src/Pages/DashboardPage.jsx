import React, { useState } from 'react'
import LabTabs from '../Components/Dashboard/Tabs';
import { FaSearch } from 'react-icons/fa';

const DashboardPage = () => {

    const [inputValue, SetInputValue] = useState("")

    return (
        <div>
            <div className='search-div'>
                <div className='search-wrapper'>
                    <FaSearch className='search-icon' />
                    <input
                        value={inputValue}
                        onChange={(e) => SetInputValue(e.target.value)}
                        type="text"
                        id="input"
                        placeholder="Search for a coin..." />
                </div>
            </div>
            <LabTabs inputValue={inputValue} />
        </div>
    )
}

export default DashboardPage
