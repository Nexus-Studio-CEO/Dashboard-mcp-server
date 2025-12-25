import { useState, useEffect } from 'react';
import { MCPService } from '../services/MCPService';

const useMCP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchMCPData = async () => {
      setIsLoading(true);
      try {
        const response = await MCPService.getMCPData();
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMCPData();
  }, []);

  return { isLoading, error, data };
};

export default useMCP;