import React from 'react';

export default function ContactUs() {
  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
      </p>
      <form className="contact-form mt-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="mb-3">
          <input type="text" placeholder="Name" className="form-control" required />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Phone" className="form-control" required />
        </div>
        <div className="mb-3">
          <input type="email" placeholder="Email" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}
