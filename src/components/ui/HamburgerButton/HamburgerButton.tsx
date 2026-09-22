import React from 'react';

interface HamburgerButtonProps {
  isOpen: boolean;
  toggle: (isOpen: boolean) => void;
}

export const HamburgerButton = ({ isOpen, toggle }: HamburgerButtonProps) => {
  return (
    <>
      <style>{`
        #hamburger-checkbox { display: none; }
        .hamburger-toggle { position: relative; width: 35px; height: 35px; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; transition-duration: .5s; }
        .hamburger-bars { width: 100%; height: 4px; background-color: #227c38; border-radius: 4px; }
        #hamburger-bar2 { transition-duration: .8s; }
        #hamburger-bar1, #hamburger-bar3 { width: 70%; }
        #hamburger-checkbox:checked + .hamburger-toggle .hamburger-bars { position: absolute; transition-duration: .5s; }
        #hamburger-checkbox:checked + .hamburger-toggle #hamburger-bar2 { transform: scaleX(0); transition-duration: .5s; }
        #hamburger-checkbox:checked + .hamburger-toggle #hamburger-bar1 { width: 100%; transform: rotate(45deg); transition-duration: .5s; }
        #hamburger-checkbox:checked + .hamburger-toggle #hamburger-bar3 { width: 100%; transform: rotate(-45deg); transition-duration: .5s; }
        #hamburger-checkbox:checked + .hamburger-toggle { transition-duration: .5s; transform: rotate(180deg); }
      `}</style>
      <input 
        type="checkbox" 
        id="hamburger-checkbox"
        checked={isOpen}
        onChange={(e) => toggle(e.target.checked)}
      />
      <label htmlFor="hamburger-checkbox" className="hamburger-toggle">
          <div className="hamburger-bars" id="hamburger-bar1"></div>
          <div className="hamburger-bars" id="hamburger-bar2"></div>
          <div className="hamburger-bars" id="hamburger-bar3"></div>
      </label>
    </>
  );
};
