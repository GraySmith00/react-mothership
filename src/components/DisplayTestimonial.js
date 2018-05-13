import React from 'react';

class DisplayTestimonial extends React.Component {
  render() {
    return (
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
    );
  }
}

export default DisplayTestimonial;
