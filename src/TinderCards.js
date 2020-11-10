import React, {useEffect, useState} from 'react';
import "./TinderCards.css"
import TinderCard from "react-tinder-card";
import axios from './axios'

function TinderCards(props) {

    const [people, setPeople] = useState([])

    //GOOD way to push to an array in react
    // setPeople([...people,'sohail', 'sarah'])

    useEffect(() => {

        //here we are using the new way/ async way to get the datat from the api and
        //the axios we imported here is the local one
        async function fetchData() {
            const req = await axios.get('/tinder/cards')

            setPeople(req.data)

        }

        fetchData().then(r => console.log("working!"))
            .catch( err => console.log(err))
    },[])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: ", nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name, " left the screen!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{background: `url(${person.imgUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"}}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;