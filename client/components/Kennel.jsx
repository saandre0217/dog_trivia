import React, { useState, useEffect } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import axios from "axios";
import Dog from "./Dog.jsx";

function Kennel() {
  const [dogs, setDogs] = useState([]);
  const [userId, setUserId] = useState("");
  const [coins, setUserCoins] = useState(0);
  const [breeds, setList] = useState([]);
  const [dogView, setDogView] = useState("");
  const [dogShop, setShop] = useState(false);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUserId(user._id);
    setUserCoins(user.coinCount);
    setList(user.breeds);
  }, []);

  useEffect(() => {
    axios
      .get(`/kennel/${userId}`)
      .then(({ data }) => {
        console.log(data);
        setDogs(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userId]);

  const handleSubmit = () => {
    
  }

  return (
    <div>
      <Container>
        <Button onClick={() => setShop(true)}>add dog</Button>
        {dogShop ? (
          <>
        <Image src={dogView} alt="" rounded style={{ width: 200 }} />
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Dog name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Dog</Form.Label>
              <Form.Select onChange={(e) => setDogView(e.target.value)}>
                <option>Open this select menu</option>
                {breeds.map((dog, index) => {
                  return (<option key={index} value={dog}>{dog}</option>);
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group>
            <Form.Label>10 coins</Form.Label>
              <Button
                variant="primary"
                type="submit"
                onClick={() => handleSubmit}
              >
                Buy Dog
              </Button>
            </Form.Group>
          </>
        ) : (
          ""
        )}
      </Container>

      <div>
        {Array.isArray(dogs) && dogs.length > 0 ? (
          dogs
            .filter((dog) => {
              const now = new Date().getTime();

              const feed =
                ((Date.parse(dog.feedDeadline) - now) / 86400000) * 100;
              const walk =
                ((Date.parse(dog.walkDeadline) - now) / 86400000) * 100;

              if (walk < 0 || feed < 0) {
                alert(`${dog.name} ran away!`);
                axios
                  .delete(`/kennel/${dog._id}`)
                  .then(({ data }) => {
                    axios
                      .get(`/kennel/${data.owner}`)
                      .then(({ data }) => setDogs(data))
                      .catch((err) => {
                        console.error(err);
                      });
                  })
                  .catch((err) => {
                    console.error(err);
                  });

                return false;
              } else {
                return true;
              }
            })
            .map((dog) => {
              return (
                <Container key={dog._id}>
                  <Dog dog={dog} />
                </Container>
              );
            })
        ) : (
          <h1>NO DOGS</h1>
        )}
      </div>
    </div>
  );
}

export default Kennel;
