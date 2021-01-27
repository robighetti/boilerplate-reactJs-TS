import React from 'react';
import {
  FiHome,
  FiUsers,
  FiUser,
  FiArrowDown,
  FiArrowUp,
} from 'react-icons/fi';

import LogoColorido from '../../assets/logo.svg';

import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
} from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={LogoColorido} alt="Avalie Fácil" />
      </Header>

      <MenuContainer>
        <MenuItemLink href="/home">
          <FiHome />
          Home
        </MenuItemLink>

        <MenuItemLink href="/users">
          <FiUser />
          Usuários
        </MenuItemLink>

        <MenuItemLink href="/customers">
          <FiUsers />
          Clientes
        </MenuItemLink>

        <MenuItemLink href="/expenses">
          <FiArrowUp />
          Despesas
        </MenuItemLink>

        <MenuItemLink href="/revenue">
          <FiArrowDown />
          Receitas
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
