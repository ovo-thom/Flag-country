import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* les balises importées depuis la balise IMG sont accessible dans le dossier public */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;