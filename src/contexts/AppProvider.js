import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);
export const AppSetterContext = createContext(null);

const AppProvider = ({ children }) => {
  const [app, setApp] = useState({
    page: "home",
    expenses: [
      {
        id: 1,
        category: "Travel",
        title: "Fly to Paris",
        price: "523",
        isIncome: false,
        date: "2023-05-19T12:00:00",
      },
      {
        id: 2,
        category: "Market",
        title: "Groceries",
        price: "179",
        isIncome: false,
        date: "2023-05-19T12:00:00",
      },
      {
        id: 3,
        category: "Salary",
        title: "Salary + Bonus",
        price: "1265",
        isIncome: true,
        date: "2023-05-19T12:00:00",
      },
      {
        id: 4,
        category: "Clothing",
        title: "Clothes",
        price: "179",
        isIncome: false,
        date: "2023-05-19T12:00:00",
      },
      {
        id: 5,
        category: "Housing",
        title: "Home Rent",
        price: "523",
        isIncome: false,
        date: "2023-05-19T12:00:00",
      },
    ],
  });

  return (
    <AppContext.Provider value={app}>
      <AppSetterContext.Provider value={setApp}>
        {children}
      </AppSetterContext.Provider>
    </AppContext.Provider>
  );
};

export default AppProvider;
