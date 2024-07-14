import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Motilal Medical Institute, named in honor of Motilal Nehru, is a premier medical educational institution known for its comprehensive healthcare education and services. Founded with a vision to create a center of excellence in medical education and healthcare, the institute has grown to become one of the leading medical colleges in India.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          Motilal Medical Institute boasts a sprawling campus equipped with state-of-the-art facilities. The institute includes modern lecture halls, well-equipped laboratories, a comprehensive library, and advanced research centers. The affiliated hospital provides extensive medical services and serves as a training ground for students.
          </p>
          <p>The institute offers a range of undergraduate, postgraduate, and doctoral programs in various fields of medicine and health sciences. These programs are designed to provide students with a strong foundation in medical sciences, along with hands-on clinical experience.</p>
          <p>Research is a key focus at Motilal Medical Institute. The institute encourages students and faculty to engage in innovative research projects. Collaborative research initiatives with national and international organizations further enhance the research capabilities of the institute.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
