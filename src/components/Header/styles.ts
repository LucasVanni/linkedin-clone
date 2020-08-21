import styled from 'styled-components';

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

  .header-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .search-header {
    padding-left: 10px;
    border-radius: 10px;
    height: 30px;
    border: 2px solid ${props => props.theme.colors.searchBorder};
    outline: none;
    color: ${props => props.theme.colors.subText};
    background: ${props => props.theme.colors.background};  
    
    ::placeholder {
      color: ${props => props.theme.colors.subText}
    }
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
    flex: 1;  
    justify-content: space-evenly;
    align-items: center;
  }

  .menu-header {
    display: flex;
    flex: 2;
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
`;

// border-bottom-color: #0e76a8;
// border-bottom-style: solid;
// border-bottom-width: 4px;
// margin-bottom: 7rem;