// react
import { Component, ReactNode } from "react";

// components
import Header from "./Header";
import Reviews from "./Reviews";

// styles
import "@/styles/App.css";

export default class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Header />
        <Reviews />
      </>
    );
  }
}
