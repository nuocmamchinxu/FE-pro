import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUser } from '../../../services/apiServices';
const ModalDelete = (props) => {
    const { show, setShow, dataDel } = props;

    const handleClose = () => setShow(false);

    const handleSubmitDataDel = async () => {
        let data = await deleteUser(dataDel.id)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose();
            // await props.fetchListUsers(); 
            props.setCurrentPage(1)
            await props.fetchListUsersPaginate(1);
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"

            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete this User ?? !!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are your sure delete this user. email =
                    <b>{dataDel && dataDel.email ? dataDel.email : ""}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitDataDel() }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;