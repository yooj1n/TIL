import React from 'react';
import {createContext, useState} from 'react';

const LogContext = createContext('안녕');

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);
  return <LogContext.Provider value={{logs}}>{children}</LogContext.Provider>;
}

export default LogContext;
