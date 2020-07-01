import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/8530623?s=400&u=431b427d3a26b947dd486bfd02e60b39e03caa50&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Aut enim voluptatem nam quam. Voluptas id vel voluptate quisquam.
              Delectus maxime voluptas aut nesciunt quia eveniet.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/8530623?s=400&u=431b427d3a26b947dd486bfd02e60b39e03caa50&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Aut enim voluptatem nam quam. Voluptas id vel voluptate quisquam.
              Delectus maxime voluptas aut nesciunt quia eveniet.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/8530623?s=400&u=431b427d3a26b947dd486bfd02e60b39e03caa50&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Aut enim voluptatem nam quam. Voluptas id vel voluptate quisquam.
              Delectus maxime voluptas aut nesciunt quia eveniet.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
