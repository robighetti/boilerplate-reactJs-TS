import React, { useState, useCallback, useEffect } from 'react';
import { FiHome, FiPower, FiUsers, FiUser } from 'react-icons/fi';
import { GiExpense, GiProfit } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import Logo from '../../assets/logo.svg';

import { Container, Header, LogoImg, Menu, ListItem, Content } from './styles';

interface MenuProps {
  home: boolean;
  customers: boolean;
  users: boolean;
  profits: boolean;
  expenses: boolean;
}

const Aside: React.FC = () => {
  const history = useHistory();

  const { signOut } = useAuth();
  const [menu, setMenu] = useState<MenuProps>({} as MenuProps);

  useEffect(() => {
    if (
      !menu.customers &&
      !menu.expenses &&
      !menu.home &&
      !menu.profits &&
      !menu.users
    ) {
      setMenu({
        ...menu,
        home: true,
      });

      history.push('/home');
    }
  }, [history, menu]);

  const handleMenu = useCallback(
    (menuSelected: string) => {
      switch (menuSelected) {
        case 'home': {
          setMenu({
            ...menu,
            home: true,
            customers: false,
            users: false,
            profits: false,
            expenses: false,
          });

          history.push('/home');

          break;
        }

        case 'customers': {
          setMenu({
            ...menu,
            home: false,
            customers: true,
            users: false,
            profits: false,
            expenses: false,
          });

          history.push('/customers');
          break;
        }

        case 'users': {
          setMenu({
            ...menu,
            home: false,
            customers: false,
            users: true,
            profits: false,
            expenses: false,
          });

          history.push('/users');
          break;
        }

        case 'profits': {
          setMenu({
            ...menu,
            home: false,
            customers: false,
            users: false,
            profits: true,
            expenses: false,
          });

          history.push('/profits');
          break;
        }

        case 'expenses': {
          setMenu({
            ...menu,
            home: false,
            customers: false,
            users: false,
            profits: false,
            expenses: true,
          });

          history.push('/expenses');
          break;
        }

        default:
      }
    },
    [history, menu],
  );

  return (
    <Container>
      <Header>
        <LogoImg src={Logo} alt="Logo do Barbeiro" />
      </Header>

      <Content>
        <Menu>
          <ListItem menu={menu.home}>
            <button type="button" onClick={() => handleMenu('home')}>
              <FiHome size={28} />
              <span>Home</span>
            </button>
          </ListItem>

          <ListItem menu={menu.customers}>
            <button type="button" onClick={() => handleMenu('customers')}>
              <FiUsers size={28} />
              <span>Clientes</span>
            </button>
          </ListItem>

          <ListItem menu={menu.users}>
            <button type="button" onClick={() => handleMenu('users')}>
              <FiUser size={28} />
              <span>Usuários</span>
            </button>
          </ListItem>

          <ListItem menu={menu.profits}>
            <button type="button" onClick={() => handleMenu('profits')}>
              <GiProfit size={28} />
              <span>Receitas</span>
            </button>
          </ListItem>

          <ListItem menu={menu.expenses}>
            <button type="button" onClick={() => handleMenu('expenses')}>
              <GiExpense size={28} />
              <span>Despesas</span>
            </button>
          </ListItem>
        </Menu>
        <button type="button" onClick={() => signOut()}>
          <FiPower size={24} />
          Sair do sistema
        </button>
      </Content>
    </Container>
  );
};

export default Aside;
