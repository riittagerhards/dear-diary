<img width="30%" align="right" alt="logo" src="src/app/AppLogo.png"/>

# Dear diary

> Social media - for you alone

Do you love to keep record on your life with pictures and write a short comment about your day? Without social media, for you alone - like writing a diary? In dear diary you can do all this and more. It allows you to add and remove diary entries, surf your pictures and read your comments. A calendar helps you to keep track on your activities.

## 🧮 Installing / Developing

First, [create a repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).

Then clone the repository:

```shell
git clone https://github.com/your_username_/Project-Name.git
```

Now you are ready to go.
This will install the dependencies required to run the template:

```shell
npm install
```

```shell
npm run dev
```

These scripts run your server, client and storybook in development mode.

The default PORTS are:

- `3001` for the server
- `3000` for the client
- `6006` for the storybook

If you don't like to call all scripts at once, you can also run:

```shell
npm run server:dev
npm run client:dev
npm run storybook
```

### 📜 .env

You should use `dotenv` to securely connect with MongoDB and Cloudinary.

## 👷 Building

To build the project, run:

```shell
npm run build
```

This will build the client, server and storybook.

```shell
npm start
```

In production, you have a single server serving everything.

`/api/*` is the API endpoint.  
`/storybook` is the Storybook.  
`/*` is the client.

## Tests

A test runner is not installed (right now). But TypeScript, linter and prettier are checked on commit and push thanks to husky and lintstaged.
