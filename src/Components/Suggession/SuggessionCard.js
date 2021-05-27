import { Avatar, Skeleton, Popover, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Suggession.module.css'


export function ProfileSuggessionCard({ profiles }) {
    return (
        profiles ?
            profiles.slice(0, 4).map(user => (
                <Popover placement="right" trigger="hover" content={
                    <div style={{padding:"5px 0px"}}  >
                            <p><Button style={{ backgroundColor: '#6C63FF', color: 'white', borderRadius: '7px', width: '100%' }}>
                                Add Friend
                            </Button></p>
                        
                        <Link to={{ pathname: "/profile/" + user.slug }}>
                            <Button style={{ border: ' 2px solid #6C63FF', color: 'black', borderRadius: '7px', width: '100%' }}>View Profile</Button>
                        </Link>
                    </div>
                }>
                    <div className={classes.p}>
                        <div className={classes.r}>
                            <div className={classes.we}>
                                <Avatar size="large" src={user.image} />
                            </div>
                            <div className={classes.q}>
                                <h1>{user.first_name} {user.last_name}</h1>
                                <h5>@{user.username}</h5>
                            </div>
                        </div>
                    </div>
                </Popover>
            ))
            :
            <React.Fragment>
                <Skeleton active avatar paragraph={{ rows: 2 }} />
                <Skeleton active avatar paragraph={{ rows: 2 }} />
            </React.Fragment>

    )
}