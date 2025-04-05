import { useState } from "react";

export default function HeroSplash() {
  const urlParams = new URLSearchParams(window.location.search);
  const [subscribed, _] = useState(urlParams.get("subscribed") === "true");

  return (
    <main role="main">
      <div className="hero">
        <div className="inner">
          <div className="head">
            <div className="hero-pretitle pretitle">Funeral Data Alliance</div>
            <h1 className="hero-mainhead mainhead">
              Connected data for compassionate care.
            </h1>
            <p className="hero-subhead subhead">
              As technology advances, securing your data's future through open
              standards is essential serving families.
            </p>
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
              The latest news on the Funeral Data Alliance. No marketing. No
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
    </main>
  );
}
