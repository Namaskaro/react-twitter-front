import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import { Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';

import { useHomeStyles } from '../pages/Home/theme'
import { Hidden } from '@material-ui/core';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';


interface SidebarProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Sidebar: React.FC<SidebarProps> = ({classes}): React.ReactElement => {
       const [visibleAddTweet,setSetVisibleAddTweet] = React.useState<boolean>(false)
       const handleClickOpenAddTweet = () => {
           setSetVisibleAddTweet(true)
       }
       const onCloseAddTweet = () => {
           setSetVisibleAddTweet(false)
       }
    return (
        
                <ul className={classes.sideMenuList}>
                    <li className={classes.sideMenuListItem}>
                      <div>
                      <IconButton className={classes.logo}>
                        <TwitterIcon color="primary" className={classes.logoIcon}/>
                       </IconButton>
                       </div>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <div>
                        <SearchIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography  variant="h6" className={classes.sideMenuListItemLabel}>
                            Поиск
                        </Typography>
                        </Hidden>
                        </div>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <div>
                        <NotificationsNoneOutlinedIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography  variant="h6" className={classes.sideMenuListItemLabel}>
                            Уведомления
                        </Typography>
                        </Hidden>
                        </div>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <div>
                        <MailOutlineOutlinedIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography  variant="h6" className={classes.sideMenuListItemLabel}>
                            Сообщения
                        </Typography>
                        </Hidden>
                        </div>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <div>
                        <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography  variant="h6" className={classes.sideMenuListItemLabel}>
                            Закладки
                        </Typography>
                        </Hidden>
                        </div>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <div>
                        <FormatAlignJustifyIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography  variant="h6" className={classes.sideMenuListItemLabel}>
                            Списки
                        </Typography>
                        </Hidden>
                        </div>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <div>
                        <PersonOutlineIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography  variant="h6" className={classes.sideMenuListItemLabel}>
                            Профиль
                        </Typography>
                        </Hidden>
                        </div>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <div>
                        <MoreHorizIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                        <Typography  variant="h6" className={classes.sideMenuListItemLabel}>
                            Еще
                        </Typography>
                        </Hidden>
                        </div>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <Button 
                        onClick={handleClickOpenAddTweet}
                        variant="contained" 
                        color="primary" 
                        className={classes.sideMenuTweetButton} 
                        fullWidth>
                            <Hidden smDown>Твитнуть</Hidden>
                            <Hidden mdUp>
                            <CreateIcon/>
                            </Hidden>
                        </Button>
                        <ModalBlock title="" visible={visibleAddTweet} onClose={onCloseAddTweet}>
                            <div style={{width: 550}}>
                             <AddTweetForm 
                             classes={classes}
                             maxRows={15}
                             user={{
                                fullname: 'Max Power',
                                username: 'MXPower',
                                avatarUrl: 'https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?size=626&ext=jpg&ga=GA1.2.1239485549.1607040000'
                            }}

                             ></AddTweetForm>
                            </div>  
                        </ModalBlock>
                    </li>
                </ul>
                
            
    )
}



export default Sidebar
