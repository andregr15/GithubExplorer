import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './style';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/4814473?s=400&u=9ffb7b177f7f00d617b92a4490aed9aa3b3f5b19&v=4"
            alt="avatar"
          />
          <div>
            <strong>California deliverables Computers</strong>
            <p>
              Ut rerum incidunt vitae aliquam a repudiandae. Iste consequatur
              voluptatem quas possimus nesciunt asperiores autem porro.
              Consequatur perferendis dolorem. Repellendus temporibus et eos
              expedita qui laborum.
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>6701</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>62065</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>54727</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <a href="asdf">
          <div>
            <strong>reiciendis</strong>
            <p>
              Repellendus laborum dolores consectetur dolor facilis sapiente
              eius nisi libero. Modi laborum consequatur libero optio aliquam.
              Architecto quod quae. Delectus repellendus rerum voluptatem veniam
              officiis iste aut neque. Pariatur quaerat rerum non eos itaque
              nihil aperiam ut dolor.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Issues>
    </>
  );
};

export default Repository;
