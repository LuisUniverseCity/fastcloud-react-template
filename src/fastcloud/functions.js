export function NumbersOnly(e) {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}