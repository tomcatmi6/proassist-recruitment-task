## Strona główna:
Wyświetla listę postów pobranych z API.
Każdy post powinien zawierać: Tytuł, Krótki opis, Przyciski "Zobacz więcej"
Strona szczegółów posta:
Wyświetla pełną treść posta. Powinna zawierać przycisk powrotu do listy postów i dodaj do ulubionych

## Filtrowanie:
Użytkownik może filtrować posty na stronie głównej według kategorii i czy zostały dodane do ulubionych.
## Ulubione:
Użytkownik może dodać/usuwać posty z listy ulubionych, Lista ulubionych przechowywana lokalnie (np. w localStorage).
## Responsywność:
Aplikacja powinna działać poprawnie zarówno na desktopie, jak i na urządzeniach mobilnych.Wymagane użycie TypeScript, Next.js 15, React 19.
## API:
Wykorzystaj publiczne API do generowania danych, np. JSONPlaceholder:
Endpoint: /posts (lista postów).
Endpoint: /posts/{id} (szczegóły posta).
## Routing:
Wykorzystaj Next.js dynamic routes do wyświetlania szczegółów posta.
## Dodatkowe wymagania:
Kod powinien być dobrze zorganizowany i podzielony na komponenty.
Wykorzystaj React Hooks (np. useState, useEffect, useContext).
Obsługa błędów API (np. wyświetlenie komunikatu w przypadku braku danych).




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
