import { Modal, Box, } from '@mui/material';
import React, { useState } from 'react';
import { useCustomComponents } from '../../common/useCustomComponents/useCustomComponents';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/postSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ModalComponent = ({ onClose, open }) => {
    const { CustomBasicButton, CustomTextField, CustomText,SuccessAlert } = useCustomComponents();
    const loginState = useSelector(state => state.login.getProfileData);
    const [showMessage, setShowMessage] = useState(false)
    const dispatch = useDispatch();
    const initialState = {
        title: '',
        userId: ''
    }
    const [post ,setPost] = useState(initialState)
    const getData = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value
          });
    }
    const addNewPost = () => {
        const test = {
            title: post.title,
            userId: loginState.id
        }
        dispatch(addPost(test))
        onClose()
        setPost(initialState)
        setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
          }, 2000);

    }
    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='modal'
            >
                <Box sx={style}>
                    <CustomText variant="h6" text="ADD NEW A POST" />
                    <CustomTextField name="title" label="Enter your post" onChange={getData} value={post.title} />
                    <CustomBasicButton className="modal__action"  text="Add post" onClick={addNewPost} />
                </Box>
            </Modal>
            {showMessage && <SuccessAlert label ="Your post has been added successful"/>}
        </>
    );
}

export default ModalComponent;
