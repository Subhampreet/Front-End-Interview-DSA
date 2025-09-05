import { useEffect, useState } from "react";
import Button from "./components/Button";
import "./styles.css";
import axios from "axios";

const POKEMON_LIST_URL = `https://pokeapi.co/api/v2/pokemon?limit=100`;

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(POKEMON_LIST_URL);
        setPokemonList(response.data.results);
      } catch (err) {
        setError("Failed to fetch Pokmon List");
      }
    };

    fetchPokemonList();
  }, []);

  const fetchPokemonData = async (pokemonName) => {
    const cachedData = localStorage.getItem(pokemonName);

    if (cachedData) {
      console.log("Using cached data for", pokemonName);
      setPokemonData(JSON.parse(cachedData));
      return;
    }

    setLoading(true);
    setPokemonData(null);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = response.data;
      localStorage.setItem(pokemonName, JSON.stringify(data));
      setPokemonData(data);
    } catch (err) {
      setError(`Failed to fetch data for ${pokemonName}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedPokemon) {
      fetchPokemonData(selectedPokemon);
    }
  }, [selectedPokemon]);

  const handleSelectChange = (e) => {
    setSelectedPokemon(e.target.value);
    setError(null);
  };

  return (
    <div className="App">
      <h1>Pokemon API Fetcher</h1>

      <div className="dropdown-container">
        <label htmlFor="pokemon-select">Choose a Pokemon:</label>

        <select
          id="pokemon-select"
          onChange={handleSelectChange}
          value={selectedPokemon}
        >
          <option value="">--Please Choose a Pokemon--</option>
          {pokemonList.map((pokemon, index) => (
            <option key={index} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {pokemonData && (
        <div className="pokemon-card">
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height : {pokemonData.height}</p>
          <p>Weight : {pokemonData.weight}</p>
          <h3>Abilities:</h3>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
