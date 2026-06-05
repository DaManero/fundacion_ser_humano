# Fundación Programa Ser Humano — Next.js

Migración del sitio HTML estático a Next.js 15 (App Router + TypeScript), conservando los estilos originales (Bootstrap 3 + CSS propios).

## Requisitos

- Node.js 20+
- npm 9+

## Setup local

```powershell
cd nextjs
npm install
copy .env.example .env.local
# editar .env.local con tu RESEND_API_KEY si querés probar el formulario de contacto
npm run dev
```

Abrir http://localhost:3000

## Estructura

```
nextjs/
├─ app/
│  ├─ layout.tsx           # Layout global (header + footer + scripts bootstrap)
│  ├─ page.tsx             # Home (index.html)
│  ├─ tratamientos/        # tratamientos.html
│  ├─ prevencion/          # pregfrec.html (Grupo Baqueano)
│  ├─ staff/               # staff.html
│  ├─ galeria/             # galeria.html
│  ├─ contacto/            # contact.html (con formulario funcional)
│  ├─ objetivos/           # work.html (objetivos particulares)
│  └─ api/contact/route.ts # API endpoint que envía el formulario por Resend
├─ components/
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  └─ BootstrapScripts.tsx # carga jQuery + bootstrap.js + plugins
├─ public/
│  ├─ css/                 # CSS originales (bootstrap, style, animate, etc.)
│  ├─ js/                  # JS originales (bootstrap, owl, plugins, etc.)
│  ├─ img/                 # imágenes originales
│  └─ fonts/               # fuentes (FontAwesome, Ionicons)
└─ ...
```

## Deploy a Railway

1. Inicializar repo y subirlo a GitHub:

```powershell
cd nextjs
git init
git add .
git commit -m "feat: initial migration to Next.js"
git branch -M main
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```

2. En [Railway](https://railway.app):
   - **New Project → Deploy from GitHub repo** → seleccionar el repo.
   - Railway detecta Next.js automáticamente (Nixpacks).
   - En **Variables**, agregar:
     - `RESEND_API_KEY` (tu key de [resend.com](https://resend.com))
     - `CONTACT_FROM_EMAIL`
     - `CONTACT_TO_EMAIL`
   - Railway expone el puerto vía `$PORT`; el `package.json` ya lo usa.

3. (Opcional) Configurar dominio custom en **Settings → Networking → Custom Domain**.

## Notas

- Los estilos y JS de Bootstrap 3 + jQuery están servidos como assets estáticos desde `public/` para preservar el look & feel original.
- El formulario de contacto reemplaza el `Contact.aspx` original y usa [Resend](https://resend.com).
- El mapa de Google está embebido como `<iframe>` (no requiere API key).
