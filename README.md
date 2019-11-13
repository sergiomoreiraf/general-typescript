# general-typescript

Javascript is great! We all know it, but have you ever faced these problems?

"Oh, there it is. Another mistyped var declaration."

"It was supposed to be a string, but got a number instead. :("

"What's the doc, expected inputs and output for that function?"

"That's a nice proposition they have for javascript. Shame it will take some time for me to use it."

That's when Typescript comes to shine!

This repo is a minimalist setup for you to use Typescript today.

But no project is complete without test! So as a bonus, test with Jest (actually, Ts-Jest) is also provided.

Do you already have a repo and wanna add typescript to it? Bellow is provided some info so you can reproduce the same steps I took to setup this repo.

So, try Javascript, Typescript and Jest today! :)

# What is required

Basically you need to have npm installed and to use a code editor.

For npm, I recommend the use of [NVM](https://github.com/nvm-sh/nvm). With it you can easily download any node/npm version, use differents environments and no need to sudo when to install global package.

For an editor, I recommend [Vs Code](https://code.visualstudio.com/), but you can use the one you prefer the most.

A good addition, but not required, is to global install [NPX](https://www.npmjs.com/package/npx). With it you can use any binary package installed on the project with NPM.

# Steps to recreate this repo

Considering a just created and cloned git-hub repo:

1. `npm --init -y`

   - This will create a **package.json** file for yor project. It contains the dependencies and scripts npm will use within your repo. All other data there is not that much relevant.

1. Add a source folder to the root (src)

   - `mkdir src`
   - Generally all source code goes into a **_/src_** folder.

1. Add a .gitignore file to the root

   - This contains **the files and dirs** Git will ignore when committing your code.
   - For a Typescript project, it has inside **_/node_modules_** and **_/dist_**. This is where the transpiled code goes

1. `npm i -D @types/jest jest ts-jest typescript ts-node`

   - Npm will install these packages as a dev dependency.

1. `npx tsc --init`

   - This will create a tsconfig.json file with a great doc inside. Take a look, it's well worth it.
   - If you did not install NPX, type `./node_modules/.bin/tsc --init`.
   - From the .json config, you can modify the **target** to something newer.
   - Set an **outDir**. It's better to separate your **.ts** code from the generated **.js** and **.map** code. Do not forget to add this folder to **.gitignore**.
   - Exclude from compilation **/node_modules** and all **.spec.ts**.
   - Include all **.ts** located on source folder.

1. `npx ts-jest config:init`

   - This will create a jest.config.js with only a few options, but enough to start. If you need to get more info, go to [Jest config doc](https://jestjs.io/docs/en/configuration).
   - If no NPX installed, type `./node_modules/.bin/ts-jest config:init`.

1. Add scripts to package.json

   - At least tree actions are recommended: to test, to build and to watch for code changes. For each action, one script is needed.
   - `"test": "jest"` to init test with jest.
   - `"build": "tsc"` to generate your js code.
   - `"watch": "tsc --watch"` to generate and watch for code changes.

# How to run a .ts file

If you need to run just one file, type:

`npx ts-node <path to file.ts>`

No need to previously generate Javascript files.

# How to test

A simple full test can be done with

`npm test`

But if you are using Vs Code, then I recommend you to use the **Jest test extension**. Just open a **.spec** file and it will run all tests.

```
Name: Jest
Id: orta.vscode-jest
Description: Use Facebook's Jest With Pleasure.
Version: 3.0.2
Publisher: Orta
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
```
