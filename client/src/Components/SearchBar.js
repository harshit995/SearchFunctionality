import React, { useState, useEffect } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import _ from 'lodash';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handleDebounce = _.debounce(() => {
            if (query.length >= 3) {
                onSearch(query);
            }
        }, 500);

        handleDebounce();
        return () => {
            handleDebounce.cancel();
        };
    }, [query, onSearch]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (query.length >= 3) {
                onSearch(query);
            }
        }
    };

    return (
        <div className="search-bar">
            <Form>
                <FormControl
                    type="text"
                    placeholder="Type atleast 3 letters for searching...."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="mb-3"
                />
            </Form>
        </div>
    );
};

export default SearchBar;
