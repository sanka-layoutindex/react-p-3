import React from "react";
import { TextField, InputAdornment } from "@mui/material";

function MobileFoam() {
  return (
    <>
      <div className="mobileFoam">
        <TextField
          fullWidth
          placeholder="Ile-de-France"
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
        <button>
          <div className="iconWrapper">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8974 1.10698C14.6672 0.874656 14.3113 0.822031 14.0237 0.977798L1.28079 7.79202C0.98192 7.95265 0.830386 8.29573 0.912979 8.62477C0.995572 8.95381 1.29118 9.18471 1.6305 9.18521H6.81683V14.3704C6.81674 14.7101 7.04793 15.0062 7.37754 15.0886C7.43572 15.1031 7.49541 15.1107 7.55536 15.1111C7.82833 15.1108 8.07896 14.9603 8.20736 14.7194L15.0237 1.97869C15.1791 1.6922 15.1278 1.33762 14.8974 1.10698Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className="downArrow">
        <button className="iconWrapper">
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.39928 8C6.04558 8.00044 5.70882 7.84852 5.47507 7.58306L0.230737 1.62192C-0.114001 1.21108 -0.0677099 0.600164 0.334998 0.245961C0.737706 -0.108242 1.34953 -0.0761764 1.71301 0.318182L6.29879 5.53098C6.32416 5.55992 6.36079 5.57652 6.39928 5.57652C6.43778 5.57652 6.4744 5.55992 6.49977 5.53098L11.0856 0.318182C11.449 -0.0761764 12.0609 -0.108242 12.4636 0.245961C12.8663 0.600164 12.9126 1.21108 12.5678 1.62192L7.3251 7.58092C7.09095 7.84702 6.75373 7.99966 6.39928 8Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default MobileFoam;
