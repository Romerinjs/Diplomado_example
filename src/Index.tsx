import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
    const user: { name?: string } | null = null; // Simulando un error de producción

    // Esto generará un error porque `user` es undefined
    return <div>Hola, {user?.name ?? 'Invitado'}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));