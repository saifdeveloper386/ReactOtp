import React from 'react';
import { auth } from './firebase';

const Otp = () => {

    if ("OTPCredential" in window) {
        window.addEventListener("DOMContentLoaded", (e) => {
          const input = document.querySelector(
            'input[autocomplete="one-time-code"]'
          );
          if (!input) return;
          const ac = new AbortController();
          const form = input.closest("form");
          if (form) {
            form.addEventListener("submit", (e) => {
              ac.abort();
            });
          }
          navigator.credentials
            .get({
              otp: { transport: ["sms"] },
              signal: ac.signal,
            })
            .then((otp) => {
              input.value = otp.code;
              if (form) form.submit();
            })
            .catch((err) => {
              console.error(err);
            });
        });
      }
    

	return (
		<div style={{ marginTop: 250 }}>
			<center>
				<h3>Welcome{auth.currentUser.phoneNumber}</h3>
                <input type="text" autoComplete="one-time-code" inputMode="numeric" />

			</center>
		</div>
	);
}

export default Otp;
