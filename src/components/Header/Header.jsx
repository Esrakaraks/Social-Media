import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useSelector } from 'react-redux';
import ModalComponent from '../Modal/ModalComponent';
import FlutterDashTwoToneIcon from '@mui/icons-material/FlutterDashTwoTone';

const Header = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const loginState = useSelector(state => state.login);
    const [openModal, setOpenModal] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <React.Fragment>
            <Box className="header" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                <Typography className='header__title' sx={{ minWidth: 100 }} onClick={() => navigate('/')} >Chirp <FlutterDashTwoToneIcon/></Typography>
                <Tooltip title="Account settings" >
                    <Tooltip title="Open Modal">
                        <IconButton onClick={handleOpenModal} sx={{ ml: 2 }}>
                            <PostAddIcon className='header__text' sx={{ ml: 2, fontSize: '35px' }} />
                        </IconButton>
                    </Tooltip>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                     <Avatar sx={{ width: 32, height: 32 }}>{loginState.getProfileData?.firstName.charAt(0)}</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => navigate(`/profile/${loginState.getProfileData.id}`)}>
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => navigate('/login')}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={() => navigate('/login')}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            <ModalComponent open={openModal} onClose={handleCloseModal} />
        </React.Fragment>
    )
}

export default Header;
