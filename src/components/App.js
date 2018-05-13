import React, { Component } from "react";
import "../stylesheets/App.css";
import Testimonial from "./Testimonial";

class App extends Component {
  state = {
    testimonial: {}
  };

  createTestimonial = testimonial => {
    this.setState({
      testimonial
    });
  };

  render() {
    return (
      <React.Fragment>
        <Testimonial
          createTestimonial={this.createTestimonial}
          testimonial={this.state.testimonial}
        />
      </React.Fragment>
    );
  }
}

export default App;
