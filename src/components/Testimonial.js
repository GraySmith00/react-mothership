import React from 'react';
import '../stylesheets/Testimonial.css';

class Testimonial extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section className="testimonial-admin testimonial">
          <form>
            <label for="quote">Quote</label>
            <textarea name="quote" rows="4" />
            <label for="Source">Source</label>
            <input type="text" name="source" />
            <label for="Title">Title</label>
            <input type="text" name="title" />
            <label for="company">Company</label>
            <input type="text" name="company" />
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
