import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const AllLinks = styled(Link)`
text-decoration :none;
margin:2vh;
color:red;
`;

function Navbar() {
  return (
    <div>
        <AllLinks to='/'>Home</AllLinks>
        <AllLinks to='/Products'>Products</AllLinks>
    </div>
  )
}

export default Navbar