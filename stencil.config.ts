// Stencil configuration.
// <https://stenciljs.com/docs/config>
import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil/postcss";
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

export const config: Config = {
    namespace: "Mojzu",
    globalStyle: "src/global/style.scss",
    plugins: [
        sass(),
        postcss({
            plugins: [tailwindcss("./tailwind.js"), autoprefixer()]
        })
    ],
    outputTargets: [{ type: "www", serviceWorker: null }, { type: "dist" }]
};
