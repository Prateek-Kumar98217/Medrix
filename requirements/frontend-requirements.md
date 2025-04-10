#Project overview
-use this guide for making the front end of MEDRIX.MEDRIX is a location-first healthcare discovery platform unifying pharmacies, clinics, diagnostic labs, and hospitals into a single user-friendly interface. The front end, built with Next.js, uses dummy data for the MVP phase, with plans to integrate Supabase and Clerk for backend and auth respectively. Using shadcn/ui, we aim to create a clean, accessible, and modern UI that’s mobile-friendly and ready for scale.

#Feature requirements
- we will use Next.js, tailwindcss, Shadcn, Supabase, Clerk
- have nice animations for loading states between navigation or element loading
- for the home page:
    - create a Static hero section with a mocked search bar and location selector
    - create Buttons or cards for key services: Pharmacies, Clinics, Labs, Hospitals
    - create Dummy health tips or alert banners
    - create a Carousel for featured services
- for Service listing page
    -create Static/dummy list of providers per service type (from local JSON)
    -create Card layout for each provider:
        -Name, location, open/closed status, distance (mocked)
        -Availability badge (e.g., “Medicine in stock”, “Slots available”)
    - implement a Filter by service type, availability, open now
    - implement a Sort by name, distance (static)
- for service details page
    -create a Static profile of a service provider
        -Name, contact info, location, services offered
        -Dummy availability section (e.g., appointment slots or medicine stock)
        -CTA: “Book Now” (non-functional)
    -create a Tab or accordion UI for sections like Overview, Availability, Reviews
-for user dashboard
    -create static cards for:
        -Recent visits/searches
        -Saved services (from localStorage or hardcoded)
        -Personalized alerts (static)

#Relevent docs
- use tailwindcss 4: https://tailwindcss.com/docs/

#Current file structure
/new
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── components
│       └── ui
│           ├── button.tsx
│           ├── form.tsx
│           ├── input.tsx
│           ├── label.tsx
│           └── sonner.tsx
├── lib
│   └── utils.ts
├── node_modules
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json

#Rules
-all new components should go in /componenets and be named like example-component.tsx unless specified otherwise
-all new pages go in /app