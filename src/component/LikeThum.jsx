import { Provider, UpdownButton } from "@lyket/react";

<Provider
  apiKey="acc0dbccce8e557db5ebbe6d605aaa"
  theme={{
    colors: {
      background: "rgba(255, 224, 138, 0.4)",
      text: "violet",
      primary: "#b8fff3",
      secondary: "rgba(220, 234, 108, 0.6)"
    }
  }}
>
  <UpdownButton
    namespace="my-documentation"
    id="like-dislike-buttons-api"
  />
</Provider>