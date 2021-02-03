/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiZoomIn, FiDelete, FiEdit, FiPlus } from 'react-icons/fi';

import Buttom from '../../components/Button';
import { List, ListItems } from '../../components/Custom';

import { Container } from './styles';

const Expenses: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Despesas Cadastradas</h1>
        <Buttom>
          <FiPlus size={24} />
          Adicionar
        </Buttom>
      </header>
      <List>
        <ListItems>
          <label htmlFor="name">
            Nome
            <p id="name">Rodrigo Bighetti</p>
          </label>

          <label htmlFor="email">
            Email
            <p id="email">robighetti@gmail.com</p>
          </label>

          <label htmlFor="mobile">
            Celular
            <p id="mobile">(19) 9 9982-8057</p>
          </label>

          <label htmlFor="lastDate">
            Ultimo Corte
            <p id="lastDate">02/02/2021</p>
          </label>

          <div>
            <button type="button" title="Visualizar">
              <FiZoomIn size={20} />
            </button>

            <button type="button" title="Editar">
              <FiEdit size={20} />
            </button>

            <button type="button" title="Deletar">
              <FiDelete size={20} />
            </button>
          </div>
        </ListItems>
      </List>
    </Container>
  );
};

export default Expenses;
