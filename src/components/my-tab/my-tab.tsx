import {
  Component,
  Prop,
  h,
  Event,
  EventEmitter,
  Listen,
} from "@stencil/core";

export interface TabActivateEvent {
  name: string;
}

@Component({
  tag: "my-tab",
  styleUrl: "my-tab.css",
  scoped: true,
})
export class MyTab {
  @Prop() name: string;
  @Prop() active: boolean;
  @Event() tabActivate: EventEmitter<TabActivateEvent>

  @Listen("click")
  handleClick() {
    this.active = true;
    this.tabActivate.emit({name: this.name})
  }
  render() {
    return (
      <div class={this.getCSSClass()}>
        {/* Slot allows child elements of component to be in component */}
        <slot/> 
      </div>
    );
  }

  getCSSClass = () => this.active ? "my-tab active" : "my-tab";
}