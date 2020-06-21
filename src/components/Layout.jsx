import React from 'react';
import AlertModal from './AlertModal';

export default function Layout({ component: Component }) {
  return (
    <>
      <header>
        <nav className="header navbar navbar-expand-lg navbar-light bg-faded border-bottom">
          <h1 className="navbar-brand mb-0">React Chat</h1>
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
        <Component />
      </main>
      <AlertModal />
    </>
  );
}
