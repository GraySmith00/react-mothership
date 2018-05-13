import React from "react";
import "../stylesheets/Testimonial.css";

class Testimonial extends React.Component {
  quote = React.createRef();
  source = React.createRef();
  title = React.createRef();
  company = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    const testimonial = {
      quote: this.quote.current.value,
      source: this.source.current.value,
      title: this.title.current.value,
      company: this.company.current.value
    };

    this.props.createTestimonial(testimonial);
  };

  render() {
    return (
      <div className="wrapper">
        <section className="testimonial-admin testimonial">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="quote">Quote</label>
            <textarea ref={this.quote} name="quote" id="quote" rows="4" />
            <label htmlFor="source">Source</label>
            <input
              ref={this.source}
              type="text"
              name="source"
              id="source"
              defaultValue=""
            />
            <label htmlFor="title">Title</label>
            <input
              ref={this.title}
              type="text"
              name="title"
              id="title"
              defaultValue=""
            />
            <label htmlFor="company">Company</label>
            <input
              ref={this.company}
              type="text"
              name="company"
              id="company"
              defaultValue=""
            />
            <button type="submit">Submit</button>
          </form>
        </section>
        <section className="testimonial-public testimonial">
          <blockquote>
            {this.props.testimonial.quote}
            <cite>
              <span className="source">{this.props.testimonial.source}</span>
              <span className="title">{this.props.testimonial.title}</span>
              <span className="company">{this.props.testimonial.company}</span>
            </cite>
          </blockquote>
        </section>
      </div>
    );
  }
}

export default Testimonial;
