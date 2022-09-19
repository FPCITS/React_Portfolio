import React from 'react';
function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          {/<a href="https://github.com/fpcits" target="blank">
            <li>
              <MyGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/sara-h" target="blank">
            <li>
              <MyLinkedin />
            </li>
          </a>
          }
        </ul>
      </footer>
    </div>
  );
};

export default Footer;