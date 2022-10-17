# Adobe Express + NextJS Example
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

1. npm install 
2. add your Adobe Express keys in a .env file. See [.env.example](https://github.com/GraemeFulton/AdobeExpress-NextJS-example/blob/main/.env.example) for an example.

Run the development server:

## For https on localhost:
Make sure the key.pem thing is generated and in the project (someting like localhost.pem and localhost-key.pem)
 
```
npm run dev-https
```

or no https:
```bash
npm run dev
# or
yarn dev
```

## What's going on?

### 1. Embed CCEverywhere SDK, and Initialize:

This all happens in [_app.js](https://github.com/GraemeFulton/AdobeExpress-NextJS-example/blob/main/pages/_app.js):

* [Line 16](https://github.com/GraemeFulton/AdobeExpress-NextJS-example/blob/main/pages/_app.js#L16), the CCEverywhere SDK is loaded into the `<Head>`
* [L17](https://github.com/GraemeFulton/AdobeExpress-NextJS-example/blob/main/pages/_app.js#L17), the initialization script is added, also on `<head>`. It looks like this:
```
let ccEverywhereInitScript = `window.ccEverywhere = window.CCEverywhere.initialize({
  clientId:"${process.env.NEXT_PUBLIC_ADOBE_CC_API_KEY}",
  appName: 'Letter',
  appVersion: { major: 1, minor: 0 },
  platformCategory: 'web',
  redirectUri:"${process.env.NEXT_PUBLIC_ADOBE_REDIRECT_URI}" 
}); `
```
That reads the ENV variables from `.env`, which should be at the root of the project.

## 2. Redirect URI and Exchange Token
The redirect URI for this project is: `https://localhost:3000/auth/adobeAuth`, you can see it in the [.env.example]((https://github.com/GraemeFulton/AdobeExpress-NextJS-example/blob/main/.env.example#L3))

So if you go to [/pages/auth/adobeAuth.js](https://github.com/GraemeFulton/AdobeExpress-NextJS-example/blob/main/pages/auth/adobeAuth.js), you can see how the authentication is taking place. Pretty much just [`window.ccEverywhere.exchangeAuthCodeForToken();`](`https://github.com/GraemeFulton/AdobeExpress-NextJS-example/blob/main/pages/auth/adobeAuth.js#L6)

## 3. Button that triggers the Express Editor

[Index.js](https://github.com/GraemeFulton/AdobeExpress-NextJS-example/blob/main/pages/index.js) has an `openExpress` function, that is triggered when a link is clicked.

---
That is how the [Letter Editor](https://app.letter.so/try) has been set up, with the same routes and code.
