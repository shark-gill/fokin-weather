import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class App extends React.Component {
  getLocation = async () => {
    const location = await loLocation.getCurrentPositionAsync(options);
    console.log(location);
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
