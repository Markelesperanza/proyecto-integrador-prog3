import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loading-container">
            <img src="/image/loader.webp" alt="Cargando..." />
            <p>Cargando...</p>
        </div>
    );
};

export default Loader;
