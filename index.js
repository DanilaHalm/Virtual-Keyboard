/* eslint-disable no-unused-expressions */
/* eslint linebreak-style: ["error", "windows"] */
const body = document.querySelector('body');

const wrapperCreate = document.createElement('div');
wrapperCreate.classList.add('wrapper');

const paragraphCreate = document.createElement('p');
paragraphCreate.classList.add('paragraph');

const textareaCreate = document.createElement('textarea');
textareaCreate.classList.add('textarea');

const keyboardWrapperCreate = document.createElement('div');
keyboardWrapperCreate.classList.add('keyboard-wrapper');

body.append(wrapperCreate);

const wrapper = document.querySelector('.wrapper');
wrapper.append(paragraphCreate);
wrapper.append(textareaCreate);
wrapper.append(keyboardWrapperCreate);

const paragraph = document.querySelector('.paragraph');
// eslint-disable-next-line no-unused-vars
const textarea = document.querySelector('.textarea').focus();
const keyboardWrapper = document.querySelector('.keyboard-wrapper');
let languageUp = false;
let languageEng = true;
let shifted = false;
paragraph.innerHTML += 'OC Windows <br> Shift + Alt Смена языка';

for (let i = 0; i < 5; i += 1) {
  const arr = ['boardone', 'boardtwo', 'boardthree', 'boardfour', 'boardfive'];
  const boardCreate = document.createElement('div');
  boardCreate.classList.add('board');
  boardCreate.classList.add(arr[i]);
  keyboardWrapper.append(boardCreate);
}

for (let i = 0; i < 15; i += 1) {
  const board = document.querySelectorAll('.board');
  if (i < 14) {
    const buttonCreate = document.createElement('div');
    buttonCreate.classList.add('button');
    board[0].append(buttonCreate);
  }
  if (i < 13) {
    const buttonCreate = document.createElement('div');
    buttonCreate.classList.add('button');
    board[2].append(buttonCreate);
    const buttonCreateTwo = document.createElement('div');
    buttonCreateTwo.classList.add('button');
    board[3].append(buttonCreateTwo);
  }
  if (i < 9) {
    const buttonCreate = document.createElement('div');
    buttonCreate.classList.add('button');
    board[4].append(buttonCreate);
  }
  const buttonCreate = document.createElement('div');
  buttonCreate.classList.add('button');
  board[1].append(buttonCreate);
}
// -----------------------------TEXT IN BUTTONS------------------------------------//
const buttonsCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const buttonKeysEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const buttonKeysEngUp = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

const buttonKeysRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const buttonKeysRusUp = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

const buttonList = document.querySelectorAll('.button');

for (let i = 0; i < buttonKeysEng.length; i += 1) {
  if (buttonKeysRus[i] === 'Control') buttonList[i].innerHTML = 'Ctrl';
  else if (buttonKeysRus[i] === 'Meta') buttonList[i].innerHTML = 'Win';
  else if (buttonKeysRus[i] === 'AltGraph') buttonList[i].innerHTML = 'Alt Gr';
  else if (buttonKeysRus[i] === 'ArrowUp') buttonList[i].innerHTML = '↑';
  else if (buttonKeysRus[i] === 'ArrowLeft') buttonList[i].innerHTML = '←';
  else if (buttonKeysRus[i] === 'ArrowRight') buttonList[i].innerHTML = '→';
  else if (buttonKeysRus[i] === 'ArrowDown') buttonList[i].innerHTML = '↓';
  else {
    buttonList[i].innerHTML = buttonKeysEng[i];
  }
}
Array.from(buttonList).find((a) => a.innerHTML === 'CapsLock').id = 'Caps';

