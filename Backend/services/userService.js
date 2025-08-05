const fetchUsers = () => {

    return [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
};

const fetchUserById = (id) => {
    
    const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    return users.find(user => user.id === parseInt(id));
};

const addUser = (newUser) => {
    console.log('Adding new user:', newUser);
   
    return { ...newUser, id: Math.floor(Math.random() * 1000) };
};

module.exports = {
    fetchUsers,
    fetchUserById,
    addUser
};
