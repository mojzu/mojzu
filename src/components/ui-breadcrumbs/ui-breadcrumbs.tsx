import { Component, Prop } from "@stencil/core";
import { IBreadcrumbsItem } from "../components";

@Component({ tag: "ui-breadcrumbs" })
export class UiBreadcrumbs {
    @Prop()
    public readonly items: IBreadcrumbsItem[] = [];
    @Prop({ attr: "class" })
    public readonly attrClass: string = "";
    @Prop()
    public readonly itemClass: string = "";

    public render() {
        const lastIndex = Math.max(0, this.items.length - 1);
        const items = this.items.slice(0, lastIndex);
        const active = this.items.slice(lastIndex, lastIndex + 1);
        return (
            <nav aria-label="breadcrumb">
                <ol class={`breadcrumbs ${this.attrClass}`}>
                    {items.map(item => (
                        <li class={`breadcrumbs-item ${this.itemClass}`}>
                            <a href={item.href}>{item.text}</a>
                        </li>
                    ))}
                    {active.map(item => (
                        <li class={`breadcrumbs-item ${this.itemClass}`} aria-current="page">
                            {item.text}
                        </li>
                    ))}
                </ol>
            </nav>
        );
    }
}
