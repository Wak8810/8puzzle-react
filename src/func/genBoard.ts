export function generateSolvableBoard(size: number): number[] {
    let board: number[] = [];
    
    do {
        board = shuffle([...Array(size * size).keys()]);
    } while (!isSolvable(board, size));
    
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
    
// 逆転数と空白位置による可解判定
function isSolvable(board: number[], size: number): boolean {
    let inversions = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = i + 1; j < board.length; j++) {
            if (board[i] !== 0 && board[j] !== 0 && board[i] > board[j]) {
                inversions++;
            }
        }
    }
    
    if (size % 2 === 1) {
    // 奇数サイズ: 逆転数が偶数なら可解
    return inversions % 2 === 0;
    } else {
    // 偶数サイズ: 空白の行（下から数えて）と逆転数のパリティで判定
    const blankIndex = board.indexOf(0);
    const rowFromBottom = size - Math.floor(blankIndex / size);
    const isEvenRowFromBottom = rowFromBottom % 2 === 0;
    const isEvenInversions = inversions % 2 === 0;
    
    return isEvenRowFromBottom !== isEvenInversions;
    }
}
    