import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import UserModal from './UserModal';
import './UserTable.css';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.users)) {
          setUsers(data.users);
          setFilteredUsers(data.users);
        } else {
          setUsers([]);
          setFilteredUsers([]);
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredUsers(users);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = users.filter(user =>
        (user.firstName && user.firstName.toLowerCase().includes(lowerCaseQuery)) ||
        (user.lastName && user.lastName.toLowerCase().includes(lowerCaseQuery)) ||
        (user.phone && user.phone.toLowerCase().includes(lowerCaseQuery)) ||
        (user.gender && user.gender.toLowerCase().includes(lowerCaseQuery)) ||
        (user.address.city && user.address.city.toLowerCase().includes(lowerCaseQuery)) ||
        (user.address.street && user.address.street.toLowerCase().includes(lowerCaseQuery))
      );
      setFilteredUsers(filtered);
    }
  };

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortConfig.key) {
      if (sortConfig.direction === 'ascending') {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      } else {
        return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      }
    }
    return filteredUsers;
  });

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <table style={{ width: '100%', maxWidth: '1200px' }}>
        <thead>
          <tr>
            <th onClick={() => requestSort('firstName')}>ФИО</th>
            <th onClick={() => requestSort('age')}>Возраст</th>
            <th onClick={() => requestSort('gender')}>Пол</th>
            <th onClick={() => requestSort('phone')}>Номер телефона</th>
            <th onClick={() => requestSort('address')}>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => (
            <tr key={user.id} onClick={() => setSelectedUser(user)}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}, {user.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserTable;
