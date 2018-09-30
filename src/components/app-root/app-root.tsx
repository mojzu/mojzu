import { Component } from "@stencil/core";
import "@stencil/router";
import { IBreadcrumbsItem } from "../components";

@Component({
    tag: "app-root"
})
export class AppRoot {
    public readonly breadcrumbsItems: IBreadcrumbsItem[] = [
        { href: "#", text: "Home" },
        { href: "#", text: "Section 1" }
    ]
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


                <div class="p-2">
                    <ui-breadcrumbs class="bg-green text-white" items={this.breadcrumbsItems}></ui-breadcrumbs>
                </div>

                <div class="p-2">
                    <ui-button class="bg-red text-white" onClick={() => console.log("onClick!")}>
                        Submit
                    </ui-button>
                </div>

                <div class="p-2">
                    <ui-button onClick={() => console.log("onClick!")}>
                        Submit
                    </ui-button>
                </div>

                <div class="p-2">
                    <ui-button disabled={true} onClick={() => console.log("onClick!")}>
                        Submit
                    </ui-button>
                </div>
            </div>
        );
    }
}
