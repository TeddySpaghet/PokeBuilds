import axios from 'axios'
const REACT_APP_API_URL = 'http://localhost:4000/api/v1'

export default class PokemonModel {
  // static all = () => {
  //   return fetch(`${REACT_APP_API_URL}/pokemon`).then((res) => res.json())
  // }

  static create(data) {
    return axios
      .post(`${REACT_APP_API_URL}/pokemon/createpokemon`, data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
