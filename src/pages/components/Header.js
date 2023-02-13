import React from 'react'
import './Header.css'

import ButtonGroup from '@mui/material/ButtonGroup'
import { Avatar, Chip, Button } from '@mui/material'

const Header = ({ user, setUser, setPage }) => {
  return (
    <div>
      <header>
        <a href="#" class="logo">
          Twitortrix
        </a>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Chip avatar={<Avatar>M</Avatar>} label="" />
          <Button
            onClick={() => {
              setPage('blog')
            }}
          >
            Inicio
          </Button>
          <Button
            onClick={() => {
              setPage('explorar')
            }}
          >
            Explorar
          </Button>
          <Button
            onClick={() => {
              setUser(null)
            }}
          >
            Salir
          </Button>
        </ButtonGroup>
      </header>
    </div>
  )
}

export default Header
