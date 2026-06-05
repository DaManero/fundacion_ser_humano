'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get('name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      subject: String(fd.get('subject') || '').trim(),
      message: String(fd.get('message') || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setErrorMsg('Por favor, completá nombre, email y mensaje.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'No se pudo enviar el mensaje.');
      }

      setStatus('sent');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Error desconocido.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Asunto"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <div className="form-group-2">
              <textarea
                className="form-control"
                name="message"
                rows={3}
                placeholder="Mensaje"
                required
              />
            </div>
            <button
              className="btn btn-default"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {status === 'sent' && (
              <p style={{ color: 'green', marginTop: 10 }}>
                ¡Mensaje enviado! Te contactaremos a la brevedad.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#a00', marginTop: 10 }}>{errorMsg}</p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
