import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({ tag: "ui-button" })
export class UiButton {
    @Prop()
    public readonly type: "button" | "submit" | "reset" = "button";
    @Prop()
    public readonly disabled: boolean = false;
    @Prop({ attr: "class" })
    public readonly attrClass: string = "";

    @Event()
    public readonly onClick: EventEmitter<MouseEvent>;

    public render() {
        return (
            <button
                type={this.type}
                disabled={this.disabled}
                aria-disabled={this.disabled}
                class={`button ${this.attrClass}`}
                onClick={event => this.onClick.emit(event)}
            >
                <slot />
            </button>
        );
    }
}
