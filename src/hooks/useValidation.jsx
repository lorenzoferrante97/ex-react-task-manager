import { useCallback, useState } from 'react';

export default function useValidation() {
  // debounce
  function debounce(callback, delay) {
    let timer;
    return function (value) {
      clearTimeout(timer);
      timer = setTimeout(() => callback(value), delay);
    };
  }

  const symbols = '!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~';

  const [errorMessages, setErrorMessages] = useState({
    titleErr: '',
    descErr: '',
    statusErr: '',
  });

  const validateTitle = useCallback(
    debounce((title) => {
      if (title == '' || title.trim().length == 0) {
        console.log('sono nell if 1');
        setErrorMessages({ ...errorMessages, titleErr: 'Il titolo non può essere vuoto' });
      } else if (Array.from(title).some((char) => symbols.includes(char))) {
        setErrorMessages({ ...errorMessages, titleErr: 'Il titolo non può contenere i seguenti caratteri speciali: !@#$%^&*()-_=+[]{}|;:\'",.<>?/`~' });
      } else {
        setErrorMessages({ ...errorMessages, titleErr: '' });
      }
    }, 500),
    []
  );

  return [validateTitle, errorMessages];
}
