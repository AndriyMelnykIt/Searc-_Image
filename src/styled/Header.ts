import styled from 'styled-components';

import { blue } from './variables';

const StyledHeader = styled.div`
    a, 
    .nav-link {
    color: ${blue};
    &:hover {
    color: red;
    text-decoration: none;
  }
}
`;

export { StyledHeader };
