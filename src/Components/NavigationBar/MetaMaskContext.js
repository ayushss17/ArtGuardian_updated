import React ,{createContext, useState, useEffect } from 'react';

const MetamaskContext = createContext();

const MetamaskProvider = ({ children }) => {
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const [metamaskAccount, setMetamaskAccount] = useState(null);

  useEffect(() => {
    const checkMetamaskConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });

          if (accounts.length > 0) {
            setIsMetamaskConnected(true);
            setMetamaskAccount(accounts[0]);
          } else {
            setIsMetamaskConnected(false);
            setMetamaskAccount(null);
          }
        } catch (error) {
          console.error('Error connecting to Metamask:', error);
          setIsMetamaskConnected(false);
          setMetamaskAccount(null);
        }
      } else {
        setIsMetamaskConnected(false);
        setMetamaskAccount(null);
      }
    };

    checkMetamaskConnection();

    // Only add listener if ethereum is available
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setIsMetamaskConnected(true);
          setMetamaskAccount(accounts[0]);
        } else {
          setIsMetamaskConnected(false);
          setMetamaskAccount(null);
        }
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
      }
    };
  }, []);

  const connectToMetamask = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setIsMetamaskConnected(true);
      setMetamaskAccount(accounts[0]);
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
      setIsMetamaskConnected(false);
      setMetamaskAccount(null);
    }
  };

  const disconnectFromMetamask = () => {
    // MetaMask doesn't have a direct disconnect method
    // We clear local state and reload to simulate logout
    setIsMetamaskConnected(false);
    setMetamaskAccount(null);
    // Clear any cached permissions by reloading
    window.location.reload();
  };

  return (
    <MetamaskContext.Provider value={{ isMetamaskConnected, metamaskAccount, connectToMetamask, disconnectFromMetamask }}>
      {children}
    </MetamaskContext.Provider>
  );
};

export  {MetamaskContext,MetamaskProvider};
 