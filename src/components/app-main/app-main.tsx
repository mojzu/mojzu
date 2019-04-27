import { Component, State } from "@stencil/core";
import { Plugins } from "@capacitor/core";

const { Device } = Plugins;

@Component({
    tag: "app-main"
})
export class AppMain {
    @State()
    public deviceInformation: string = "";

    public async componentWillLoad() {
        const information = await Device.getInfo();
        this.deviceInformation = JSON.stringify(information, undefined, 2);
    }

    public render() {
        return <div class="app-main">{this.deviceInformation}</div>;
    }
}
