import React, { useMemo } from 'react';
import emojis from '../../utils/emojis';

import { useAuth } from '../../hooks/auth';
import Toggle from '../Toggle';

import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {
  const { operator } = useAuth();

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>{operator.name}</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
