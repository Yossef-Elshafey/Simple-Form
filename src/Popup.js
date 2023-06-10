import mark from "./assets/images/icon-success.svg";
export default function Popup({ email }) {
  return (
    <div className="overlay">
      <div className="xl:bg-white xl:w-1/4 xl:mx-auto xl:p-4 xl:rounded-xl">
        <img src={mark} alt="" className="main-margin" />
        <h4 className="font-bold text-4xl main-margin">
          Thanks for subscribing!
        </h4>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription
        </p>
        <button className="btn w-full mt-4">Dismiss message</button>
      </div>
    </div>
  );
}
