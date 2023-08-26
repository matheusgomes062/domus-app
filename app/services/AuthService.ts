import axios from 'axios';

const AuthService = {
  login: async (email: string, password: string): Promise<string> => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
        email,
        password,
      });

      const token: string = response.data.accessToken;

      return token;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;