import styled from 'styled-components';

import search from '../../assets/search.svg';

interface Header {
  colorBackground?: string;
  colorText?: string;
}

export const Container = styled.header<Header>`
  width: 100%;
  height: 6rem;
  background: ${props => props.colorBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  .header-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .search-header {
    margin-left: 2rem;
    width: 23rem;
    height: 3rem;
    font-size: 1.1rem;
    border: none;
    outline: none;
    padding-left: 2rem;
    background: ${props => props.theme.colors.backgroundHeader} url(${search}) no-repeat; 
    background-position: top 50% left 0, 0 0;
    background-size: 15px;
    border-bottom: 2px solid #bbb;
    color: #bbb;
    transition: border-bottom ease-in .3s;
  }

  ::placeholder {
      color: #bbb;
    }

  .search-header:focus {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }

  .header-container img:first-child {
    height: 3rem;
  }

  .header-container img:last-child {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  .logo-search{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .menu-header {
    display: flex;

    justify-content: center;
    align-items: center;
  }

  .menu-header nav ul {
    display: flex;
  }

  .menu-header nav ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    list-style: none;
    color: #bbb;
    font-weight: 600;
    cursor: pointer;
    transition: color .5s;
  }

  .menu-header nav ul li + li {
    margin-left: 3rem;
  }

  .menu-header nav ul li:hover {
    color: #0D86FF;
  }

  .menu-header nav ul li svg {
    margin-right: .5rem;
  }

  .switch {
    margin: 0 3rem;
  }

  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1286px) {
    .menu-header nav {
      display: none;
    }
  }

  @media (max-width: 320px) {
    .search-header {
      width: 17.5rem;
    }
  }

  @media (max-width: 720px) {
    .avatar-container img {
      display: none;
    }

    .switch {
      margin: 0;
    }
  }
`;