import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import {
  selectCharacter,
  selectCharacterQuotes
} from "./../features/breakingBadApp/breakingBadSlice";
import { ListGroupItem } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"

export const CharacterDetails = (props) => {
  // const [character, setCharacter] = useState(props.character);
  // const [quotes, setQuotes] = useState(props.quotes);
  const character = useSelector(selectCharacter);
  const quotes = useSelector(selectCharacterQuotes)

  useEffect(() => {
    console.log(character)
    console.log(props)
  }, [])

  return (
    <div>
      {character.name && <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={character.img} />
        <Card.Body>
          <Card.Title>{character.name}-{character.nickname ? character.nickname : ""}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>born: {character.birthday}</ListGroup.Item>
            <ListGroup.Item>status : {character.status}</ListGroup.Item>
            <ListGroup.Item>"{character.occupation[0]}" {character.occupation[1] ? `"${character.occupation[1]}"` : ""}</ListGroup.Item>
            <ListGroup.Item>played by: {character.portrayed}</ListGroup.Item>
            <ListGroupItem></ListGroupItem>
          </ListGroup>
          Quotes: {quotes.length > 0 && quotes.map(quote => {
            return (
              <Card.Text key={quote.id}>
                "{quote.quote}"
              </Card.Text>
            )
          })}
        </Card.Body>
      </Card>}
    </div>
  )
}
