# Tiramisu
### Chrome extension for supporting Korean and Japanese fonts to Excalidraw
> **This extension is NOT official support from Excalidraw. Use it at your own risk.**

## Fonts
- English: default [Virgil](https://virgil.excalidraw.com/) font from [excalidraw.com](https://excalidraw.com/)
- Korean: [상상토키 금면성실 / SSFaithfulness](https://sangsangfont.com/21/?idx=162)
- Japanese: [かずフォント / Kazu font](https://www.freejapanesefont.com/kazu-handwriting-font-download/)

## Powered by
<div style="display: inline-flex; gap: 20px;">
    <a href="https://www.plasmo.com/">
        <img src="https://pbs.twimg.com/profile_images/1524776891084857344/qy9E4xIa_400x400.jpg" alt="Plasmo" width="64px" height="64px" />
    </a>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="64px" height="64px" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" width="64px" height="64px"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="64px" height="64px"/>
</div>     
<hr />

## Development

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.
