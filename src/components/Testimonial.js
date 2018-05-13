import React from "react";
import "../stylesheets/Testimonial.css";
import DisplayTestimonial from "./DisplayTestimonial";

class Testimonial extends React.Component {
  quoteRef = React.createRef();
  sourceRef = React.createRef();
  titleRef = React.createRef();
  companyRef = React.createRef();

  handleChange = e => {
    e.preventDefault();

    const testimonial = {
      quote: this.quoteRef.current.value,
      source: this.sourceRef.current.value,
      title: this.titleRef.current.value,
      company: this.companyRef.current.value
    };

    console.log(testimonial);

    this.props.createTestimonial(testimonial);
  };

  render() {
    return (
      <div className="wrapper">
        <section className="testimonial-admin testimonial">
          <form>
            <div>
              <label htmlFor="quote">Quote</label>
              <textarea
                ref={this.quoteRef}
                name="quote"
                id="quote"
                rows="4"
                onKeyUp={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="source">Source</label>
              <input
                ref={this.sourceRef}
                type="text"
                name="source"
                id="source"
                defaultValue=""
                onKeyUp={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <input
                ref={this.titleRef}
                type="text"
                name="title"
                id="title"
                defaultValue=""
                onKeyUp={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input
                ref={this.companyRef}
                type="text"
                name="company"
                id="company"
                defaultValue=""
                onKeyUp={this.handleChange}
              />
            </div>
            {/* <button type="submit">Submit</button> */}
          </form>
        </section>
        <DisplayTestimonial testimonial={this.props.testimonial} />
      </div>
    );
  }
}

export default Testimonial;
