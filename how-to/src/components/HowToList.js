import React from "react";
import HowTo from "./HowTo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const Posts = styled.div`
  display: flex;
  height: fit-content;
  width: 350px;
  flex-grow: 1;
  flex-direction: column;
  word-wrap: break-word;
  padding: 2%;
  margin: 2%;
  justify-content: space-evenly;
  box-sizing: border-box;
  background-color: white;
  border-radius: 15px;
  border: #016fb9 solid 5px;
`;

const HowToList = props => {
  return (
    <div className="articles-container">
      {props.guides.map(art => {
        return (
          <Posts>
            <h2>{art.guide_name}</h2>
            <p className="desc">{art.description}</p>
            <Link
              style={{
                color: "white",
                backgroundColor: "#016fb9",
                borderRadius: "10px",
                padding: "1% 3%",
                textDecoration: "none"
              }}
              to={`/dashboard/posts/${art.id}`}
            >
              View Full Article
            </Link>
          </Posts>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    guides: state.guides,
    author: state.author,
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(HowToList);
