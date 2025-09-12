import axios from "axios";

// Função para detectar se estamos no servidor ou cliente
const isServer = typeof window === "undefined";

export const SessionService = {
  setSessionFlag: async () => {
    try {
      if (isServer) {
        // No servidor, não fazemos requisições HTTP internas
        // A flag será definida diretamente nos cookies
        return;
      }

      // No cliente, fazemos a requisição normalmente
      await axios.post("/api/session/flag/set");
    } catch (error) {
      console.error("Erro ao definir flag de sessão:", error);
    }
  },

  clearSessionFlag: async () => {
    try {
      if (isServer) {
        // No servidor, não fazemos requisições HTTP internas
        // A flag será limpa diretamente nos cookies
        return;
      }

      // No cliente, fazemos a requisição normalmente
      await axios.post("/api/session/flag/clear");
    } catch (error) {
      console.error("Erro ao limpar flag de sessão:", error);
    }
  },
};
