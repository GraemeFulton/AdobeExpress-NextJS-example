import React, { useEffect } from "react";

const Adobecc = () => {

  useEffect(() => {
    window.ccEverywhere.exchangeAuthCodeForToken();
  }, []);

  return (
    <>
        <div style={{padding:20, width:'100vw', height:'100vh',position:'relative'}}>
              <div style={{ position:'absolute',margin:'0 auto',width:'100%',top: "44%", left: "0" }}>
                <h1>
                  Contacting Creative Cloud...
                </h1>
              </div>
        </div>
    </>
  );
};

export default Adobecc;
