import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'

import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../services/apiServices'
import _ from 'lodash'

const ModalUpdate = (props) => {
    const { show, setShow, dataUpdateUser } = props;


    const handleClose = () => {
        setShow(false)
        setEmail('')
        setPassword('')
        setUsername('')
        setRole('')
        setAvatar('')
        setPreview('')
        props.resetUpdateDa();

    };
    const handleShow = () => setShow(true);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER')
    const [avatar, setAvatar] = useState('');
    const [preview, setPreview] = useState('')

    useEffect(
        () => {
            if (!_.isEmpty(dataUpdateUser)) {
                // neu ko rong, update state
                setEmail(dataUpdateUser.email)

                setUsername(dataUpdateUser.username)
                setRole(dataUpdateUser.role)
                setAvatar('')
                setPreview(`data:image/jpeg;base64,${dataUpdateUser.image}`)

            }
        }, [dataUpdateUser]
    )

    const handleUpLoad = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreview(URL.createObjectURL(event.target.files[0]))
            setAvatar(event.target.files[0])
        } else {
            // setPreview('')
        }

    }


    const handleSubmitCreateUser = async () => {
        // // validate
        // const isValidEmail = validateEmail(email);
        // if (!isValidEmail) {

        //     toast.error('invalid email')
        //     return;
        // }
        // if (!password) {
        //     toast.error('invalid password')
        //     return;
        // }
        if (!username) {
            toast.error('please enter your username')
            return;
        }




        let data = await putUpdateUser(dataUpdateUser.id, username, role, avatar)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose();
            await props.fetchListUsersPaginate(props.currentPage);
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }


    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add New
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop='static'
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update User !!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled={true}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password}
                                disabled
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input type="text" className="form-control" value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select id="inputState" className="form-select" onChange={(event) => setRole(event.target.value)}>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label
                                className='form-label label-upload'
                                htmlFor='lbupload'

                            >
                                <FcPlus />
                                Upload File Image
                            </label>
                            <input
                                type='file'
                                hidden
                                id="lbupload"
                                onChange={(event) => handleUpLoad(event)}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {preview} ?
                            <img src={preview} />
                            :
                            <span>Preview</span>

                        </div>



                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalUpdate;