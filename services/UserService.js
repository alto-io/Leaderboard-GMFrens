import { users } from "./mock-data";

const UserService = {
    fetchUsers: () => {
        return users
    }
}

export default UserService;