import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Photos.css";
import pexels from '../Components/Pexels';
import SearchBar from '../Components/SearchBar';
import ImageList from '../Components/ImageList';

class Photos extends React.Component {
    state = { photos: [] };

    onSearchSubmit = async (term) => {
        const response = await pexels.get(`/v1/search`, {
            params: {
                query: term,
                per_page: 100,
                page: 1
            }
        });

        this.setState({ photos: response.data.photos });
    }

    render() {
    return (
    <div className="container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.photos} />
    </div>
    );
    };
}

export default Photos;
