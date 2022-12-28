
import ModalAddNew from './ModalAddNew';

import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import TableUser from '../Content/tableUser'
import { getAllUserView, getUserPaginate } from '../../../services/apiServices'
import { useEffect, useState } from 'react'
import ModalUpdate from './ModalUpdateUser'
import ModalView from './ModalView'
import ModalDelete from './ModalDelete'
import TableUserPaginate from './tableUserPaginate';
const ManageUser = (props) => {
    const LIMI_USER = 1;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalView, setShowModalView] = useState(false);

    const [dataUpdateUser, setDataUpdateUser] = useState({})
    const [dataView, setDataView] = useState({})

    const [ShowDel, setShowDel] = useState(false)
    const [dataDel, setDataDel] = useState({})

    const [listUsers, setListUsers] = useState([

    ])

    // ham useEffect duoc chay sau khi ham render duoc chay
    useEffect(() => {
        fetchListUsersPaginate(1);
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUserView();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }
    const fetchListUsersPaginate = async (page) => {
        let res = await getUserPaginate(page, LIMI_USER);
        if (res.EC === 0) {
            setListUsers(res.DT.users);
            console.log('check page', res.DT)
            setPageCount(res.DT.totalPages)

        }
    }

    const handleClickBTNupdate = (userUpdate) => {
        setShowModalUpdateUser(true)
        setDataUpdateUser(userUpdate)

    }
    const resetUpdateDa = () => {
        setDataUpdateUser({});
    }

    const handleShowView = (userView) => {
        setShowModalView(true)
        setDataView(userView)
    }

    const handleDelBTN = (userDel) => {
        setDataDel(userDel)
        setShowDel(true)
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-user">

                    <button className='btn btn-primary' onClick={() => setShowModalCreateUser(true)}> <FcPlus /> Add newbie</button>
                </div>
                <div className='table-users-container'>

                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBTNupdate={handleClickBTNupdate}
                        handleShowView={handleShowView}
                        handleDelBTN={handleDelBTN}
                        fetchListUsersPaginate={fetchListUsersPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />

                </div>
                <ModalAddNew
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersPaginate={fetchListUsersPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdate
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdateUser={dataUpdateUser}
                    fetchListUsers={fetchListUsers}
                    resetUpdateDa={resetUpdateDa}
                    fetchListUsersPaginate={fetchListUsersPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalView
                    show={showModalView}
                    setShow={setShowModalView}
                    dataView={dataView}
                    fetchListUsers={fetchListUsers}
                    resetUpdateDa={resetUpdateDa}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

                />
                <ModalDelete
                    show={ShowDel}
                    setShow={setShowDel}
                    dataDel={dataDel}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersPaginate={fetchListUsersPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

        </div>
    )
}
export default ManageUser;