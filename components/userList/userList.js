import AddUser from "./addUser";
import Table from "./table";

function UserList() {
  

    return (

        <div className="flex flex-col items-center" dir="ltr">
          <AddUser/>
          <Table/>
        </div>

    );
}

export default UserList;
