import React, { useState } from 'react';

export default function NameOverlay({ onSubmit }) {
  const [name, setName] = useState('');
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ background: '#222', padding: 32, borderRadius: 12, boxShadow: '0 0 16px #000', minWidth: 320 }}>
        <h2 style={{ color: '#ffe066', marginBottom: 16 }}>Digite seu apelido</h2>
        <input
          style={{ fontSize: 22, padding: 8, width: '100%', borderRadius: 6, border: '1px solid #888', marginBottom: 16 }}
          value={name}
          maxLength={16}
          onChange={e => setName(e.target.value)}
          autoFocus
        />
        <button
          style={{ fontSize: 20, padding: '8px 32px', background: '#ffe066', color: '#222', border: 'none', borderRadius: 6, cursor: 'pointer' }}
          disabled={!name.trim()}
          onClick={() => onSubmit(name.trim())}
        >Começar</button>
      </div>
    </div>
  );
}
