import React, { useEffect, useState } from 'react';
import { generateSolvableBoard } from '../func/genBoard';

const clearBoard = [1, 2, 3, 4, 5, 6, 7, 8, 0];
const clearBoardStr = clearBoard.join();
const ExampleBoard = [2, 3, 6, 4, 1, 5, 7, 8, 0];

const Board8: React.FC = () => {
    const [tiles, setTiles] = useState<(number | null)[]>(ExampleBoard);
    const [isCleared, setIsCleared] = useState<boolean>(false);
    const shuffleBoard = () => {
        const newBoard = generateSolvableBoard(3);
        setTiles(newBoard);
    };

    useEffect(() => {
        shuffleBoard();
    }, []);

    useEffect(() =>{
        const isCleared = (tiles.join() === clearBoardStr);
        setIsCleared(isCleared);
        if (isCleared) {
            //非同期で、ボードの見た目が完成してからアラートを出すように
            setTimeout(() => {
                alert('クリアしました！再度遊ぶ時は、リセットをクリック。');
            }, 0);
        }
    }, [tiles]);

    const tileSwap = (index: number) => {
        if(isCleared) return;//クリア時のスワップを禁止
        const clickIndex = index;
        const emptyIndex = tiles.indexOf(0); //nullの場所
        if(emptyIndex === clickIndex) return;
        const isSwap = checkSwap(clickIndex, emptyIndex); //見ている二つが隣接しているか

        if (isSwap) {
            //コピータイルを入れ替えて、setTiles
            const newTiles = [...tiles];
            [newTiles[clickIndex], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[clickIndex]];
            setTiles(newTiles);
        }
    };

    const checkSwap = (clickInd: number, emptyInd: number): boolean => {
        //クリックしたボタンの位置
        const row1 = Math.floor(clickInd / 3);
        const col1 = clickInd % 3;
        //nullボタンの位置
        const row2 = Math.floor(emptyInd / 3);
        const col2 = emptyInd % 3;
        //x,y座標の差が1なら隣接
        return (Math.abs(row1 - row2) + Math.abs(col1 - col2)) === 1;
    };

    return (
        <div className="flex-grow flex flex-col items-center justify-center p-8 space-y-4">
            <div className="grid grid-cols-3">
                {tiles.map((tile, index) => (
                    <div
                    key={index}
                    onClick={() => tile !== 0 && tileSwap(index)}
                    className="w-16 h-16 flex items-center justify-center border text-xl font-bold bg-gray-200 cursor-pointer select-none"
                    >
                        {tile !== 0 ? tile : ''}
                    </div>
                ))}
            </div>

            {/* 👇 Boardの下に配置 */}
            <button
            onClick={shuffleBoard}
            className="bg-gray-300 px-4 py-2 rounded shadow"
            >
            リセット
            </button>
        </div>
    );
};

export default Board8;
