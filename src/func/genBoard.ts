export function generateSolvableBoard(): number[] {
    let board: number[] = []; 
    do {
        board = shuffle([...Array(9).keys()]);
    } while (!isSolvable(board));

    return board;
}
    
// Fisher-Yatesでシャッフル
function shuffle(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
    
// 逆転数を数えて偶数かどうかを判定
function isSolvable(board: number[]): boolean {
    let inversions = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = i + 1; j < board.length; j++) {
            if (board[i] && board[j] && board[i] > board[j]) {
                inversions++;
            }
        }
    }
    return inversions % 2 === 0;
}
    