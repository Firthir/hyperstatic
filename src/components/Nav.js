import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from './common'
import NavLink from './NavLink'
import Logo from './Logo'

const Nav = styled.div`
  background: white;
  position: sticky;
  top: 0;
`

export default (props) => (
  <Nav>
    <Container>
      <Flex alignCenter>
        <Logo>
          <span role='img' aria-label='Watermelon'>🍉</span>
        </Logo>
        <NavLink to='/' exact>Home</NavLink>
        <NavLink to='/about/' exact>About</NavLink>
        <NavLink to='/contact/' exact>Contact</NavLink>
      </Flex>
    </Container>
  </Nav>
)