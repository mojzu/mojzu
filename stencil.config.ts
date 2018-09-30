// Stencil configuration.
// <https://stenciljs.com/docs/config>
import { Config } from "@stencil/core";

export const config: Config = {
    globalStyle: "src/global/app.css",
    outputTargets: [
        {
            type: "www",
            serviceWorker: null
        }
    ]
};
