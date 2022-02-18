import styled from 'styled-components';

export const containerMobile = styled.div`
  &&& {
    @media (max-width: 500px) {
      display: block;
      position: fixed;
      background: #fff;
      width: 200px;
    }
  }
`;
