import React from "react";
import logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="paddingGlobal containerLarge">
        <div className="content">
          {/* About Section */}
          <div className="about">
            <p>
              Hac ita persuasione reducti intra moenia bellatores obseratis
              undique portarum aditibus, propugnaculis insistebant et pinnis,
              congesta undique saxa telaque habentes in promptu
            </p>
            <div className="imageWrapper">
              <img src={logo} alt="BestWestern Logo" />
            </div>
          </div>

          {/* Links Section */}
          <div className="links">
            <ul className="nav2">
              <li>
                <Link to="/service">Notre concept</Link>
              </li>
              <li>
                <Link to="/listing">Nos événements</Link>
              </li>
            </ul>
            <ul className="nav2">
              <li>
                <Link to="/help">Aide</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social and Newsletter Section */}
          <div className="social">
            <p>
              Inscrivez-vous à notre Newsletter pour bénéficier d’avantages
              exclusifs !
            </p>
            <div className="email-input-container">
              <input
                className="email-input"
                placeholder="Votre email"
                type="email"
              />
              <button aria-label="submit-button" className="email-submit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9063 0.133427C15.8139 0.0353604 15.673 0.00650299 15.5518 0.0607603L0.831784 6.66009C0.719082 6.71103 0.644327 6.82469 0.639417 6.95256C0.634507 7.08043 0.700308 7.19994 0.808744 7.26009L5.07754 9.61409C5.13372 9.64709 5.20345 9.64156 5.25418 9.60009L11.8398 4.06676C11.9034 4.01191 11.9966 4.01647 12.055 4.07728C12.1133 4.13809 12.1177 4.23519 12.0651 4.30143L6.75306 11.1614C6.71278 11.2133 6.70623 11.2853 6.73642 11.3441L8.99626 15.7908C9.05174 15.8999 9.1606 15.9681 9.27914 15.9681H9.2913C9.41405 15.9631 9.52322 15.8854 9.57226 15.7681L15.9723 0.501427C16.0247 0.376276 15.9986 0.230446 15.9063 0.133427Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <div className="iconSection">
              <p>Suivez-nous sur les réseaux sociaux :</p>
              <div className="iconBox">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="iconWrapper"
                  aria-label="visit facebook"
                >
                  <svg
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    alt ="facebook-image"
                  >
                    <g clip-path="url(#clip0_426_224)">
                      <circle cx="17.4233" cy="17" r="17" fill="white" />
                      <g clip-path="url(#clip1_426_224)">
                        <path
                          d="M26.9672 13.0603C26.9224 12.0441 26.7581 11.3455 26.5227 10.7401C26.2798 10.0976 25.9062 9.52226 25.4167 9.04401C24.9385 8.55832 24.3594 8.18092 23.7243 7.94187C23.1154 7.70647 22.4204 7.54214 21.4042 7.49734C20.3805 7.44874 20.0555 7.4375 17.4589 7.4375C14.8623 7.4375 14.5373 7.44874 13.5173 7.49354C12.5011 7.53835 11.8025 7.70282 11.1973 7.93808C10.5546 8.18092 9.97929 8.55453 9.50104 9.04401C9.01535 9.52226 8.6381 10.1014 8.3989 10.7365C8.1635 11.3455 7.99917 12.0403 7.95437 13.0565C7.90577 14.0803 7.89453 14.4053 7.89453 17.0019C7.89453 19.5984 7.90577 19.9235 7.95057 20.9434C7.99538 21.9596 8.15985 22.6582 8.39525 23.2636C8.6381 23.9062 9.01535 24.4815 9.50104 24.9597C9.97929 25.4454 10.5584 25.8228 11.1935 26.0619C11.8025 26.2973 12.4974 26.4616 13.5137 26.5064C14.5335 26.5513 14.8587 26.5624 17.4552 26.5624C20.0518 26.5624 20.3768 26.5513 21.3968 26.5064C22.413 26.4616 23.1116 26.2973 23.7168 26.0619C25.0021 25.5649 26.0183 24.5487 26.5152 23.2636C26.7505 22.6546 26.915 21.9596 26.9598 20.9434C27.0046 19.9235 27.0158 19.5984 27.0158 17.0019C27.0158 14.4053 27.012 14.0803 26.9672 13.0603ZM25.245 20.8687C25.2038 21.8027 25.0469 22.3071 24.9162 22.6433C24.5948 23.4765 23.9335 24.1378 23.1004 24.4591C22.7641 24.5899 22.2561 24.7468 21.3257 24.7878C20.317 24.8328 20.0145 24.8438 17.4627 24.8438C14.9109 24.8438 14.6046 24.8328 13.5995 24.7878C12.6655 24.7468 12.1611 24.5899 11.8249 24.4591C11.4102 24.3059 11.0328 24.0631 10.7265 23.7455C10.4089 23.4354 10.1661 23.0618 10.0129 22.6471C9.8821 22.3109 9.72521 21.8027 9.6842 20.8725C9.63925 19.8638 9.62816 19.5611 9.62816 17.0093C9.62816 14.4575 9.63925 14.1512 9.6842 13.1463C9.72521 12.2122 9.8821 11.7079 10.0129 11.3716C10.1661 10.9569 10.4089 10.5796 10.7303 10.2731C11.0403 9.95556 11.4139 9.71271 11.8287 9.55962C12.1649 9.42886 12.6731 9.27197 13.6033 9.23082C14.612 9.18602 14.9147 9.17478 17.4663 9.17478C20.0219 9.17478 20.3244 9.18602 21.3295 9.23082C22.2635 9.27197 22.7679 9.42886 23.1042 9.55962C23.5188 9.71271 23.8962 9.95556 24.2025 10.2731C24.5201 10.5833 24.7629 10.9569 24.9162 11.3716C25.0469 11.7079 25.2038 12.2159 25.245 13.1463C25.2898 14.155 25.301 14.4575 25.301 17.0093C25.301 19.5611 25.2898 19.86 25.245 20.8687Z"
                          fill="currentColor"
                        />
                        <path
                          d="M17.4588 12.0889C14.7465 12.0889 12.5459 14.2894 12.5459 17.0018C12.5459 19.7143 14.7465 21.9148 17.4588 21.9148C20.1713 21.9148 22.3718 19.7143 22.3718 17.0018C22.3718 14.2894 20.1713 12.0889 17.4588 12.0889ZM17.4588 20.1887C15.6992 20.1887 14.2719 18.7616 14.2719 17.0018C14.2719 15.2421 15.6992 13.8149 17.4588 13.8149C19.2186 13.8149 20.6458 15.2421 20.6458 17.0018C20.6458 18.7616 19.2186 20.1887 17.4588 20.1887Z"
                          fill="currentColor"
                        />
                        <path
                          d="M23.713 11.8948C23.713 12.5281 23.1994 13.0417 22.5659 13.0417C21.9325 13.0417 21.4189 12.5281 21.4189 11.8948C21.4189 11.2612 21.9325 10.7478 22.5659 10.7478C23.1994 10.7478 23.713 11.2612 23.713 11.8948Z"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_426_224">
                        <rect
                          width="34"
                          height="34"
                          fill="white"
                          transform="translate(0.42334)"
                        />
                      </clipPath>
                      <clipPath id="clip1_426_224">
                        <rect
                          width="19.125"
                          height="19.125"
                          fill="white"
                          transform="translate(7.86084 7.4375)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="iconWrapper"
                  aria-label="visit instagram"
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    alt ="instagram-image"
                  >
                    <g clip-path="url(#clip0_426_220)">
                      <circle
                        cx="16.4688"
                        cy="16.4688"
                        r="14.3438"
                        fill="currentColor"
                      />
                      <path
                        d="M17 0C13.6377 0 10.351 0.997031 7.55534 2.86501C4.7597 4.733 2.58075 7.38802 1.29406 10.4944C0.00737059 13.6007 -0.329293 17.0188 0.326656 20.3165C0.982605 23.6142 2.6017 26.6433 4.97919 29.0208C7.35669 31.3983 10.3858 33.0174 13.6835 33.6734C16.9812 34.3293 20.3993 33.9926 23.5057 32.706C26.612 31.4193 29.267 29.2403 31.135 26.4447C33.003 23.649 34 20.3623 34 17C34 12.4913 32.209 8.16729 29.0209 4.97917C25.8327 1.79105 21.5087 0 17 0ZM20.757 14.127L20.553 16.677H17.952V25.517H14.654V16.677H12.954V14.127H14.654V12.427C14.5722 11.5123 14.7677 10.5941 15.215 9.79202C15.525 9.36832 15.9366 9.02943 16.412 8.80661C16.8873 8.58379 17.4111 8.48421 17.9351 8.51702C18.9935 8.47338 20.0526 8.58211 21.08 8.83997L20.638 11.441C20.1777 11.3163 19.7039 11.2478 19.227 11.237C19.08 11.2051 18.9279 11.2046 18.7806 11.2355C18.6333 11.2663 18.4942 11.3278 18.3723 11.4161C18.2504 11.5043 18.1484 11.6172 18.0731 11.7474C17.9978 11.8777 17.9507 12.0224 17.9351 12.172V14.161H20.74L20.757 14.127Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_426_220">
                        <rect width="34" height="34" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="copyright">
          <p>© Tous droits réservés BestWestern 2020</p>
          <ul className="nav3">
            <li>
              <Link to="/sitemap">Plan du site</Link>
            </li>
            <li>
              <Link to="/terms">Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Confidentialité</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
