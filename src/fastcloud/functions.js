export function NumbersOnly(e) {
  //on key down
  const allowedKeys = [
    'Backspace', 'Delete', 'Tab', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End'
  ];
  if (e.ctrlKey || e.metaKey) {
    return;
  }
  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}
 
export function CleanNonNumbers(e) {
  //on input
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
}
