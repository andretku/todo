import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';


export const Wrapper = styled('div')({
    display: 'block',
    marginBottom: '40px',
});

export const WrapperBtn = styled('div')({
    display: 'flex',
    gap: '16px',
    marginTop: '16px',
});

export const WrapperCheckbox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '20px 0 0 0',
});

export const AddTextField = styled(TextField)({
    border: '2px solid #bd93f9',
    backgroundColor: 'white',
    color: 'grey',
    borderRadius: '0.5rem',
    marginRight: '1rem',
    minWidth: '5rem',
    '& .MuiOutlinedInput-input': {
        color: '#000',
        fontSize: '0.8rem',
    },
});

