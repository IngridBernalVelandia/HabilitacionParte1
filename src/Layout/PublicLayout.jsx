import React from 'react';
import BarraNav from '../Components/BarraNav';

const PublicLayout = ({children}) => {
    return (
        <div>
            <BarraNav/>
            este es mi PublicLayout
            {children}
        </div>
    );
};

export default PublicLayout;