// eslint-disable-next-line func-names
const changeLanguage = function () {
  if (languageEng) {
    for (let i = 0; i < buttonKeysRus.length; i += 1) {
      if (buttonKeysRus[i] === 'Control') buttonList[i].innerHTML = 'Ctrl';
      else if (buttonKeysRus[i] === 'Meta') buttonList[i].innerHTML = 'Win';
      else if (buttonKeysRus[i] === 'AltGraph') buttonList[i].innerHTML = 'Alt Gr';
      else if (buttonKeysRus[i] === 'ArrowUp') buttonList[i].innerHTML = '↑';
      else if (buttonKeysRus[i] === 'ArrowLeft') buttonList[i].innerHTML = '←';
      else if (buttonKeysRus[i] === 'ArrowRight') buttonList[i].innerHTML = '→';
      else if (buttonKeysRus[i] === 'ArrowDown') buttonList[i].innerHTML = '↓';
      else {
        // eslint-disable-next-line max-len
        // eslint-disable-next-line no-unused-expressions
        // eslint-disable-next-line max-len
        languageUp ? buttonList[i].innerHTML = buttonKeysRusUp[i] : buttonList[i].innerHTML = buttonKeysRus[i];
      }
    }
    languageEng = false;
    localStorage.setItem('languageEng', 'false');
  } else {
    for (let i = 0; i < buttonKeysEng.length; i += 1) {
      if (buttonKeysRus[i] === 'Control') buttonList[i].innerHTML = 'Ctrl';
      else if (buttonKeysRus[i] === 'Meta') buttonList[i].innerHTML = 'Win';
      else if (buttonKeysRus[i] === 'AltGraph') buttonList[i].innerHTML = 'Alt Gr';
      else if (buttonKeysRus[i] === 'ArrowUp') buttonList[i].innerHTML = '↑';
      else if (buttonKeysRus[i] === 'ArrowLeft') buttonList[i].innerHTML = '←';
      else if (buttonKeysRus[i] === 'ArrowRight') buttonList[i].innerHTML = '→';
      else if (buttonKeysRus[i] === 'ArrowDown') buttonList[i].innerHTML = '↓';
      else {
        // eslint-disable-next-line max-len
        languageUp ? buttonList[i].innerHTML = buttonKeysEngUp[i] : buttonList[i].innerHTML = buttonKeysEng[i];
      }
    }
    languageEng = true;
    localStorage.setItem('languageEng', 'true');
  }
};

// eslint-disable-next-line func-names
const changeUp = function () {
  if (!languageUp) {
    for (let i = 0; i < buttonKeysRus.length; i += 1) {
      if (buttonKeysRus[i] === 'Control') buttonList[i].innerHTML = 'Ctrl';

      else if (buttonKeysRus[i] === '1' && shifted) buttonList[i].innerHTML = '!';
      else if (buttonKeysRus[i] === '2' && shifted) buttonList[i].innerHTML = languageEng ? '@' : '"';
      else if (buttonKeysRus[i] === '3' && shifted) buttonList[i].innerHTML = languageEng ? '#' : '№';
      else if (buttonKeysRus[i] === '4' && shifted) buttonList[i].innerHTML = languageEng ? '$' : ';';
      else if (buttonKeysRus[i] === '5' && shifted) buttonList[i].innerHTML = '%';
      else if (buttonKeysRus[i] === '6' && shifted) buttonList[i].innerHTML = languageEng ? '^' : ':';
      else if (buttonKeysRus[i] === '7' && shifted) buttonList[i].innerHTML = languageEng ? '&' : '?';
      else if (buttonKeysRus[i] === '8' && shifted) buttonList[i].innerHTML = '*';
      else if (buttonKeysRus[i] === '9' && shifted) buttonList[i].innerHTML = '(';
      else if (buttonKeysRus[i] === '0' && shifted) buttonList[i].innerHTML = ')';
      else if (buttonKeysRus[i] === '-' && shifted) buttonList[i].innerHTML = '_';
      else if (buttonKeysRus[i] === '=' && shifted) buttonList[i].innerHTML = '+';

      else if (buttonKeysRus[i] === 'Meta') buttonList[i].innerHTML = 'Win';
      else if (buttonKeysRus[i] === 'AltGraph') buttonList[i].innerHTML = 'Alt Gr';
      else if (buttonKeysRus[i] === 'ArrowUp') buttonList[i].innerHTML = '↑';
      else if (buttonKeysRus[i] === 'ArrowLeft') buttonList[i].innerHTML = '←';
      else if (buttonKeysRus[i] === 'ArrowRight') buttonList[i].innerHTML = '→';
      else if (buttonKeysRus[i] === 'ArrowDown') buttonList[i].innerHTML = '↓';
      else {
        // eslint-disable-next-line max-len
        languageEng ? buttonList[i].innerHTML = buttonKeysEng[i] : buttonList[i].innerHTML = buttonKeysRus[i];
      }
    }
    localStorage.setItem('languageUp', 'false');
  } else {
    for (let i = 0; i < buttonKeysEng.length; i += 1) {
      if (buttonKeysRus[i] === 'Control') buttonList[i].innerHTML = 'Ctrl';

      else if (buttonKeysRus[i] === '1' && shifted) buttonList[i].innerHTML = '!';
      else if (buttonKeysRus[i] === '2' && shifted) buttonList[i].innerHTML = languageEng ? '@' : '"';
      else if (buttonKeysRus[i] === '3' && shifted) buttonList[i].innerHTML = languageEng ? '#' : '№';
      else if (buttonKeysRus[i] === '4' && shifted) buttonList[i].innerHTML = languageEng ? '$' : ';';
      else if (buttonKeysRus[i] === '5' && shifted) buttonList[i].innerHTML = '%';
      else if (buttonKeysRus[i] === '6' && shifted) buttonList[i].innerHTML = languageEng ? '^' : ':';
      else if (buttonKeysRus[i] === '7' && shifted) buttonList[i].innerHTML = languageEng ? '&' : '?';
      else if (buttonKeysRus[i] === '8' && shifted) buttonList[i].innerHTML = '*';
      else if (buttonKeysRus[i] === '9' && shifted) buttonList[i].innerHTML = '(';
      else if (buttonKeysRus[i] === '0' && shifted) buttonList[i].innerHTML = ')';
      else if (buttonKeysRus[i] === '-' && shifted) buttonList[i].innerHTML = '_';
      else if (buttonKeysRus[i] === '=' && shifted) buttonList[i].innerHTML = '+';
      else if (buttonKeysRus[i] === 'Meta') buttonList[i].innerHTML = 'Win';
      else if (buttonKeysRus[i] === 'AltGraph') buttonList[i].innerHTML = 'Alt Gr';
      else if (buttonKeysRus[i] === 'ArrowUp') buttonList[i].innerHTML = '↑';
      else if (buttonKeysRus[i] === 'ArrowLeft') buttonList[i].innerHTML = '←';
      else if (buttonKeysRus[i] === 'ArrowRight') buttonList[i].innerHTML = '→';
      else if (buttonKeysRus[i] === 'ArrowDown') buttonList[i].innerHTML = '↓';
      else {
        // eslint-disable-next-line max-len
        languageEng ? buttonList[i].innerHTML = buttonKeysEngUp[i] : buttonList[i].innerHTML = buttonKeysRusUp[i];
      }
    }
    localStorage.setItem('languageUp', 'true');
  }
};

