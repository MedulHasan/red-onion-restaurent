import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1 className="cover-text">Best food waiting for your belly</h1>
                <InputGroup className="mb-3 px-5">
                    <FormControl
                        placeholder="Search food items"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2" className="bg-danger text-white">
                        <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                </InputGroup>
            </div>
        </div>
    );
};

export default Banner;