/* eslint-disable no-unused-vars, no-undef */
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DialogContextType {
  isDialogVisible: boolean;
  showDialog: () => void;
  hideDialog: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const showDialog = () => setIsDialogVisible(true);
  const hideDialog = () => setIsDialogVisible(false);

  return (
    <DialogContext.Provider value={{ isDialogVisible, showDialog, hideDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};
