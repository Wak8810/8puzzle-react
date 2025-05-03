import React from 'react';

type HeaderProps = {
    showBoard8: () => void;
    showBoard15: () => void;
}

const Header: React.FC<HeaderProps> = ({ showBoard8, showBoard15 }) => {
    return (
        <header className="p-4 bg-blue-300 text-white flex justify-between items-center">
            <h1 className="text-3xl font-bold">スライドパズル</h1>
            <div className="space-x-2">
                <button onClick={showBoard8} className="bg-blue-500 px-3 py-1 rounded">8パズル</button>
                <button onClick={showBoard15} className="bg-blue-500 px-3 py-1 rounded">15パズル</button>
            </div>
        </header>
    );
};

export default Header;
