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
        <div className="mygallery">
        <img src="dalmatian.jpg" />
        <img src="Camille Przewodek.jpg" />
        <img src="Bycicle.jpg" />
        <img src="Artificial Flowers - Prettiest Paper and Silk Flowers.jpg" />
        <img src="A 50s Fantasy Colour Pop Vintage Wedding.jpg" />
        <img src="Cristiano Ronaldo 2019 Skills and Goals.jpg" />
        <img src="Easy Tomato Cucumber Salad.png" />
        <img src="The Ultimate Amalfi Coast, Italy Travel Guide - JetsetChristina.jpg" />
        <img src="20 Photos to Inspire You to Visit Egypt • The Blonde Abroad.jpg" />
        <img src="The Most Impressive Norwegian Football Grounds.png" />
        <img src="Visual Perspectives - VIE Magazine.jpg" />
        <img src="Where to Find Blooming Flower Fields and Orchards in California.jpg" />
        <img src="What To Do In Rome, Italy_ A First-Timer's Guide | One Girl, Whole World.jpg" />
        <img src="David Beckham Phone Wallpaper.jpg" />
        <img src="HighKitchen.jpg" />
        <img src="An excellent NO YEAST Pizza Dough - super quick!.jpg" />
        </div>
        <ImageList images={this.state.photos} />
    </div>
    );
    };
}

export default Photos;
