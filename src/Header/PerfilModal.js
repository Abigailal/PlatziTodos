import React from 'react';
import ReactDOM from 'react-dom';


function Perfil({ children }) {
  return ReactDOM.createPortal(
    <div className="PerfilBackground">
      {children}
    </div>,
    document.getElementById('perfil')
  );
}
  
export { Perfil };
