import axios from 'axios'
const REACT_APP_API_URL = 'http://localhost:4000/api/v1'

export default class TeamModel {
  // static all = () => {
  //   return fetch(`${REACT_APP_API_URL}/teams`).then((res) => res.json())
  // }

  static create(data) {
    return axios
      .post(`${REACT_APP_API_URL}/team/createteam`, data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

    // return fetch(`${REACT_APP_API_URL}/team`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => res.json())
  }
}
