import React, { createContext, useContext, useState} from 'react'

const DarkModeContext = createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContext);
}
