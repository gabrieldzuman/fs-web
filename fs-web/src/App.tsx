import React, { useEffect } from 'react';
import { useUserStore } from './store/useUserStore';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const App: React.FC = () => {
  const { users, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Container>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </Container>
  );
};

export default App;
