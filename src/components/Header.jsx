import react from "react";

function Header() {
  return (
    <div>
      <h2>Lets know your lucky number!</h2>
      <h4>Your lucky number is {Math.floor(Math.random() * 10)}</h4>{" "}
    </div>
  );
}
export default Header;
