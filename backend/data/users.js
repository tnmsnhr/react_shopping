import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Tanmoy Roy',
    email: 'tanmoy@gmail.com',
    password: bcrypt.hashSync('tanmoy', 10),
  },
  {
    name: 'Akash Gupta',
    email: 'akash@gmail.com',
    password: bcrypt.hashSync('akash', 10),
  },
]

export default users
