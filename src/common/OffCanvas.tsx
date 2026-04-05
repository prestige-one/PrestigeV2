import Link from "next/link";
import { COMPANY_CONTACT, COMPANY_OFFICES, COMPANY_SOCIAL_LINKS } from "@/data/company-contact";

type OffCanvasProps = {
  openCanvas: boolean;
  setOpenCavas: (open: boolean) => void;
};

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <g clipPath="url(#poOffcanvasPhoneClip)">
        <path
          d="M39.8523 29.6017C39.5773 28.0233 38.2257 26.765 36.564 26.5433L27.349 25.31C25.6773 25.0817 24.0207 25.97 23.329 27.46C23.1523 27.84 23.004 28.235 22.884 28.6417C20.3023 27.565 17.9857 26.01 15.9857 24.0117C13.9857 22.0133 12.4323 19.6967 11.3557 17.115C11.764 16.9933 12.1573 16.845 12.5373 16.6667C14.0273 15.9733 14.909 14.3217 14.6857 12.6483L13.4523 3.435C13.2307 1.77333 11.974 0.42 10.3657 0.141667C9.78067 0.045 9.29401 0 8.82901 0C5.80401 0 2.94234 1.59833 1.36067 4.17333C-0.349328 6.96 -0.110994 10.5267 0.285672 13.3217C1.18734 19.6517 4.43901 26.0167 9.20901 30.7867C12.754 34.3317 17.1357 36.9883 21.879 38.4683C24.294 39.2233 27.3173 40.01 30.2273 40.01C32.4057 40.01 34.5207 39.5683 36.269 38.3433C38.6057 36.7033 39.999 34.0217 39.999 31.1667C39.999 30.7017 39.954 30.2133 39.8523 29.6017Z"
          fill="#ffffff"
        />
      </g>
      <defs>
        <clipPath id="poOffcanvasPhoneClip">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M32.5 4.16602H19.1667C15.9117 4.16602 13.1633 6.26268 12.1267 9.16602H20.8333C25.8867 9.16602 30 13.2777 30 18.3327V24.166H32.5C36.635 24.166 40 20.801 40 16.666V11.666C40 7.53102 36.635 4.16602 32.5 4.16602ZM28.3333 18.3327C28.3333 14.1977 24.9683 10.8327 20.8333 10.8327H7.5C3.365 10.8327 0 14.1977 0 18.3327V23.3327C0 27.4677 3.365 30.8327 7.5 30.8327H8.33333V34.9993C8.33333 35.336 8.53667 35.641 8.84833 35.7693C8.95167 35.8127 9.06 35.8327 9.16667 35.8327C9.38333 35.8327 9.59667 35.7477 9.75667 35.5893L14.5133 30.8327H20.835C24.97 30.8327 28.335 27.4677 28.335 23.3327V19.9993L28.3333 18.3327Z"
        fill="#ffffff"
      />
    </svg>
  );
}

const OffCanvas = ({ openCanvas, setOpenCavas }: OffCanvasProps) => {
  return (
    <>
      <div
        className={`offcanvas offcanvas-start right-side-vorix-offcanvas shadow-lg ${openCanvas ? "show" : ""}`}
        tabIndex={-1}
        id="sideMenuOffcanvas"
      >
        <div className="offcanvas-header">
          <Link href="/" className="navbar-brand m-0" onClick={() => setOpenCavas(false)} aria-label="Prestige One Developments home">
            <img className="dark-logo" src="/assets/img/v2/prestigeone_logo_oneline_dark-hr.svg" alt="" />
            <img className="light-logo" src="/assets/img/v2/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One Developments" />
          </Link>

          <button
            type="button"
            className="btn-close btn-close-white shadow-lg"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setOpenCavas(false)}
          />
        </div>

        <div className="offcanvas-body">
          <h4 className="text-white po-offcanvas-section-title">Reach out to us</h4>
          <p className="po-offcanvas-intro">{COMPANY_CONTACT.intro}</p>

          <div className="nav-content po-offcanvas-nav-content">
            <h5 className="text-white po-offcanvas-section-title">Offices</h5>
            <div className="po-offcanvas-offices-list">
              {COMPANY_OFFICES.map((office) => (
                <p key={office.mapUrl} className="po-offcanvas-office-line mb-0">
                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                    {office.label}
                  </a>
                </p>
              ))}
            </div>
          </div>

          <h5 className="text-white po-offcanvas-section-title po-offcanvas-contact-heading">Contact</h5>

          <div className="contact-info">
            <div>
              <div className="icon">
                <PhoneIcon />
              </div>
              <div>
                <p>Phone number</p>
                <h5 className="mb-0 po-offcanvas-contact-value">
                  <a href={COMPANY_CONTACT.phoneTel}>{COMPANY_CONTACT.phoneDisplay}</a>
                </h5>
              </div>
            </div>

            <div>
              <div className="icon">
                <EmailIcon />
              </div>
              <div>
                <p>Email address</p>
                <h5 className="mb-0 po-offcanvas-contact-value">
                  <a href={COMPANY_CONTACT.emailMailto}>{COMPANY_CONTACT.email}</a>
                </h5>
              </div>
            </div>
          </div>

          <div className="po-offcanvas-social-block">
            <h5 className="text-white po-offcanvas-section-title">Social networks</h5>

            <div className="social-nav">
            {COMPANY_SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="text-white"
              >
                {item.name === "Facebook" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                ) : null}
                {item.name === "X" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                ) : null}
                {item.name === "LinkedIn" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                ) : null}
                {item.name === "Instagram" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                ) : null}
                {item.name === "YouTube" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.003a19 19 0 0 1-2.006-.153 2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99 99 0 0 1 7.862 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                ) : null}
              </a>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