function runOnKeys(func, ...keys) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.key);
    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      if (!pressed.has(key)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.key);
  });
}
runOnKeys(changeLanguage, 'Shift', 'Alt');

// --------------------------------------------------------//

document.addEventListener('DOMContentLoaded', () => {
  if (JSON.parse(localStorage.getItem('languageEng'))) {
    languageEng = false;
    changeLanguage();
  } else {
    languageEng = true;
    changeLanguage();
  }
  if (JSON.parse(localStorage.getItem('languageUp'))) {
    languageUp = true;
    changeUp();
    document.querySelector('#Caps').classList.add('pressed');
  } else {
    languageUp = false;
    changeUp();
    document.querySelector('#Caps').classList.remove('pressed');
  }
});

// -----------------------------PUSH BUTTONS----------------------------------------//
const a = [];
document.addEventListener('keydown', (event) => {
  // ----------------------------------------------------------------------WAS ERRORS
  if (!buttonsCode.includes(event.code)) {
    return;
  }
  const text = document.querySelector('.textarea');
  if (event.code === 'CapsLock') {
    languageUp ? languageUp = false : languageUp = true;
    changeUp();
  } else if (event.code === 'Tab') {
    event.preventDefault();
    buttonList[buttonsCode.indexOf(event.code)].classList.add('pressed');
    // eslint-disable-next-line no-shadow
    const a = text.selectionStart;
    text.value = `${text.value.substring(0, text.selectionStart)}    ${text.value.substring(text.selectionStart)}`;
    // eslint-disable-next-line no-multi-assign
    text.selectionStart = text.selectionEnd = a + 4;
  } else if (event.code === 'ArrowUp') {
    event.preventDefault();
    buttonList[buttonsCode.indexOf(event.code)].classList.add('pressed');
    text.value = `${text.value.substring(0, text.selectionStart)}↑${text.value.substring(text.selectionStart)}`;
  } else if (event.code === 'ArrowLeft') {
    event.preventDefault();
    buttonList[buttonsCode.indexOf(event.code)].classList.add('pressed');
    text.value = `${text.value.substring(0, text.selectionStart)}←${text.value.substring(text.selectionStart)}`;
  } else if (event.code === 'ArrowDown') {
    event.preventDefault();
    buttonList[buttonsCode.indexOf(event.code)].classList.add('pressed');
    text.value = `${text.value.substring(0, text.selectionStart)}↓${text.value.substring(text.selectionStart)}`;
  } else if (event.code === 'ArrowRight') {
    event.preventDefault();
    buttonList[buttonsCode.indexOf(event.code)].classList.add('pressed');
    text.value = `${text.value.substring(0, text.selectionStart)}→${text.value.substring(text.selectionStart)}`;
  } else if (event.key === 'Shift') {
    if (event.repeat) { return; }
    buttonList[buttonsCode.indexOf(event.code)].classList.add('pressed');
    shifted = true;
    languageUp ? languageUp = false : languageUp = true;
    changeUp();
  } else {
    buttonList[buttonsCode.indexOf(event.code)].classList.add('pressed');
    a.push(event.key);
  }
});

