import React, { useState, useEffect } from 'react';
import { useMCP } from '../hooks/useMCP';

function MCPManager() {
  const [mcpData, setMcpData] = useState({});
  const { isLoading, error, data } = useMCP();

  useEffect(() => {
    if (data) {
      setMcpData(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <div>
      <h2>Gestion de serveurs MCP</h2>
      <ul>
        {mcpData.servers.map((server) => (
          <li key={server.id}>
            {server.name} ({server.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MCPManager;