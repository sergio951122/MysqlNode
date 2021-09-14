module.exports = {
    toDbEntity(user){
        const {id,username,password,first_name,last_name,email ,role,age } = user;
        return new User ({id,username,password,first_name,last_name,email ,role,age});
    }
};