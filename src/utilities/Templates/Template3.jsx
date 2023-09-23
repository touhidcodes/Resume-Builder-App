import React from "react";

const Template3 = () => {
  return (
    <div>
      <div className="container">
        <div className="left-side">
          <div className="profile-text">
            <div className="imgBx">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
            <h2>
              Ciris Hamsworth <br />
              <span> Business man </span>
            </h2>
          </div>
          {/* Contact Info */}
          <div className="contact-info">
            <div className="title">Contact Info</div>
            <ul>
              <li>
                <span className="icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span className="text">+8801234567890</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <span className="text">hamsworth@gmail.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </span>
                <span className="text">www.mywebsite.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </span>
                <span className="text">www.linkedin.com/me</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span className="text">Gopalgonj, Dhaka</span>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="contact-info education">
            <div className="title">Education</div>
            <ul>
              <li>
                <h5>2010-2013</h5>
                <h4>Master Degree in computer Science</h4>
                <h4>Harvard University</h4>
              </li>
              <li>
                <h5>2007-2010</h5>
                <h4>Bachelor Degree in computer Science</h4>
                <h4>Harvard University</h4>
              </li>
            </ul>
          </div>
          {/* Language  */}
          <div className="contact-info language">
            <div className="title">Language</div>
            <ul>
              <li>
                <span className="text">Bangla</span>
                <span className="percent">
                  <div style="width: 90%"></div>
                </span>
              </li>
              <li>
                <span className="text">English</span>
                <span className="percent">
                  <div style="width: 84%"></div>
                </span>
              </li>
              <li>
                <span className="text">German</span>
                <span className="percent">
                  <div style="width: 45%"></div>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          {/* Experience  */}
          <div className="about">
            <h2 className="title2">Profile</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              tenetur eos doloribus fuga delectus? Aut porro itaque omnis minima
              dolorum possimus incidunt dolor, nostrum illum eaque et laboriosam
              saepe culpa optio quidem, <br />
              <br />
              tenetur nihil esse explicabo in! Similique quisquam magni sequi
              voluptatum aliquam animi possimus, tenetur itaque nobis quas
              voluptates!
            </p>
          </div>
          <div className="about">
            <h2 className="title2">Experience</h2>
            <div className="box">
              <div className="year_company">
                <h5>2019 - present</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Senior UX Designer</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  modi doloribus incidunt blanditiis omnis non.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="year_company">
                <h5>2016 - 2018</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>UI/UX Designer</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  modi doloribus incidunt blanditiis omnis non.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="year_company">
                <h5>2014 - 2016</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Junior UX Designer</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  modi doloribus incidunt blanditiis omnis non.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Skills  */}
          <div className="about skills">
            <h2 className="title2">Professional Skills</h2>
            <div className="box">
              <h4>HTML</h4>
              <div className="percent">
                <div style="width: 95%"></div>
              </div>
            </div>
            <div className="box">
              <h4>CSS</h4>
              <div className="percent">
                <div style="width: 90%"></div>
              </div>
            </div>
            <div className="box">
              <h4>JavaScript</h4>
              <div className="percent">
                <div style="width: 75%"></div>
              </div>
            </div>
            <div className="box">
              <h4>Photoshop</h4>
              <div className="percent">
                <div style="width: 85%"></div>
              </div>
            </div>
            <div className="box">
              <h4>Illustrator</h4>
              <div className="percent">
                <div style="width: 70%"></div>
              </div>
            </div>
            <div className="box">
              <h4>Adobe XD</h4>
              <div className="percent">
                <div style="width: 92%"></div>
              </div>
            </div>
          </div>
          {/* Interests */}
          <div className="about interest">
            <h2 className="title2">Interest</h2>
            <ul>
              <li>
                <i className="fa fa-book" aria-hidden="true"></i>Reading
              </li>
              <li>
                <i className="fa fa-pagelines" aria-hidden="true"></i> Gardening
              </li>
              <li>
                {" "}
                <i className="fa fa-plane" aria-hidden="true"></i>Traveling
              </li>
              <li>
                <i className="fa fa-gamepad" aria-hidden="true"></i>Gaming
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
