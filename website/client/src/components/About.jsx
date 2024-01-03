import React from "react";

function About() {
  return (
    <div>
      <section class="py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class=" ">
                <h2 class="display-5 fw-bold text-center">Our Principles</h2>
                <p class="lead">
                  It is estimated that around 14,000 tonnes of sunscreen
                  chemicals are washed off swimmers and end up in our oceans
                  each year. Some chemicals found in sunscreens are not only
                  harmful to our personal health but also have a detrimental
                  effect on reef ecosystems and marine life; they damage our
                  delicate coral reefs, cause deformities in marine life and
                  they can bioaccumulate, meaning they end up in the seafood we
                  eat.
                </p>
                <p class="lead mb-0">
                  You should avoid the following ingredients which have been
                  shown to harm our oceans:{" "}
                </p>
                <ul>
                  <li>Oxybenzone</li>
                  <li>Octinoxate</li>
                  <li>Octocrylene</li>
                  <li>4-methylbenzylidene camphor</li>
                  <li>PABA</li>
                  <li>Parabens</li>
                  <li>Homosalate</li>
                  <li>Triclosan</li>
                  <li>Avobenzone</li>
                </ul>
                <p class="lead mb-0">
                  It’s also worth adding that this doesn’t just apply to
                  sunscreens - we should all take care to make sure any other
                  personal care products we wear in the water are free of these
                  ingredients. We stock a range of reef-safe sunscreens which
                  offer excellent protection in and out of the water! Our
                  favourite plastic-free packaged, reef-safe sunscreens are;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <div class="container">
          <div class="row align-items-center gx-4">
            <div class="col-md-5">
              <div class="ms-md-2 ms-lg-5">
                <img class="img-fluid rounded-3" src="Icon/Sherry.png" alt="" />
              </div>
            </div>
            <div class="col-md-6 offset-md-1">
              <div class="ms-md-2 ms-lg-5">
                <span class="text-muted">About me</span>
                <h2 class="display-5 fw-bold">Sherry Yang</h2>
                <p class="lead">
                  Hello! I'm a cybersecurity graduate student at the University
                  of Adelaide, passionate about both the Australian sunshine and
                  the ocean. Discovering the potential harm caused by sunscreens
                  with unsafe ingredients to marine life motivated me to create
                  this platform.
                </p>
                <p class="lead mb-0">
                  As an everyday consumer, I understand the challenge of
                  evaluating the safety of sunscreen ingredients. That's why I
                  developed this website – to assist individuals like me, who
                  care about marine ecosystems and love soaking up the sun by
                  the sea. Now, you can easily make informed decisions about
                  sunscreen purchases before enjoying the sunshine responsibly.
                </p>
              </div>
              <div class="d-flex justify-content-end">
                <a
                  class="btn btn-success mt-5"
                  href="https://www.linkedin.com/in/sherry-shen-382184261/"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <h2 class="display-5 fw-bold">Next Steps</h2>
            </div>
            <div class="col-md-6 offset-md-1">
              <p class="lead md-0 bold">
                <strong>User Registration and Login:</strong>
              </p>
              <ul>
                <li>Open user registration to encourage engagement.</li>
                <li>Facilitate user login for personalized experiences.</li>
                <li>
                  Encourage users to contribute by uploading sunscreen
                  ingredient information to expand our database.
                </li>
              </ul>

              <p class="lead md-0 bold">
                <strong>User Contribution Leaderboard:</strong>
              </p>
              <ul>
                <li>Establish a user contribution leaderboard.</li>
                <li>
                  Recognize and reward top contributors for their valuable
                  input.
                </li>
                <li>
                  Encourage healthy competition among users to boost engagement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
