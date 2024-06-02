import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users');
        setUsers(response.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.email} - {new Date(user.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
