# Personal Website

[![CI](https://github.com/peteoshea/website/workflows/CI/badge.svg)](https://github.com/peteoshea/website/actions)

This website is based on my [Next.js template](https://github.com/peteoshea/nextjs-template).

## How to use

There is no special one-off setup required for this project to you can simply run the server [bash](script/server) or [PowerShell](script/server.ps1) script:

```bash
$ ./script/server
```

or

```PowerShell
> .\script\server.ps1
```

You should now be running in development mode on [http://localhost:3000](http://localhost:3000).

This runs `next dev` to get start in development mode rather than `next start` which start a production server. Note that `next` is installed as a node package locally so the `next` command isn't necessarily available directly from the command line so it is actually called using `npm run dev`.
