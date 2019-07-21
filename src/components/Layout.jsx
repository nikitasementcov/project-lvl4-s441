import React from 'react';
import AlertModal from './AlertModal';

export default function Layout({ component: Component, ...props }) {
  return (
    <>
      <header>
        <nav className="header navbar navbar-expand-lg navbar-light bg-faded border-bottom">
          <div className="navbar-brand">React Chat</div>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </header>
      <main className="main container-fluid">
        <Component {...props} />
      </main>
      <AlertModal />
    </>
  );
}
