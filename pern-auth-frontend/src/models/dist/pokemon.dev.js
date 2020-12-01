"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var REACT_APP_API_URL = 'http://localhost:4000/api/v1';

var PokemonModel =
/*#__PURE__*/
function () {
  function PokemonModel() {
    _classCallCheck(this, PokemonModel);
  }

  _createClass(PokemonModel, null, [{
    key: "create",
    // static all = () => {
    //   return fetch(`${REACT_APP_API_URL}/pokemon`).then((res) => res.json())
    // }
    value: function create(data) {
      return fetch("".concat(REACT_APP_API_URL, "/pokemon/createpokemon"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (res) {
        return res.json();
      });
    }
  }]);

  return PokemonModel;
}();

exports["default"] = PokemonModel;