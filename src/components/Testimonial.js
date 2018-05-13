import React from "react";
import "../stylesheets/Testimonial.css";

class Testimonial extends React.Component {
  quote = React.createRef();
  source = React.createRef();
  title = React.createRef();
  company = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.quote.current.value);
    console.log(this.source.current.value);
    console.log(this.title.current.value);
    console.log(this.company.current.value);
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
            Having collaborated with numerous developers over the years, Secret
            Stache has set the bar for what a working relationship with
            programmers should look like. Their understanding of the value
            behind creativity is a welcome departure from most dev
            relationships, and the quality of code is as good as it gets.
            <cite>
              <span className="source">Some Rando</span>
              <span className="title">The Director of Awesomeness</span>
              <span className="company">Secret Stache Media</span>
            </cite>
          </blockquote>
        </section>
      </div>
    );
  }
}

export default Testimonial;
