var range = document.querySelector('input[type="range"]')
const calcProgressLength = (min, value, max) => `${((value - min) / (max - min ) * 100)}%`

range.style.setProperty('--value', range.value);
range.style.setProperty('--min', range.min == '' ? '0' : range.min);
range.style.setProperty('--max', range.max == '' ? '100' : range.max);
range.style.setProperty('--progress-length', calcProgressLength(range.min, range.value, range.max))
range.addEventListener('input', () => range.style.setProperty('--value', range.value));
range.addEventListener('input', () => range.style.setProperty('--progress-length', calcProgressLength(range.min, range.value, range.max)));