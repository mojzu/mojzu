import { Component } from "@stencil/core";

@Component({
    tag: "app-main",
    shadow: true
})
export class AppMain {
    public render() {
        return (
            <div class="app-main">Main component!</div>
        );
    }
}
