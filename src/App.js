import ReviewStar1 from "./component/ReviewStar1";
import ReviewStar2 from "./component/ReviewStar2";
import { Provider, UpdownButton } from "@lyket/react";
import Button from "./component/Botton";
import "./component/styles.css";


function MyApp() {
  return (
    <div>
      <div className="review1"><ReviewStar1 /></div>
      <div className="review2"><ReviewStar2 /></div>
      <div className="like-button">
        <h2>Would you recommend trausti</h2>
        <h6>your recommend must be shown in publicly</h6>
      <Provider
        apiKey="acc0dbccce8e557db5ebbe6d605aaa"
        theme={{
          colors: {
            background: "rgba(255, 224, 138, 0.4)",
            text: "violet",
            primary: "#b8fff3",
            secondary: "rgba(220, 234, 108, 0.6)",
          },
        }}
      >
        <UpdownButton
          namespace="my-documentation"
          id="like-dislike-buttons-api"
        />
      </Provider>
      </div>
      <div className="praise">
      <h1>Praise</h1>
      <h6 >Would you like to praise</h6>
      </div>
       <Button />
    </div>
  );
}
export default MyApp;
