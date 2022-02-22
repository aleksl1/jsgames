function initGame(edgeSize, bombFieldsAmount) {
  const mineBoard = document.querySelector(".minesweeper-grid");
  const boardSize = edgeSize; //**  fields
  const bombAmount = bombFieldsAmount;
  let userClickFlag = false;

  const createBoard = () => {
    const numberOfFields = boardSize * boardSize;
    for (let i = 0; i < numberOfFields; i++) {
      const field = document.createElement("div");

      field.classList.add("minesweeper-field");
      field.classList.add("unknown-field");
      field.setAttribute("data-id", i);
      field.setAttribute("tabindex", "0");
      field.setAttribute("data-bomb", false);

      if (i < boardSize) {
        field.setAttribute("data-edge", "top");
      } else if (i >= numberOfFields - boardSize) {
        field.setAttribute("data-edge", "bottom");
      } else if (i % boardSize === 0) {
        field.setAttribute("data-edge", "left");
      } else if (i % boardSize === boardSize - 1) {
        field.setAttribute("data-edge", "right");
      } else {
        field.setAttribute("data-edge", "false");
      }

      if (i === 0) {
        field.setAttribute("data-edge", "topLeft");
      } else if (i === boardSize - 1) {
        field.setAttribute("data-edge", "topRight");
      } else if (i === numberOfFields - 1) {
        field.setAttribute("data-edge", "bottomRight");
      } else if (i === numberOfFields - boardSize) {
        field.setAttribute("data-edge", "bottomLeft");
      }

      mineBoard.appendChild(field);
    }
  };

  const plantBombs = () => {
    let bombsPlanted = 0;
    const plantSingleBomb = () => {
      const randomFieldId = Math.floor(Math.random() * 400);
      if (allFields[randomFieldId].dataset.bomb === "false") {
        allFields[randomFieldId].setAttribute("data-bomb", true);
        bombsPlanted += 1;
      } else {
        plantSingleBomb();
      }
    };
    do {
      plantSingleBomb();
    } while (bombsPlanted < bombAmount);
  };

  const findRandomBombs = (fieldId) => {
    if (allFields[fieldId].dataset.bomb === "false") {
      return false;
    } else return true;
  };

  const addFieldBombValues = (fieldsList) => {
    const numberOfFields = fieldsList.length;
    for (let i = 0; i < numberOfFields; i++) {
      //conditions for corners
      if (fieldsList[i].dataset.edge === "topLeft") {
        let fieldBombValue = 0;
        const neighbourIds = [i + 1, i + boardSize, i + boardSize + 1];
        neighbourIds.forEach((id) => {
          if (findRandomBombs(id)) {
            fieldBombValue = fieldBombValue + 1;
          }
        });
        fieldsList[i].setAttribute("data-value", fieldBombValue);
        fieldsList[i].setAttribute("data-adjacent", neighbourIds);
        fieldsList[i].setAttribute("data-waschecked", "false");
      } else if (fieldsList[i].dataset.edge === "topRight") {
        let fieldBombValue = 0;
        const neighbourIds = [
          boardSize - 2,
          boardSize - 1 + boardSize,
          boardSize - 2 + boardSize,
        ];
        neighbourIds.forEach((id) => {
          if (findRandomBombs(id)) {
            fieldBombValue = fieldBombValue + 1;
          }
        });
        fieldsList[i].setAttribute("data-value", fieldBombValue);
        fieldsList[i].setAttribute("data-adjacent", neighbourIds);
        fieldsList[i].setAttribute("data-waschecked", "false");
      } else if (fieldsList[i].dataset.edge === "bottomLeft") {
        let fieldBombValue = 0;
        const neighbourIds = [
          numberOfFields - boardSize + 1,
          numberOfFields - boardSize - boardSize,
          numberOfFields - boardSize - boardSize + 1,
        ];
        neighbourIds.forEach((id) => {
          if (findRandomBombs(id)) {
            fieldBombValue = fieldBombValue + 1;
          }
        });
        fieldsList[i].setAttribute("data-value", fieldBombValue);
        fieldsList[i].setAttribute("data-adjacent", neighbourIds);
        fieldsList[i].setAttribute("data-waschecked", "false");
      } else if (fieldsList[i].dataset.edge === "bottomRight") {
        let fieldBombValue = 0;
        const neighbourIds = [
          numberOfFields - 2,
          numberOfFields - 1 - boardSize,
          numberOfFields - 2 - boardSize,
        ];
        neighbourIds.forEach((id) => {
          if (findRandomBombs(id)) {
            fieldBombValue = fieldBombValue + 1;
          }
        });
        fieldsList[i].setAttribute("data-value", fieldBombValue);
        fieldsList[i].setAttribute("data-adjacent", neighbourIds);
        fieldsList[i].setAttribute("data-waschecked", "false");
      }

      //conditions for edges
      else if (fieldsList[i].dataset.edge === "top") {
        let fieldBombValue = 0;
        const neighbourIds = [
          i - 1,
          i + 1,
          i - 1 + boardSize,
          i + boardSize,
          i + 1 + boardSize,
        ];
        neighbourIds.forEach((id) => {
          if (findRandomBombs(id)) {
            fieldBombValue = fieldBombValue + 1;
          }
        });
        fieldsList[i].setAttribute("data-value", fieldBombValue);
        fieldsList[i].setAttribute("data-adjacent", neighbourIds);
        fieldsList[i].setAttribute("data-waschecked", "false");
      } else if (fieldsList[i].dataset.edge === "right") {
        {
          let fieldBombValue = 0;
          const neighbourIds = [
            i - boardSize,
            i - boardSize - 1,
            i - 1,
            i - 1 + boardSize,
            i + boardSize,
          ];
          neighbourIds.forEach((id) => {
            if (findRandomBombs(id)) {
              fieldBombValue = fieldBombValue + 1;
            }
          });
          fieldsList[i].setAttribute("data-value", fieldBombValue);
          fieldsList[i].setAttribute("data-adjacent", neighbourIds);
          fieldsList[i].setAttribute("data-waschecked", "false");
        }
      } else if (fieldsList[i].dataset.edge === "bottom") {
        {
          let fieldBombValue = 0;
          const neighbourIds = [
            i - 1,
            i + 1,
            i - 1 - boardSize,
            i - boardSize,
            i + 1 - boardSize,
          ];
          neighbourIds.forEach((id) => {
            if (findRandomBombs(id)) {
              fieldBombValue = fieldBombValue + 1;
            }
          });
          fieldsList[i].setAttribute("data-value", fieldBombValue);
          fieldsList[i].setAttribute("data-adjacent", neighbourIds);
          fieldsList[i].setAttribute("data-waschecked", "false");
        }
      } else if (fieldsList[i].dataset.edge === "left") {
        {
          let fieldBombValue = 0;
          const neighbourIds = [
            i - boardSize,
            i + 1 - boardSize,
            i + 1,
            i + 1 + boardSize,
            i + boardSize,
          ];
          neighbourIds.forEach((id) => {
            if (findRandomBombs(id)) {
              fieldBombValue = fieldBombValue + 1;
            }
          });
          fieldsList[i].setAttribute("data-value", fieldBombValue);
          fieldsList[i].setAttribute("data-adjacent", neighbourIds);
          fieldsList[i].setAttribute("data-waschecked", "false");
        }
      }
      //conditions for other fields
      else if (fieldsList[i].dataset.edge === "false") {
        {
          let fieldBombValue = 0;
          const neighbourIds = [
            i - 1,
            i + 1,
            i - 1 - boardSize,
            i - boardSize,
            i + 1 - boardSize,
            i - 1 + boardSize,
            i + boardSize,
            i + 1 + boardSize,
          ];
          neighbourIds.forEach((id) => {
            if (findRandomBombs(id)) {
              fieldBombValue = fieldBombValue + 1;
            }
          });
          fieldsList[i].setAttribute("data-value", fieldBombValue);
          fieldsList[i].setAttribute("data-adjacent", neighbourIds);
          fieldsList[i].setAttribute("data-waschecked", "false");
        }
      }
    }
  };

  createBoard();
  const allFields = document.querySelectorAll(".minesweeper-field");
  plantBombs();
  addFieldBombValues(allFields);
  allFields.forEach((field) => {
    if (field.dataset.bomb === "false") {
      field.textContent = field.dataset.value;
    }
  });

  const checkForBomb = (fieldId, prevFieldId) => {
    if (allFields[fieldId].dataset.waschecked === "true") {
      return;
    }
    if (
      prevFieldId &&
      prevFieldId !== fieldId &&
      allFields[fieldId].dataset.waschecked === "false"
    ) {
      if (
        allFields[fieldId].dataset.bomb === "false" &&
        allFields[fieldId].dataset.value === "0"
      ) {
        allFields[fieldId].classList.add("clear-field");
        allFields[fieldId].setAttribute("data-waschecked", "true");
        checkSurroundingFields(fieldId, prevFieldId);
      } else if (
        allFields[fieldId].dataset.bomb === "true" ||
        allFields[fieldId].dataset.value !== "0"
      ) {
        allFields[fieldId].classList.add("clear-field");
        allFields[fieldId].setAttribute("data-waschecked", "true");
        return;
      }
    } else {
      if (allFields[fieldId].dataset.bomb === "false") {
        allFields[fieldId].classList.add("clear-field");
        allFields[fieldId].setAttribute("data-waschecked", "true");
        userClickFlag = false;
        if (allFields[fieldId].dataset.value === "0") {
          checkSurroundingFields(fieldId);
        } else if (allFields[fieldId].dataset.value !== "0") {
          return;
        }
      } else if (allFields[fieldId].dataset.bomb === "true" && !userClickFlag) {
        allFields[fieldId].classList.add("clear-field");
        allFields[fieldId].setAttribute("data-waschecked", "true");
      } else if (allFields[fieldId].dataset.bomb === "true" && userClickFlag) {
        allFields[fieldId].classList.add("bomb-field");
        allFields[fieldId].setAttribute("data-waschecked", "true");
        endGame();
      }
    }
  };

  const checkSurroundingFields = (fieldId, ignoredField) => {
    const prevFieldId = fieldId;
    const adjacentFields = allFields[prevFieldId].dataset.adjacent.split(",");

    adjacentFields.forEach((field) => {
      checkForBomb(field, prevFieldId);
    });
  };

  const clickFieldHandler = (e) => {
    userClickFlag = true;
    checkForBomb(e.target.dataset.id, e.target.dataset.id);
  };

  mineBoard.addEventListener("click", clickFieldHandler);
  mineBoard.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.target.classList.toggle("marked-field");
  });

  const endGame = () => {
    allFields.forEach((field) => {
      if (field.dataset.bomb === "false") {
        allFields[field.dataset.id].classList.add("clear-field");
      } else if (field.dataset.bomb === "true") {
        allFields[field.dataset.id].classList.add("bomb-field");
      }
    });
  };
}

initGame(20, 80);
