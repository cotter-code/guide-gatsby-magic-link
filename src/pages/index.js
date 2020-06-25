import React, { useState, useEffect } from "react"; // 👈 Add useEffect here!
// 2️⃣ TODO: Import Cotter
import Cotter from "cotter"; // 👈 Add Cotter here!

import "./styles.css";

const IndexPage = () => {
  const [responsePayload, setResponsePayload] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // 3️⃣ TODO: Initialize Cotter and show the form
  useEffect(() => {
    var cotter = new Cotter("<YOUR_API_KEY_ID>");
    cotter.signInWithLink().showEmailForm().then(payload => {
        setResponsePayload(payload);
        setLoggedIn(true);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Passwordless App.</h1>

      {/* 1️⃣ TODO: Setup a div to contain the form */}
      <div
        id="cotter-form-container"
        style={{ width: "300px", height: "200px" }}
      ></div>

      <div id="user-info">
        { loggedIn ? `Welcome, ${responsePayload.email}` : "You are not yet authenticated" }
      </div>

      {
        loggedIn 
        ? <div id="user-response">
          <div className="success">Verification Success</div>
          <div className="title-response">User info from Cotter:</div>
          <pre>{JSON.stringify(responsePayload, null, 4)}</pre>
        </div>
        : null
      }
    </div>
  );
}

export default IndexPage
