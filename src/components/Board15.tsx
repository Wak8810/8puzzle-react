import React, { useEffect, useState } from 'react';
import { generateSolvableBoard } from '../func/genBoard';

const clearBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
const clearBoardStr = clearBoard.join();
const ExampleBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15];

const Board15: React.FC = () => {
    const [tiles, setTiles] = useState<(number | null)[]>(ExampleBoard);
    const [isCleared, setIsCleared] = useState<boolean>(false);
    const shuffleBoard = () => {
        const newBoard = generateSolvableBoard(4);
        setTiles(newBoard);
    };

    useEffect(() => {
        shuffleBoard();
    }, []);

    useEffect(() =>{
        const isCleared = (tiles.join() === clearBoardStr);
        setIsCleared(isCleared);
        if (isCleared) {
            setTimeout(() => {
                alert('クリアしました！再度遊ぶ時は、リセットをクリック。');
            }, 0);
        }
    }, [tiles]);

    const tileSwap = (index: number) => {
        if(isCleared) return;
        const clickIndex = index;
        const emptyIndex = tiles.indexOf(0);
        if(emptyIndex === clickIndex) return;
        const isSwap = checkSwap(clickIndex, emptyIndex);

        if (isSwap) {
            const newTiles = [...tiles];
            [newTiles[clickIndex], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[clickIndex]];
            setTiles(newTiles);
        }
    };

    const checkSwap = (clickInd: number, emptyInd: number): boolean => {
        const row1 = Math.floor(clickInd / 4);
        const col1 = clickInd % 4;
        const row2 = Math.floor(emptyInd / 4);
        const col2 = emptyInd % 4;
        return (Math.abs(row1 - row2) + Math.abs(col1 - col2)) === 1;
    };

    return (
        <div className="flex-grow flex flex-col items-center justify-center p-8 space-y-4">
            <div className="grid grid-cols-4 gap-1 w-52">
                {tiles.map((tile, index) => (
                    <div
                    key={index}
                    onClick={() => tile !== 0 && tileSwap(index)}
                    className="w-12 h-12 flex items-center justify-center border text-lg font-bold bg-gray-200 cursor-pointer select-none"
                    >
                        {tile !== 0 ? tile : ''}
                    </div>
                ))}
            </div>

            <button
            onClick={shuffleBoard}
            className="bg-gray-300 px-4 py-2 rounded shadow"
            >
            リセット
            </button>
        </div>
    );
};

export default Board15;
