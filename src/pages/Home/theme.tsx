import { makeStyles, Theme } from "@material-ui/core";

export const useHomeStyles = makeStyles((theme: Theme) =>({
    wrapper: {
        height: '100vh'
        },
    sideMenuList: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        maxWidth: 240
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
          '& div': {
            backgroundColor: 'rgba(29, 161, 242, 0.1)',
            '& h6': {
              color: theme.palette.primary.main,
            },
            '& svg path': {
              fill: theme.palette.primary.main,
            },
          },
        },
    
        '& div': {
          display: 'inline-flex',
          alignItems: 'center',
          position: 'relative',
          padding: '0 25px 0 20px',
          borderRadius: 30,
          height: 50,
          marginBottom: 15,
          transition: 'background-color 0.1s ease-in-out',
        },
      },
    sideMenuListItemLabel: {
        fontWeight: 700,
        marginLeft: 20
    },
    sideMenuListItemIcon: {
        fontSize: 28,
        marginLeft: '-5px'
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        
    },
    tweet: {
        cursor: 'pointer',
        '&:hover':{
            backgroundColor: 'rgb(245,248,250)'
        }
    },
    tweetsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        position: 'sticky',
        '& h6': {
          fontWeight: 800,
        },
      },
      tweetAvatar: {
            width: theme.spacing(7),
            height: theme.spacing(7),
            marginTop: 5 
      },
      tweetUsername: {
          color: 'rgba(0, 0, 0, 0.46)'
      },
      tweetsCentered: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 45
      },
      buttonGroupWrapper: {
          display: 'flex',
          justifyContent: 'space-between',
          width: 450,
          position: 'relative',
          left: -12,
      },
      buttonGroupIcon: {
        fontSize: 18
      },
      iconButtonSpan: {
          fontSize: 14,
      },
      addForm: {
        padding: 20
      },
      mainAddForm: {
          padding: 20
      },
      addFormBody: {
        display: 'flex',
        width: '100%',
      },
      addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
      },
      addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
      },
      addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
      },
      addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
          position: 'absolute',
        },
      },
      addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
      },
      rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
      },
      rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
          paddingTop: 0,
        },
      },
      rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
          fontSize: 20,
          fontWeight: 800,
        },
      },
      rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
          fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
          minWidth: 50,
        },
        '& .MuiListItemText-root': {
          margin: 0,
        },
        '&:hover': {
          backgroundColor: '#edf3f6',
        },
      },
    
    
    }));