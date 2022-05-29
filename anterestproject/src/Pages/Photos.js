import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Photos.css";

export default function Foto() {
  return (
    <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      <Card
        img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30 minute meal!"
      />

      <Card
      img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      title="The Everyday Salad"
      description="Take your boring salads up a knotch. This recipe is perfect for lunch
      and only contains 5 ingredients!"
            />

      <Card
      img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      title="The Everyday Salad"
      description="Take your boring salads up a knotch. This recipe is perfect for lunch
        and only contains 5 ingredients!"
    />

      <Card
      img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      title="The Everyday Salad"
      description="Take your boring salads up a knotch. This recipe is perfect for lunch
        and only contains 5 ingredients!"
    />

       <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      <Card
      img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      title="The Everyday Salad"
      description="Take your boring salads up a knotch. This recipe is perfect for lunch
        and only contains 5 ingredients!"
    />

       <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />


    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="cardbody">
        <img src={props.img} alt="description" class="cardimage" />
        <h2 className="cardtitle">{props.title}</h2>
        <p className="carddescription">{props.description}</p>
      </div>
      <button className="cardbtn">View Recipe</button>
    </div>
  );
}

ReactDOM.render(<Foto/>, document.getElementById("root"));

