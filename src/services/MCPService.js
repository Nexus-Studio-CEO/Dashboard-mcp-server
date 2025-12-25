import axios from 'axios';

const MCPService = {
  getMCPData: async () => {
    const response = await axios.get('/api/mcp/data');
    return response;
  },
};

export default MCPService;