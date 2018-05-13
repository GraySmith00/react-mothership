import React from 'react';
import '../stylesheets/Testimonial.css';

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

    // this.props.createTestimonial(testimonial);
  };

  render() {
    return (
      <div className="wrapper">
        <section className="testimonial-admin testimonial">
          <form>
            <label htmlFor="quote">Quote</label>
            <textarea
              ref={this.quoteRef}
              name="quote"
              id="quote"
              rows="4"
              onKeyUp={this.handleChange}
            />
            <label htmlFor="source">Source</label>
            <input
              ref={this.sourceRef}
              type="text"
              name="source"
              id="source"
              defaultValue=""
              onKeyUp={this.handleChange}
            />
            <label htmlFor="title">Title</label>
            <input
              ref={this.titleRef}
              type="text"
              name="title"
              id="title"
              defaultValue=""
              onKeyUp={this.handleChange}
            />
            <label htmlFor="company">Company</label>
            <input
              ref={this.companyRef}
              type="text"
              name="company"
              id="company"
              defaultValue=""
              onKeyUp={this.handleChange}
            />
            {/* <button type="submit">Submit</button> */}
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
