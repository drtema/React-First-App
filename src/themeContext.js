
import React from 'react';

export const themes = {
    theme: [
        'primary',
         'success',
         'danger',
         'info',
         'warning',
         'active',
         'secondary',
         'light',
         'dark',
         'bg-gradient-info'
    ]
};

export const ThemeContext = React.createContext(
    themes.theme[3]
);