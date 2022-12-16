
import ModalAddNew from './ModalAddNew';



const ManageUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <button className="btn-add-user">Add newbie</button>
            </div>
            <div>table
                <ModalAddNew />
            </div>
        </div>
    )
}
export default ManageUser;