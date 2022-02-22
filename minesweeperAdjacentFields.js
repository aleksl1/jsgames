// export const getAdjacentFields = () => {
//   const adjacentFields = [
//     { name: "topLeft", adjacentIds: [1, boardSize, boardSize + 1] },
//     {
//       name: "topRight",
//       adjacentIds: [
//         boardSize - 2,
//         boardSize - 1 + boardSize,
//         boardSize - 2 + boardSize,
//       ],
//     },
//     {
//       name: "bottomLeft",
//       adjacentIds: [
//         boardSize * boardSize - boardSize + 1,
//         boardSize * boardSize - boardSize - boardSize,
//         boardSize * boardSize - boardSize - boardSize + 1,
//       ],
//     },
//     {
//       name: "bottomRight",
//       adjacentIds: [
//         boardSize * boardSize - 2,
//         boardSize * boardSize - 1 - boardSize,
//         boardSize * boardSize - 2 - boardSize,
//       ],
//     },
//     {
//       name: "top",
//       adjacentIds: [
//         i - 1,
//         i + 1,
//         i - 1 + boardSize,
//         i + boardSize,
//         i + 1 + boardSize,
//       ],
//     },
//     {
//       name: "right",
//       adjacentIds: [
//         i - boardSize,
//         i - boardSize - 1,
//         i - 1,
//         i - 1 + boardSize,
//         i + boardSize,
//       ],
//     },
//     {
//       name: "bottom",
//       adjacentIds: [
//         i - 1,
//         i + 1,
//         i - 1 - boardSize,
//         i - boardSize,
//         i + 1 - boardSize,
//       ],
//     },
//     {
//       name: "left",
//       adjacentIds: [
//         i - boardSize,
//         i + 1 - boardSize,
//         i + 1,
//         i + 1 + boardSize,
//         i + boardSize,
//       ],
//     },
//     {
//       name: "center",
//       adjacentIds: [
//         i - 1,
//         i + 1,
//         i - 1 - boardSize,
//         i - boardSize,
//         i + 1 - boardSize,
//         i - 1 + boardSize,
//         i + boardSize,
//         i + 1 + boardSize,
//       ],
//     },
//   ];
// return adjacentFields;
// }
