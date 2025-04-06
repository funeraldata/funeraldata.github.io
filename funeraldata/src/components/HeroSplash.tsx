import { useState } from "react";

export default function HeroSplash() {
  const urlParams = new URLSearchParams(window.location.search);
  const [subscribed, _] = useState(urlParams.get("subscribed") === "true");

  return (
    <main role="main">
      <div className="hero">
        <div className="inner">
          <div className="head">
            <div className="hero-pretitle pretitle">
              Introducing the Funeral Data Alliance
            </div>
            <h1 className="hero-mainhead mainhead">
              A shared movement to connect the future of funeral service
            </h1>
            <p className="hero-subhead subhead">
              As technology advances, creating a collaborative & secure data
              ecosystem is essential to serving families
            </p>
          </div>
        </div>
        <div className="mx-auto text-center">
          <a href="#readmore" className="readmore">
            <button className="button button-blue button-lg pb-18 md:py-12">
              <span>Learn more</span>
            </button>
          </a>
        </div>
      </div>
      <div id="readmore" className="own-your-data">
        <div className="inner">
          <h2>Seamless collaboration for better care.</h2>
          <div className="text">
            <p>
              For too long, restrictive data practices and incompatible systems
              have created unnecessary friction within the funeral profession.
              This "data lock-in" limits choices for funeral homes, stifles
              innovation among technology providers, and can inadvertently add
              stress for grieving families.
            </p>
            <p>
              The <strong>Funeral Data Alliance</strong> exists to change this.
              We believe funeral homes must have undisputed ownership and
              control over their data, and that technology systems should work
              together seamlessly.
            </p>
            <p>
              Our approach is collaborative: we bring together tech companies,
              funeral directors, and industry partners to define and advocate
              for clear <strong>Open Data Guidelines</strong>. These standards
              focus on ensuring easy and secure data transfers, smooth
              integrations between platforms, robust security, and transparent
              ownership — creating a healthier, more competitive ecosystem where
              the best tools can flourish.
            </p>
            <p>
              And professionals can focus entirely on what matters most:
              providing compassionate care.
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="inner">
          <div className="head">
            <div className="hero-pretitle pretitle">JOIN US</div>
            <h1 className="hero-mainhead mainhead">
              Build the future of funeral service
            </h1>
          </div>
        </div>
      </div>
      <div id="signup" className="text-center sign-up-form mx-8">
        {!subscribed && (
          <>
            <form action="https://api.web3forms.com/submit" method="post">
              <input
                type="hidden"
                name="access_key"
                value="d70dfa7c-6b25-407d-9ab0-30dc01b2faf9"
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <input
                type="hidden"
                name="redirect"
                value="https://funeraldata.org/?subscribed=true"
              />
              <input
                autoComplete="Email"
                aria-label="Email"
                className="js-cm-email-input qa-input-email"
                id="email"
                maxLength={200}
                name="email"
                required
                type="email"
                placeholder="Your email address"
              />
              <button className="button button-blue button-lg" type="submit">
                <span>Sign up</span>
              </button>
            </form>
            <p>
              For the latest news on the Funeral Data Alliance. No marketing. No
              spam.
            </p>
          </>
        )}
        {subscribed && (
          <>
            <div className="hero-subhead subhead pb-8">
              <h4>Thanks! You've been added to the list.</h4>
            </div>
          </>
        )}
      </div>
      {/* <section className="platforms" name="browse">
        <div className="platform-group">
          <div className="header">
            <h4>Members</h4>
            <p>
              These companies believe in giving you full ownership of your data
              and the ability to move it between services.
            </p>
          </div>
          <div className="platforms-feed">
            <div className="platform-box">
              <a
                className="platform-header"
                href="https://substack.com"
                target="_blank"
                rel="noopener"
              >
                <div className="platform-icon">
                  <h4 className="platform-title">Substack</h4>
                  <div className="platform-data">
                    <span>Open</span>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20.18311 20.18311"
                    >
                      <path
                        className="cls-1"
                        d="M7.91289 15.16651c-.01465.0-.02979.0-.04443-.001a1.58824 1.58824.0 01-1.27637-.70508L4.56084 11.57765a.71637.71637.0 111.1709-.82569l2.0415 2.897.13526.085.14013-.07325 6.53516-8.26953a.71683.71683.0 011.125.88867L9.17266 14.54933a1.58929 1.58929.0 01-1.25977.61718z"
                        transform="translate(-0.05498 -0.05372)"
                      ></path>
                      <path
                        className="cls-1"
                        d="M10.14629 20.23683A10.09156 10.09156.0 1120.23808 10.145 10.103 10.103.0 0110.14629 20.23683zm0-18.75049a8.65845 8.65845.0 108.6582 8.65869A8.66849 8.66849.0 0010.14629 1.48634z"
                        transform="translate(-0.05498 -0.05372)"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="platform-info">
                <div className="platform-info-left">
                  <div className="platform-info-group">
                    <p>Product</p>
                    <ul>
                      <li>Email newsletters</li>
                      <li>Podcasts</li>
                    </ul>
                  </div>
                  <div className="platform-info-group">
                    <p>Payments</p>
                    <ul>
                      <li>Stripe Connect</li>
                    </ul>
                  </div>
                </div>
                <div className="platform-info-right">
                  <div className="platform-info-group">
                    <p>Data exports available</p>
                    <ul>
                      <li>✔️ Content</li>
                      <li>✔️ Email addresses</li>
                      <li>✔️ Customers</li>
                      <li>✔️ Payments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="platform-description">
                <p>
                  Free plans and strongly stated commitment to independent
                  journalism and publishing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
