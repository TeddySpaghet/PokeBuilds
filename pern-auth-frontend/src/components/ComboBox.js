/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pokedex from 'pokedex-promise-v2'

export default function ComboBox() {
    return (
        <Autocomplete
        id="combo-box-demo"
        options={pokeName}
        getOptionLabel={(option) =>  option}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pokemon" variant="outlined" />}
        />
    );
}
//usestate() hook, useffect() on component did mount, passing 2nd paramater of an empty array , return conditionally (return with ? operator)
const P = new Pokedex()
    const pokeName = P.getPokemonsList({limit:150, offset:0}).then(function (response) {
        return response.results.map(x => x.name)
    })
console.log(pokeName)