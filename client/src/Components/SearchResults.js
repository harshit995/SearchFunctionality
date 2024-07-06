import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

const SearchResults = ({ results, onLoadMore, hasMoreResults }) => {
    return (
        <div>
            {results.length > 0 ? (
                results.map((result) => (
                    <Card key={result.id} className="mb-3">
                        <Card.Body>
                            <Card.Text>{result.text}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <Alert variant="warning">No results found</Alert>
            )}
            {hasMoreResults && results.length > 0 && (
                <Button onClick={onLoadMore} className="mb-3">
                    Load More
                </Button>
            )}
        </div>
    );
};

export default SearchResults;
