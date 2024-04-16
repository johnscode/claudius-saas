An AI Chat Assistant SaaS built using [Anthropic's](https://www.anthropic.com/) 
Claude3. It is built in node.js and typescript using next 14 and makes a great 
boilerplate to build your own SaaS.

This repo is a fork of [next14-ai-saas](https://github.com/johnscode/next14-ai-saas). This is well featured
with integrations expected of a beta-stage product. It includes:
- [Stripe](https://stripe.com/) for payments
- [Clerk](https://clerk.com/) for authentication and user management
- [Crisp](https://crisp.chat/en/) for customer support using chat

## Setup

You will need to create accounts with the following services in order to get api keys.

- [OpenAI](https://openai.com/)
- [Clerk](https://clerk.com/)
- [Prisma](https://www.prisma.io/)
- [Stripe](https://stripe.com/)
- [Crisp](https://crisp.chat/en/)

This repo assumes a local postgres database. You can use that or change to another. 
Note that prisma supports MySQL, MongoDB, PostGres, as well as some cloud db providers.

Note that the 'key' for Crisp is not in .env, but is set in components/crisp-chat.tsx

You need to create a .env file with the following:
```shell
AUTH0_SECRET=YOUR_AUTH0_SECRET
AUTH0_BASE_URL=YOUR_AUTH0_BASE_URL  // http://localhost:3000 for local dev
AUTH0_ISSUER_BASE_URL=YOUR_AUTH0_ISSUER_BASE_URL // like dev-fpvbof5w5.us.auth0.com
AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_AUTH0_CLIENT_SECRET

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR-CLERK-PUBLISHABLE-KEY
CLERK_SECRET_KEY=YOUR-CLERK-SECRET-KEY

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dash
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dash
NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/

# change this if your deploy is different. it must be the full absolute url
NEXT_PUBLIC_APP_URL="http://localhost:3000"

OPENAI_API_KEY=YOUR-OPENAI-API-KEY
ANTHROPIC_API_KEY=YOUR_ANTHROPIC_API_KEY

STRIPE_API_KEY=YOUR-STRIPE-API-KEY
STRIPE_WEBHOOK_SECRET=YOUR-STRIPE-WEBHOOK-SECRET

# This was inserted by `prisma init`:
# BE SURE TO CHANGE IT FOR YOUR INSTALL
DATABASE_URL="postgresql://user:password@localhost:5432/aisaas?schema=public"
```
First, initialize the db

```bash
npm run postinstall
```
This runs `npx prisma generate` which initializes the db. Note that if you make any 
modifications to the db schema, file `prisma/schema.prisma` , you will need to run
`npx prisma generate`. See the pris[](https://www.prisma.io/docs)ma docs for more info.

Now, run the development server:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(landing)/page.tsx`. The page auto-updates as you edit the file.

## Todo
Note that this is a work in progress. 

- reskin - colors and fonts
- remove rest of OpenAI code
- 




