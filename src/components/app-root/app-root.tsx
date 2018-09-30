import { Component } from "@stencil/core";
import "@stencil/router";

@Component({
    tag: "app-root",
    shadow: true
})
export class AppRoot {
    public render() {
        return (
            <div>
                <header>Hello, world!</header>

                <main>
                    <stencil-router>
                        <stencil-route-switch scrollTopOffset={0}>
                            <stencil-route url="/" component="app-main" exact={true} />
                        </stencil-route-switch>
                    </stencil-router>
                </main>
            </div>
        );
    }
}
