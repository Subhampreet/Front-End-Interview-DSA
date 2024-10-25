import { useState } from "react";
import OTPInput from "./OTPInput";

export default function MobileLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // Phone Number Validation
    const regex = /[^0-9]/g;
    if (
      phoneNumber.length < 10 ||
      regex.test(phoneNumber) ||
      phoneNumber.length > 10
    ) {
      alert("Invalid Phone Number");
      return;
    }

    // Call Backend API
    // Show OTP Field
    setShowOTP(true);
  };

  const onOTPSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  return (
    <div className="mobile__login">
      <div>Hello, from mobile login</div>
      {!showOTP ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP from sent to {phoneNumber}</p>
          <OTPInput length={4} onOTPSubmit={onOTPSubmit} />
        </div>
      )}
    </div>
  );
}
