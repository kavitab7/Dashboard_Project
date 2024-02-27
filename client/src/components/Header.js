import React from 'react'
import '../styles/header.css'
import { Avatar, IconButton, ListItemAvatar, TextField } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <>
            <nav>
                <div class="left-nav">
                    <div className="search">
                        <SearchIcon /><TextField id="standard-basic" label="search" variant="standard" />
                    </div>
                </div>
                <div class="right-nav">

                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={7} color="primary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={5} color="primary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <ListItemAvatar>
                        <Avatar alt='profile' src="https://randomuser.me/api/portraits/men/11.jpg" />
                    </ListItemAvatar>
                </div>
            </nav>
        </>
    )
}

export default Header