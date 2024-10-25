import { useEffect, useRef, useState } from "react";

export default function OTPInput({ length = 4, onOTPSubmit = () => {} }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRef = useRef([]);

  //   Focus on first box at start
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);

    setOtp(newOtp);

    // submit trigger
    const combinedOTP = newOtp.join("");
    if (combinedOTP.length === length) {
      onOTPSubmit(combinedOTP);
    }

    // Move to next input box, if box is already full
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    // to move the curson after the input element
    inputRef.current[index].setSelectionRange(1, 1);

    // optional, to check if previous boxes are empty
    if (index > 0 && !otp[index - 1]) {
      inputRef.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      // Moving cursor to the previous box
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div>
      <div>
        {otp.map((value, index) => (
          <input
            type="text"
            key={index}
            onChange={(e) => handleChange(index, e)}
            value={value}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
            ref={(input) => (inputRef.current[index] = input)}
          />
        ))}
      </div>
    </div>
  );
}
