import axios from 'axios'
const REACT_APP_API_URL = 'http://localhost:4000/api/v1'

export default class PokemonModel {
  // static all = () => {
  //   return fetch(`${REACT_APP_API_URL}/pokemon`).then((res) => res.json())
  // }

  static create(data) {
    return fetch(`${REACT_APP_API_URL}/pokemon/createpokemon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())
  }
}
