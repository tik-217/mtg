// react
import { Component, ReactNode } from "react";

// types
import { IWatchProps, IWatchState } from "@/types";

// styles
import "@/styles/Watch.css";

export default class Watch extends Component<IWatchProps, IWatchState> {
  timer = setInterval(() => {}, 0);

  constructor(props: IWatchProps) {
    super(props);

    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount(): void {
    this.timer = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  render(): ReactNode {
    return (
      <div className="watch">
        <h5>Time</h5>
        <span>{this.state.currentTime.toLocaleTimeString()}</span>
      </div>
    );
  }
}
