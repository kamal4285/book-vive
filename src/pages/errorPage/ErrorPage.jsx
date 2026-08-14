import React from 'react';
import "./ErrorPage.css";

const ErrorPage = () => {
    return (

 
    <main className="error-page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <section className="error-card">
        <div className="error-icon">✦</div>

        <p className="error-code">404</p>

        <h1>Looks like you’re lost.</h1>

        <p className="error-description">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="error-actions">
          <a href="/" className="btn btn-primary">
            Go back home
            <span>→</span>
          </a>

          <a href="/contact" className="btn btn-secondary">
            Contact support
          </a>
        </div>

        <div className="error-footer">
          <span className="status-dot" />
          Everything else is working normally
        </div>
      </section>
    </main>
    )
};


export default ErrorPage;