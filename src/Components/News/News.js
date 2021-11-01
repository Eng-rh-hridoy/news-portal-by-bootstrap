import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './News.css';

const News = (props) => {
    const {title, urlToImage, content, publishedAt} = props.news
    return (
        <div className="card-container">
            <Card className="bg-dark text-white">
                <Card.Img src={urlToImage} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Card.Text>{publishedAt}</Card.Text>
                    <Button variant="primary">See more..</Button>
                </Card.ImgOverlay>
            </Card>
            <br />
        </div>
    );
};

export default News;