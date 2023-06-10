import desktopSvg from "./assets/images/illustration-sign-up-desktop.svg";
import mobileSvg from "./assets/images/illustration-sign-up-mobile.svg";
import icon from "./assets/images/icon-list.svg";

import MediaQuery from "react-responsive";
import { useRef, useState } from "react";
import Popup from "./Popup";
function App() {
  const [popup, setPopup] = useState(false);
  const inputRef = useRef(null);

  const errorMsgRef = useRef(null);
  function validation() {
    let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (inputRef.current.value.match(mailFormat)) {
      setPopup(true);
    } else {
      errorMsgRef.current.classList.remove("hidden");
      inputRef.current.classList.add("border-rose-700");
    }
  }
  return (
    <>
      {popup && <Popup email={inputRef.current.value} />}
      <div className="xl:bg-slate-700 h-screen  xl:flex items-center justify-center ">
        <div className="wrapper">
          <div className="left-side p-4 xl:pl-4 flex flex-col">
            <h3 className="font-bold text-4xl main-margin">Stay updated!</h3>
            <p className="main-margin">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <p className="mark-p">
              <img src={icon} alt="" />
              Product discovery and building what matters
            </p>
            <p className="mark-p">
              <img src={icon} alt="" />
              Measuring to ensure updates are a success
            </p>
            <p className="mark-p">
              <img src={icon} alt="" />
              And much more!
            </p>
            <div className="flex justify-between">
              <label className="mt-2">Email address</label>
              <label
                ref={errorMsgRef}
                className="text-rose-800 font-bold hidden"
              >
                Valid email required
              </label>
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder="email@company.com"
              className="p-4 outline-none border rounded-xl main-margin placeholder:text-gray-400/50"
            />
            <button onClick={validation} className="btn">
              Subscribe to monthly newsletter
            </button>
          </div>
          <div className="right-side  ">
            <MediaQuery minWidth={1224}>
              <img src={desktopSvg} alt="" className="w-full" />
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
              <img src={mobileSvg} alt="" className="w-full" />
            </MediaQuery>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
