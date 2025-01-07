import { TextField, InputAdornment, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button2 from "./Button2";

function FoamGroup() {
  const [timeSlot, setTimeSlot] = React.useState("À la journée");
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      <div className="formGroup">
        <div className="location">
          <div className="titleWrapper">
            <p>Localisation</p>
          </div>
          <TextField
            fullWidth
            placeholder="Ile-de-France, Marseille"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_307_279)">
                      <path
                        d="M13.3109 12.7518L9.97886 9.28631C10.8356 8.26788 11.305 6.98648 11.305 5.65249C11.305 2.53576 8.76923 0 5.65249 0C2.53576 0 0 2.53576 0 5.65249C0 8.76923 2.53576 11.305 5.65249 11.305C6.82256 11.305 7.93758 10.9521 8.89088 10.2821L12.2482 13.7739C12.3885 13.9196 12.5773 14 12.7796 14C12.971 14 13.1526 13.927 13.2905 13.7943C13.5834 13.5124 13.5928 13.045 13.3109 12.7518ZM5.65249 1.47456C7.95625 1.47456 9.83043 3.34873 9.83043 5.65249C9.83043 7.95625 7.95625 9.83043 5.65249 9.83043C3.34873 9.83043 1.47456 7.95625 1.47456 5.65249C1.47456 3.34873 3.34873 1.47456 5.65249 1.47456Z"
                        fill="#003768"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_307_279">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="date">
          <div className="titleWrapper">
            <p>Date</p>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="locations">
          <div className="titleWrapper">
            <p>Créneau</p>
          </div>
          <TextField
            select
            fullWidth
            variant="outlined"
            size="small"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_307_957)">
                      <path
                        d="M9 1C4.58888 1 1 4.58888 1 9C1 13.4111 4.58888 17 9 17C13.4111 17 17 13.4111 17 9C17 4.58888 13.4111 1 9 1ZM9 16C5.14013 16 2 12.8599 2 9C2 5.14013 5.14013 2 9 2C12.8599 2 16 5.14013 16 9C16 12.8599 12.8599 16 9 16Z"
                        fill="#003768"
                        stroke="#003768"
                        stroke-width="0.3"
                      />
                      <mask id="path-3-inside-1_307_957" fill="white">
                        <path d="M9.5625 3.9375C9.5625 3.62684 9.31066 3.375 9 3.375C8.68934 3.375 8.4375 3.62684 8.4375 3.9375V9.2329L11.5796 12.375C11.7992 12.5946 12.1553 12.5946 12.375 12.375C12.5946 12.1553 12.5946 11.7992 12.375 11.5796L9.5625 8.76707V3.9375Z" />
                      </mask>
                      <path
                        d="M9.5625 3.9375C9.5625 3.62684 9.31066 3.375 9 3.375C8.68934 3.375 8.4375 3.62684 8.4375 3.9375V9.2329L11.5796 12.375C11.7992 12.5946 12.1553 12.5946 12.375 12.375C12.5946 12.1553 12.5946 11.7992 12.375 11.5796L9.5625 8.76707V3.9375Z"
                        fill="#003768"
                      />
                      <path
                        d="M8.4375 9.2329H7.28251V9.71131L7.6208 10.0496L8.4375 9.2329ZM9.5625 8.76707H8.40751V9.24549L8.7458 9.58377L9.5625 8.76707ZM12.375 11.5796L11.5583 12.3963L12.375 11.5796ZM11.5796 12.375L10.7629 13.1917L11.5796 12.375ZM7.28251 3.9375V9.2329H9.59249V3.9375H7.28251ZM7.6208 10.0496L10.7629 13.1917L12.3963 11.5583L9.2542 8.4162L7.6208 10.0496ZM13.1917 10.7629L10.3792 7.95037L8.7458 9.58377L11.5583 12.3963L13.1917 10.7629ZM10.7175 8.76707V3.9375H8.40751V8.76707H10.7175ZM13.1917 13.1917C13.8624 12.521 13.8624 11.4336 13.1917 10.7629L11.5583 12.3963C11.3269 12.1649 11.3269 11.7897 11.5583 11.5583L13.1917 13.1917ZM10.7629 13.1917C11.4336 13.8624 12.521 13.8624 13.1917 13.1917L11.5583 11.5583C11.7897 11.3269 12.1649 11.3269 12.3963 11.5583L10.7629 13.1917ZM9 2.22001C8.05146 2.22001 7.28251 2.98896 7.28251 3.9375H9.59249C9.59249 4.26472 9.32722 4.52999 9 4.52999V2.22001ZM9 4.52999C8.67278 4.52999 8.40751 4.26472 8.40751 3.9375H10.7175C10.7175 2.98896 9.94855 2.22001 9 2.22001V4.52999Z"
                        fill="#003768"
                        mask="url(#path-3-inside-1_307_957)"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_307_957">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </InputAdornment>
              ),
            }}
          >
            <MenuItem aria-label="À la journée" value="À la journée">À la journée</MenuItem>
            <MenuItem aria-label="À l'heure" value="À l'heure">À l'heure</MenuItem>
          </TextField>
        </div>
        <div className="icon-box">
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.56276 6.65139C4.57275 6.68368 5.52266 9.77606 7.82841 9.77606H16.1745C18.4803 9.77606 19.4302 6.67847 19.4402 6.65139C19.7323 5.65723 20.4634 4.86863 21.407 4.52974C21.6611 4.43782 21.7999 4.15291 21.721 3.88501C21.663 3.68816 21.614 3.51005 21.579 3.37986C21.4706 2.94199 21.3312 2.51308 21.162 2.09666C20.5445 0.810457 19.2819 -0.00142605 17.9014 3.06752e-06H6.10259C4.72169 -0.00182116 3.45859 0.810121 2.84094 2.09666C2.67172 2.51308 2.53236 2.94199 2.42398 3.37986C2.38398 3.50797 2.33299 3.68399 2.275 3.87772C2.19375 4.1475 2.334 4.43552 2.59096 4.52661C3.53807 4.86325 4.27186 5.65398 4.56276 6.65139Z"
              fill="#003768"
            />
            <path
              d="M22.8851 6.04935C22.0596 5.79068 21.1889 6.27657 20.9383 7.13569C20.8863 7.31068 19.6264 11.4144 16.1758 11.4144H7.82864C4.377 11.4144 3.11813 7.31068 3.06614 7.13569C2.81763 6.27284 1.94468 5.7832 1.11634 6.04206C0.288001 6.30092 -0.182051 7.21024 0.0664513 8.0731C0.132444 8.30536 1.5403 13.0059 5.61087 14.3224C5.68422 14.3463 5.74306 14.4038 5.77055 14.4785C5.79804 14.5532 5.79115 14.637 5.75185 14.7057L4.84295 16.2826C4.54613 16.7986 4.70706 17.4676 5.20241 17.7768C5.69776 18.086 6.33994 17.9183 6.63676 17.4023L8.06461 14.9234C8.1552 14.7668 8.31801 14.6711 8.49357 14.6714H15.5098C15.6854 14.6711 15.8482 14.7668 15.9388 14.9234L17.3676 17.4023C17.5595 17.7352 17.9072 17.9361 18.2798 17.9295C18.6525 17.9229 18.9934 17.7097 19.1742 17.3702C19.3551 17.0307 19.3483 16.6165 19.1564 16.2837L18.2485 14.7068C18.2087 14.6383 18.2014 14.5546 18.2285 14.4797C18.2563 14.405 18.3152 14.3475 18.3885 14.3235C22.4601 13.0059 23.8679 8.30536 23.9349 8.07414C24.1802 7.21318 23.7107 6.30777 22.8851 6.04935Z"
              fill="#003768"
            />
          </svg>
          <span>Siège(s)</span>
        </div>
        <div className="counter">
          <button onClick={decrement}>-</button>
          <p>{count}</p>
          <button onClick={increment}>+</button>
        </div>
        <Button2 btnname="Rechercher" to="/Rechercher" />
      </div>
    </>
  );
}

export default FoamGroup;
