import React from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

export const HelloStylePage = () => {
  const { message, text, background } = useParams();
  return (
    <div className="text-center">
      <Header />
      <div className="pt-5">
        <Card style={{ background: background }}>
          <Card.Body>
            <Card.Title style={{ color: text }}>
              { message }
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}