import { withStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import { createStyles } from '@material-ui/core'

export const SearchTextField = withStyles((theme: Theme) =>
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

export default SearchTextField