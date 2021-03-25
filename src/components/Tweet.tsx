import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useHomeStyles } from '../pages/Home/theme'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ReplyIcon from '@material-ui/icons/Reply';
import classNames from 'classnames'

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

export const Tweet: React.FC<TweetProps> = ({classes,text,user}: TweetProps): React.ReactElement => {
    return (
        <Paper  variant="outlined" className={classNames(classes.tweet, classes.tweetsHeader)}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                        <Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl} />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography>
                                <b>{user.fullname}</b> 
                                <span className={classes.tweetUsername}>@{user.username}</span>&nbsp;
                                <span className={classes.tweetUsername}></span>&nbsp;
                                <span className={classes.tweetUsername}>1ч</span>
                                </Typography>
                            <Typography variant="body1" gutterBottom>{text}</Typography>
                            <div className={classes.buttonGroupWrapper}>
                                <div>
                            <IconButton >
                               <ChatBubbleOutlineOutlinedIcon className={classes.buttonGroupIcon} />
                            </IconButton>
                            <span className={classes.iconButtonSpan}>3</span>
                            </div>
                            <div>
                            <IconButton >
                               <RepeatOutlinedIcon className={classes.buttonGroupIcon} />
                            </IconButton>
                            <span className={classes.iconButtonSpan}>3</span>
                            </div>
                            <div>
                            <IconButton >
                               <FavoriteBorderOutlinedIcon className={classes.buttonGroupIcon} />
                            </IconButton>
                            <span className={classes.iconButtonSpan}>3</span>
                            </div>
                            <div>
                            <IconButton >
                               <ReplyIcon className={classes.buttonGroupIcon} />
                            </IconButton>
                            
                            </div>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
    )
}


export default Tweet
