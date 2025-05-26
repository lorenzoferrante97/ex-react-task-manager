import { createPortal } from 'react-dom';

export default function Portal({ children, domElement }) {
  const portalRoot = document.querySelector(domElement);
  return createPortal(children, portalRoot);
}
