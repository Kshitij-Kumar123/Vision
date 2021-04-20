import React from "react";
import { Content, Card, Information, IconContent } from "./dasboardStyle.jsx";
import { HiLocationMarker } from "react-icons/hi";
import { SiGooglescholar } from "react-icons/si";
import { MdMonetizationOn } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import firebase from "firebase";
import { auth } from "../../firebase";
import { BsBookHalf, BsTrashFill } from "react-icons/bs";

export default function DashboardCard({ college, ...props }) {
  const {
    DOCUMENT_ID,
    INSTNM,
    CITY,
    ADM_RATE_ALL,
    STABBR,
    AVG_COST,
    SAT_AVG_ALL,
    INSTURL,
    ACT_AVG,
    ADD_NOTES,
  } = college;

  const iconStyle = { fontSize: "24px", margin: "0px 10px" };
  const db = firebase.firestore();
  const trashRed = "#a83a32";
  const lightBlue = "#46b3e6";
  const brightGreen = "#30c735";

  const deleteCollege = () => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .collection("colleges")
      .doc(`${DOCUMENT_ID}`)
      .delete()
      .then(() => {
        console.log("college deleted");
        // refresh the page after user deletes a college from list
        window.location.reload(false);
      });
  };
  return (
    <Card>
      <Information>
        <Content>
          <h3>{INSTNM}</h3>
        </Content>
        <Content>
          {" "}
          <HiLocationMarker style={iconStyle} /> {CITY}, {STABBR}{" "}
        </Content>
        <IconContent>
          {" "}
          <a href={`/list/${DOCUMENT_ID}`}>
            <FaEdit style={iconStyle} />
          </a>
        </IconContent>

        <IconContent color={trashRed} onClick={deleteCollege}>
          <BsTrashFill style={iconStyle} />
        </IconContent>
      </Information>
      {/* information about the academics focused info */}
      <Information>
        <Content>
          {" "}
          <SiGooglescholar style={iconStyle} /> Acceptance Rate:{" "}
          {ADM_RATE_ALL * 100}%{" "}
        </Content>
        <Content color={lightBlue}>
          {" "}
          <MdMonetizationOn style={iconStyle} /> Average Yearly Tuition: $
          {AVG_COST}
        </Content>
        <Content color={brightGreen}>
          {" "}
          <BsBookHalf style={iconStyle} /> Average ACT Score: {ACT_AVG}
        </Content>
        <Content color={brightGreen}>
          {" "}
          <BsBookHalf style={iconStyle} /> Average SAT Score: {SAT_AVG_ALL}
        </Content>
      </Information>
      <Information>
        <Content>{ADD_NOTES ?? ""}</Content>
      </Information>
    </Card>
  );
}
