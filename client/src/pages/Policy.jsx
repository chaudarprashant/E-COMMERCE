import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTP80aHw8q_8c5SKfSMx6w-LIxKbwwmX5zg&s"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>What is a website privacy policy?
A website privacy policy will be used by a UK-based website to provide website users with key information about the collection, use and storage of their personal data.


Is it mandatory to have a privacy policy?
Yes. Data protection laws and regulations say that a website operator should tell their users what they will do with their data in simple and clear terms. It is therefore best to set this out in writing.


What does 'personal data' mean?
Personal data means any information relating to an identified or identifiable natural person (a data subject). It is therefore information from which a person may be identified directly or indirectly. Examples of personal data include a person's:

name
address
email address
telephone number
IP address
health information
criminal information

What should be done after a privacy policy has been finalised?
It is not necessary to sign a privacy policy. It can be finalised and placed on the website, in an easily accessible location. The website operator should ensure that important privacy information is placed at suitable places throughout the website, with a link to the privacy policy in appropriate places.

</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;