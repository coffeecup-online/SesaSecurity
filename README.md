# Sesa Security

A fully static Next.js website for Sesa Security.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Static production build

```bash
npm run build
```

The complete deployable website is generated in `out/`. Upload the contents of
that folder to any static web server. No Node.js server, database, Cloudflare
Worker, or server-side runtime is required in production.

The contact form currently shows a browser-side placeholder confirmation. It
does not submit data until it is connected to a form endpoint or email service.
