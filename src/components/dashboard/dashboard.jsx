import React, { useState, useEffect } from "react";
import { AddSubCard, AddPlus } from "./dasboardStyle.jsx";
import { Container, AddCard, SubContainer } from "./newDashboardStyle.jsx";
import { RiAddCircleFill } from "react-icons/ri";
import DashboardCard from "./dashboardCard.jsx";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import firebase from "firebase";
import { auth } from "../../firebase";

export const Dashboard = ({ ...props }) => {
  const [colleges, setColleges] = useState([]);
  const db = firebase.firestore();

  // when component mounts, this fetches user's list based on their unique firebase auth id
  useEffect(() => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .collection("colleges")
      .get()
      .then((response) => {
        let temp = [];
        // each document manually coded a unique id assigned in firebase
        response.forEach((doc) => {
          temp = [...temp, { ...doc.data(), DOCUMENT_ID: doc.id }];
        });
        // set the list of colleges to view
        setColleges(temp);
        console.log(temp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // view college list
  const collegeCards = colleges.map((val, index) => (
    <DashboardCard college={val} key={index} />
  ));

  return (
    <>
      <Navbar />
      <Container>
        <SubContainer>
          <h3>Your List</h3>
        </SubContainer>
        <SubContainer>
          {/* if the results are still being fetched, show loading  */}
          {/* if results are fetched, show results else show nothing */}
          {/* {loading ? (
            <LoadingCard />
          ) : (
            !loading && colleges.length > 0 && collegeCards
          )} */}
          {colleges.length > 0 && collegeCards}
          <AddCard>
            <Link to="/list">
              <RiAddCircleFill style={{ fontSize: "4em", color: "#F06B6B" }} />
            </Link>
          </AddCard>
        </SubContainer>
        <SubContainer>
          <h3>College Recommendations</h3>
        </SubContainer>
        <SubContainer>
          {/* if the results are still being fetched, show loading  */}
          {/* if results are fetched but empty, show statement */}
          {/* else, show all results */}
          {/* {loading ? (
            <LoadingCard recommendation={true} />
          ) : !loading && recommendations.length === 0 ? (
            <h4>Add colleges to your list to help you get the best matches</h4>
          ) : (
            recommendationCard
          )} */}
        </SubContainer>
      </Container>
    </>
  );
};
