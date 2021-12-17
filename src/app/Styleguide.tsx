import welcomePageImage from '../app/components/Welcome/WelcomePageBackground.jpg';

function Styleguide(): JSX.Element {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '0.3rem',
        }}
      >
        <div
          style={{
            width: '3rem',
            height: '3rem',
            background: 'var(--color-primary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: '3rem',
            height: '3rem',
            background: 'var(--color-secondary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: '3rem',
            height: '3rem',
            background: 'var(--color-effect)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: '3rem',
            height: '3rem',
            background: 'var(--color-background)',
            borderRadius: '50%',
            border: 'solid var(--color-primary) 1px',
          }}
        />
      </div>
      <h1>Header</h1>
      <p>Paragraph</p>
      <p>Font: Quicksand</p>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'end',
          marginBottom: '2rem',
        }}
      >
        <img
          src={welcomePageImage}
          style={{ width: '5rem', height: '10rem' }}
        />
        <p style={{ fontSize: '0.8rem' }}>welcome page image</p>
      </div>
      <button
        style={{
          backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-text-effect)',
          fontFamily: 'var(--font-text)',
          border: 'none',
          marginRight: '0.5rem',
          width: '8rem',
          height: '1.2rem',
          borderRadius: 'var(--border-radius-button)',
        }}
      >
        button inactive
      </button>
      <button
        style={{
          backgroundColor: 'var(--color-effect)',
          color: 'var(--color-text-effect)',
          fontFamily: 'var(--font-text)',
          border: 'none',
          width: '8rem',
          height: '1.2rem',
          borderRadius: 'var(--border-radius-button)',
        }}
      >
        button active
      </button>
    </div>
  );
}

export default Styleguide;
