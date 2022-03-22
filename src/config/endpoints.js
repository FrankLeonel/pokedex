import { api } from "./api";

export const endpoints = {
  getAllPokemons: async () => {
    try {
      const response = await api.get("/pokemon");

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getPokemon: async (id) => {
    try {
      const response = await api.get(`/pokemon/${id}`);

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getContinueSearchList: async () => {
    try {
      const response = await api.get("pokemon?limit=898");

      return response;
    } catch (error) {
      return new Error(error.message);
    }
  },
  getPokemonSearch: async (name) => {
    try {
      const response = await api.get(`/pokemon/${name}`);

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getSpecies: async (species) => {
    try {
      const response = await api.get(species);

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getEvolutionChain: async (chainId) => {
    try {
      const response = await api.get(`/evolution-chain/${chainId}`);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getTypes: async (nameType) => {
    try {
      const response = api.get(`/type/${nameType}`);

      return response;
    } catch (error) {
      return new Error(error.message);
    }
  },
};
