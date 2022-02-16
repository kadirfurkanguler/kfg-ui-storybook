import "./App.css";
import { useState } from "react";
import { Button, Card, CardList } from "./components";
const App = () => {
  const [data, setData] = useState("");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            {data}
            <Button
              textColor={"light"}
              btnColor={"primary"}
              radius={"-pill"}
              label="deneme"
              onPress={() => {
                alert("dene");
              }}
            />
            <div className="row">
              <Card
                title="Green Card sonuclari aciklandi"
                text="Talihliler Arasinda furkan da var"
                link="http://furkanguler.com"
                linkText="Furkan Guler"
                linkColor="primary"
                linkIsButton={true}
                image={
                  "https://i.picsum.photos/id/580/200/200.jpg?hmac=2hv4P7MSDH0Wtkh9JdiJ25xLoUk8CZZJdcLWWJVFur8"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <CardList
        datas={[
          {
            text: "1lorem ipsum dolor sit amet bla bla kar ile dunyayi gezin kanka",
            image: "https://picsum.photos/200/300",
            title: "Baslik",
            link: "furkanguler.com",
            linkText: "Linke Tikla",
            titleColor: "primary",
            textColor: "success",
            linkColor: "info",
            radius: "0",
            linkIsButton: false,
            popularity: "Popular",
          },
          {
            text: "2lorem ipsum dolor sit amet bla bla kar ile dunyayi gezin kanka",
            image: "https://picsum.photos/200/300",
            title: "Baslik",
            link: "furkanguler.com",
            linkText: "Linke Tikla",
            titleColor: "primary",
            textColor: "success",
            linkColor: "info",
            radius: "0",
            linkIsButton: false,
            popularity: "Not Popular",
          },
          {
            text: "3lorem ipsum dolor sit amet bla bla kar ile dunyayi gezin kanka",
            image: "https://picsum.photos/200/300",
            title: "Baslik",
            link: "furkanguler.com",
            linkText: "Linke Tikla",
            titleColor: "primary",
            textColor: "success",
            linkColor: "info",
            radius: "0",
            linkIsButton: false,
            popularity: "Popular",
          },
          {
            text: "4lorem ipsum dolor sit amet bla bla kar ile dunyayi gezin kanka",
            image: "https://picsum.photos/200/300",
            title: "Baslik",
            link: "furkanguler.com",
            linkText: "Linke Tikla",
            titleColor: "primary",
            textColor: "success",
            linkColor: "info",
            radius: "0",
            linkIsButton: false,
            popularity: "Popular",
          },
          {
            text: "5lorem ipsum dolor sit amet bla bla kar ile dunyayi gezin kanka",
            image: "https://picsum.photos/200/300",
            title: "Baslik",
            link: "furkanguler.com",
            linkText: "Linke Tikla",
            titleColor: "primary",
            textColor: "success",
            linkColor: "info",
            radius: "0",
            linkIsButton: false,
            popularity: "Popular",
          },
          {
            text: "6lorem ipsum dolor sit amet bla bla kar ile dunyayi gezin kanka",
            image: "https://picsum.photos/200/300",
            title: "Baslik",
            link: "furkanguler.com",
            linkText: "Linke Tikla",
            titleColor: "primary",
            textColor: "success",
            linkColor: "info",
            radius: "0",
            linkIsButton: false,
            popularity: "Not Popular",
          },
        ]}
      />
    </>
  );
};
export default App;
