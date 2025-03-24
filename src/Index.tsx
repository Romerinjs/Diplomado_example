import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
    const user = undefined; // Simulando un error de producción

    // Esto generará un error porque `user` es undefined
    return <div>Hola, {user.name}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));