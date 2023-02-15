

const Contact = () => {

  return (
    <div id="contactPage" className="topmargin32">
      {/* Start coding Below */}
      {/* For CSS: css>styles.css, code only at --- div#contactPage */}

      <section className="py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <h2 className="text-center mb-4 text-secondary">Get in Touch</h2>
        <div className="card text-white bg-primary">
          <div className="card-body">
            <form action="#" method="post">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your name, superhero name, or gamer tag</label>
                <input type="text" className="form-control" id="name" name="name" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your email address (so we can hit you back)</label>
                <input type="email" className="form-control" id="email" name="email" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">How can we help you? Ask us anything or tell us a joke</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-secondary">Send Message</button>
            </form>
          </div>
        </div>
        <div className="text-center text-white mt-4">
          <p>Want to get in touch? Fill out the form and we'll get back to you as soon as we can.</p>
          <p>You can also email us at <a href="mailto:contact@gamehub.com" className="text-secondary">contact@gamehub.com</a> or give us a call at <a href="tel:808-808-8888" className="text-secondary">808-808-8888</a>.</p>
        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  )
}

export default Contact