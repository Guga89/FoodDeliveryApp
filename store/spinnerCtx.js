import { createContext, useState } from 'react';

const SpinnerCtx = createContext({ loading: false, changeLoading: () => {} });

export const SpinnerCtxProvider = (props) => {
  const [loading, setLoading] = useState(false);

  const spinnerToggler = () => {
    setLoading(!loading);
  };

  const context = { loading, changeLoading: spinnerToggler };

  return (
    <SpinnerCtx.Provider value={context}>{props.children}</SpinnerCtx.Provider>
  );
};

export default SpinnerCtx;
