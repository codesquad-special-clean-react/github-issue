import color from '../utils/color';

function getRandomId() {
  return parseInt(Math.random() * 10000000, 10);
}

function getRandomColor() {
  const randomColor = Math.round(Math.random() * 0xffffff).toString(16);
  return `#${randomColor.padStart(6, 0)}`;
}

function getTextColor(colorString) {
  const colorNumber = parseInt(colorString.split('#').join(''), 16);
  if (colorNumber < 0xff7f00) return color.white;
  return color.black;
}

function moveToBottomOfPage() {
  window.scrollTo(0, document.body.scrollHeight);
}

export { getRandomId, getRandomColor, getTextColor, moveToBottomOfPage };