document.addEventListener('keyup', (event) => {
  // ---------------------------------------------------------------------- WAS ERRORS
  if (!buttonsCode.includes(event.code)) {
    return;
  }
  if (event.code === 'CapsLock') {
    buttonList[buttonsCode.indexOf(event.code)].classList.toggle('pressed');
  } else if (event.key === 'Shift') {
    buttonList[buttonsCode.indexOf(event.code)].classList.remove('pressed');
    shifted = false;
    languageUp ? languageUp = false : languageUp = true;
    changeUp();
  } else {
    buttonList[buttonsCode.indexOf(event.code)].classList.remove('pressed');
  }
});

function runOnKeysMouse(func) {
  const pressed = new Set();
  document.addEventListener('click', (event) => {
    if (event.target.innerHTML === 'Shift' || event.target.innerHTML === 'Alt') { pressed.add(event.target.innerHTML); }
    if (pressed.size === 2) {
      func();
      pressed.clear();
    }
  });
}
runOnKeysMouse(changeLanguage);
// ------------------------------CLICK ---------------------//

// eslint-disable-next-line no-shadow
buttonList.forEach((a) => a.addEventListener('mousedown', (event) => {
  const text = document.querySelector('.textarea');
  const unnesessary = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'Shift', '↑', 'Ctrl', 'Win', 'Alt', 'Alt Gr', '←', '↓', '→'];
  const area = document.querySelector('.textarea');
  if (event.target.innerHTML === 'CapsLock') {
    languageUp ? languageUp = false : languageUp = true;
    changeUp();
  } else if (event.target.innerHTML === ' ') {
    event.target.classList.add('pressed');
    // eslint-disable-next-line no-shadow
    const a = text.selectionStart;
    // eslint-disable-next-line func-names
    area.onblur = function () {
      area.focus();
    };
    text.value = `${text.value.substring(0, text.selectionStart)} ${text.value.substring(text.selectionStart)}`;
    text.selectionStart = a + 1;
  } else if (event.target.innerHTML === 'Backspace') {
    event.target.classList.add('pressed');
    event.target.classList.add('pressed');
    // eslint-disable-next-line max-len
    text.value = text.value.substring(0, text.selectionStart - 1) + text.value.substring(text.selectionStart);
  } else if (event.target.innerHTML === 'Tab') {
    event.target.classList.add('pressed');
    // eslint-disable-next-line no-shadow
    const a = text.selectionStart;
    text.value = `${text.value.substring(0, text.selectionStart)}    ${text.value.substring(text.selectionStart)}`;
    // eslint-disable-next-line no-multi-assign
    text.selectionStart = text.selectionEnd = a + 4;
  } else if (event.target.innerHTML === 'Delete') {
    event.target.classList.add('pressed');
    // eslint-disable-next-line max-len
    text.value = text.value.substring(0, text.selectionStart) + text.value.substring(text.selectionStart + 1);
  } else if (event.target.innerHTML === 'Enter') {
    event.target.classList.add('pressed');
    text.value = `${text.value.substring(0, text.selectionStart)}\n${text.value.substring(text.selectionStart)}`;
  } else if (event.target.innerHTML === 'Shift') {
    event.target.classList.add('pressed');
    shifted ? shifted = false : shifted = true;
    languageUp ? languageUp = false : languageUp = true;
    changeUp();
  } else if (event.target.innerHTML === 'Ctrl') {
    event.target.classList.add('pressed');
  } else if (event.target.innerHTML === 'Alt') {
    event.target.classList.add('pressed');
  } else if (event.target.innerHTML === '↑') {
    event.target.classList.add('pressed');
    text.value = `${text.value.substring(0, text.selectionStart)}↑${text.value.substring(text.selectionStart)}`;
  } else if (event.target.innerHTML === '←') {
    event.target.classList.add('pressed');
    text.value = `${text.value.substring(0, text.selectionStart)}←${text.value.substring(text.selectionStart)}`;
  } else if (event.target.innerHTML === '↓') {
    event.target.classList.add('pressed');
    text.value = `${text.value.substring(0, text.selectionStart)}↓${text.value.substring(text.selectionStart)}`;
  } else if (event.target.innerHTML === '→') {
    event.target.classList.add('pressed');
    text.value = `${text.value.substring(0, text.selectionStart)}→${text.value.substring(text.selectionStart)}`;
  } else { event.target.classList.add('pressed'); }
  if (!unnesessary.includes(event.target.innerHTML)) {
    text.value += event.target.innerHTML;
    if (shifted) {
      shifted = false;
      languageUp ? languageUp = false : languageUp = true;
      changeUp();
    }
  }
}));

// eslint-disable-next-line no-shadow
buttonList.forEach((a) => a.addEventListener('mouseup', (event) => {
  if (event.target.innerHTML === 'CapsLock') {
    event.target.classList.toggle('pressed');
  } else { event.target.classList.remove('pressed'); }
}));
