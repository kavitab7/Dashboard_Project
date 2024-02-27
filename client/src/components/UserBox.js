import React from 'react'
import { studentData } from './userData.js'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
const UserBox = () => {
    return (
        <div className='student-box'>
            <h3>Top Students</h3>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {studentData.map((student, index) => (
                    <React.Fragment key={index}>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt='profile' src={student.photoUrl} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={student.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >

                                        </Typography>
                                        {student.email}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>
        </div>
    )
}

export default UserBox