const buildTeamObj = () => {
  console.log(currentTeam)
  team.name = currentTeam.team.teamName
  team.description = currentTeam.teamDescription
  for (let i = 0; i < 6; i++) {
    team = {
      ...team,
      [`pokemon${i}`]: { name: currentTeam.pokemons[i].name },
    }
    for (let j = 0; j < 4; j++) {
      team[`pokemon${i}`].moves = {
        ...team[`pokemon${i}`].moves,
        [`move${j}`]: currentTeam.pokemons[i].move[j],
      }
    }
  }
}
