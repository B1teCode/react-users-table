import React from 'react';
import './UserModal.css';

const UserModal = ({ user, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Информация о пользователе</h2>
        <p><strong>ФИО:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Возраст:</strong> {user.age}</p>
        <p><strong>Пол:</strong> {user.gender}</p>
        <p><strong>Номер телефона:</strong> {user.phone}</p>
        <p><strong>Адрес:</strong> {user.address.city}, {user.address.street}</p>
        <p><strong>Рост:</strong> {user.height} см</p>
        <p><strong>Вес:</strong> {user.weight} кг</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserModal;
