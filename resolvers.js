const Users = require('./models/Users');
const Employee = require('./models/Employee');



const resolvers = {

    Query: {
        getUsers: async () => {
            try {
                const users = await Users.find();
                return users;
            } catch (err) {
                throw new Error(err);
            }
        },
        getEmployees: async () => {
            try {
                const employees = await Employee.find();
                return employees;
            } catch (err) {
                throw new Error(err);
            }
        },
        login : async (_, {username, password}) => {
            try {
                const users = await Users.findOne({username, password});
                return users;
            } catch (err) {
                throw new Error(err);
            }
        },
        getEmployee: async (_, { id }) => {
            try{
                const employee = await Employee.findById(id);
                return employee;
            } catch (err) {
                throw new Error(err);

            }
        },
    },
    Mutation: {
        createEmployee: async (_, { name, lastname, email, salary, gender }) => {
            try {
                const employee = await Employee.create({name: name, lastname: lastname, email: email, salary: salary,gender: gender});
                return await employee.save();
            } catch (err) {
                throw new Error(err);
            }
        },
        createUser: async (_, {username, password, email}) => {
            try {
                const user = await Users.create({username: username, password: password, email: email});
                return await user.save();
            } catch (err) {
                throw new Error(err);
            }
        },
        deleteEmployee: async (_, { id }) => {
            try{
                const employee = await Employee.findByIdAndDelete(id);
                return employee;
            } catch (err) {
                throw new Error(err);


        
            }
        },
    }
        


}
module.exports = {resolvers};



















// module.exports = {
//     Query: {
//         getUsers: async () => {
//             try {
//                 const users = await Users.find();
//                 return users;
//             } catch (err) {
//                 throw new Error(err);
//             }
//         },

//         getEmployees: async () => {
//             try {
//                 const employees = await Employee.find();
//                 return employees;
//             } catch (err) {
//                 throw new Error(err);
//             }
//         },
//         login : async (_, {username, password}) => {
//             try {
//                 const users = await Users.find();
//                 return users;
//             } catch (err) {
//                 throw new Error(err);
//             }
//         }

//     },
//     Mutation: {
//         addEmployee: async (_, { input }) => {
//             try {
//                 const employee = await Employee.create(input);
//                 return await employee.save();
//             } catch (err) {
//                 throw new Error(err);
//             }
//         },
        


            
//         },
//         // addUser: async (_, { input }) => {
//         //     try {
//         //         const user = await Users.create(input);
//         //         return await user.save();

//         //     } catch (err) {
//         //         throw new Error(err);
//         //     }
//         // },
//         updateEmployee: async (_, { id, input }) => {
//             const edited = (await Employee.updateOne({ _id: id }, input));

//         },
//         deleteUser: async (_, { id }) => {
//             try {
//                 const user = await Users.findById(id);
//                 await user.remove();
//                 return 'User deleted successfully';
//             } catch (err) {
//                 throw new Error(err);
//             }
//         },
//         deleteEmployee: async (_, { id }) => {
//             try{
//                 const employee = await Employee.findById(id);
//                 await employee.remove();
//                 return 'Employee deleted successfully';
//             } catch (err) {
//                 throw new Error(err);
//             }
//     }

        
            
        
        


       
//     }




// }