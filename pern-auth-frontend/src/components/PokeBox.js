import React from 'react'
import { Button } from '@material-ui/core'
import PokeContainerList from './PokeContainer/PokeContainerList'
import { TeamProvider } from './Contexts/TeamContext'
import { PokedexProvider } from './Contexts/PokedexContext'

const PokeBox = () => {
  return (
    <div>
      <TeamProvider>
        <PokedexProvider>
          <PokeContainerList />
          <Button>Create Team</Button>
        </PokedexProvider>
      </TeamProvider>
    </div>
  )
}

export default PokeBox
