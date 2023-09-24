import axios from 'axios';

const AuthService = {
  login: async (email: string, password: string): Promise<string> => {
    try {
      const response = await axios.post(`https://238e-2804-2c44-277-200-6db2-8443-9d8f-a2f9.ngrok-free.app/login`, {
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