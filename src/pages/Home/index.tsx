import { createStyles, Grid, Paper } from '@material-ui/core'
import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { Typography } from '@material-ui/core';

import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import Tweet from '../../components/Tweet'
import Sidebar from '../../components/Sidebar'
import { AddTweetForm } from '../../components/AddTweetForm';
import { InputAdornment } from '@material-ui/core';
import {useHomeStyles} from './theme'
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import {  selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';






const SearchTextField = withStyles(() =>
createStyles({
  input: {
    border: '1px solid transparent',
    margin: '5px 0 10px 0',
    borderRadius: 30,
    backgroundColor: '#E6ECF0',
    height: 45,
    padding: '0 0 0 10px',
    '&:focus': {
        backgroundColor: '#ffffff',
        border: '1px solid #71C9F8'
    }
  },
  
}),
)(InputBase);



export const Home = (): React.ReactElement => {
    const dispatch = useDispatch()
    const classes = useHomeStyles()
    const tweets = useSelector(selectTweetsItems)
    const isLoading =  useSelector(selectIsTweetsLoading)

    

    React.useEffect(()=>{
      dispatch(fetchTweets())
    }, [dispatch])

    return (
        <Container maxWidth="lg">
          <Grid container  spacing={3}>
          <Grid item sm={1} md={3}>
              <Sidebar classes={classes}/>
          </Grid>
            <Grid item sm={8} md={6}>
                <Paper className={classes.tweetsWrapper}  variant="outlined">
                <Paper className={classes.tweetsHeader}  variant="outlined">
                    <Typography variant="h6">Главная</Typography>
                    <IconButton>
                    <NewReleasesIcon color="primary"/>
                    </IconButton>
                </Paper>
                <Paper>
              <div className={classes.addForm}>
                <AddTweetForm classes={classes} 
                 user={{
                    fullname: 'Max Power',
                    username: 'MXPower',
                    avatarUrl: 'https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?size=626&ext=jpg&ga=GA1.2.1239485549.1607040000'
                }}
                />
              </div>
              <div className={classes.addFormBottomLine} />
             </Paper>
             {isLoading ?( 
              <div className={classes.tweetsCentered}><CircularProgress/></div>
              ) : (tweets.map((tweet: { _id: string | number | null | undefined; text: string; user: { fullname: string; username: string; avatarUrl: string; }; })=>(
                <Tweet 
                key={tweet._id}
                classes={classes} 
                text={tweet.text}
                user={tweet.user}
                />
                ))
                )}
                </Paper>         
            </Grid>
            {/* <Grid item sm={3} md={3}>
            <SearchTextField
            placeholder="Поиск в Твиттере"
            fullWidth
            />
            </Grid> */}
            <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField
              // variant="outlined"
              placeholder="Поиск по Твиттеру"
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Санкт-Петербург"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#коронавирус"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 163 122
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Беларусь"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 13 554
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>

          </Grid>
          </Container>
        
        
    )
}

export default Home
