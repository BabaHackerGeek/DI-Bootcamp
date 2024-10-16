import React from 'react';

interface UserCardProps {
  name?: string;
  age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name = 'Anonymous', age }) => {
  return (
    <div>
      <h3>User Information</h3>
      <p>Name: {name}</p>
      <p>Age: {age ? age : 'Not Provided'}</p>
    </div>
  );
};

export default UserCard;
