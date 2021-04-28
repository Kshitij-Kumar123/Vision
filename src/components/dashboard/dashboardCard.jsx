import React from "react";
import { Content, Card, Information, IconContent } from "./dasboardStyle.jsx";
import { HiLocationMarker } from "react-icons/hi";
import { SiGooglescholar } from "react-icons/si";
import { MdMonetizationOn } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import firebase from "firebase";
import { auth } from "../../firebase";
import { BsBookHalf, BsTrashFill } from "react-icons/bs";
import {
  Header,
  SubData,
  Stats,
  AddIcon,
  WebsiteIcon,
  EditIcon,
  DeleteIcon,
} from "./newDashboardStyle.jsx";
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
  <>
    <Header>
      <div>
        {INSTNM}
        <a href={`https://${INSTURL}`}>
          <WebsiteIcon />
        </a>
      </div>
      <div>
        <HiLocationMarker /> {CITY}, {STABBR}
      </div>
    </Header>
    <SubData>
      <Stats>
        <div>Acceptance Rate</div>
        <div>{(ADM_RATE_ALL * 100).toFixed(2)}%</div>
      </Stats>
      {/* avg cost is a value which depends person to person so recommendation cards do not have avg_cost */}
      {AVG_COST && (
        <Stats>
          <div>Your cost after aid</div>
          <div>${parseInt(AVG_COST)}</div>
        </Stats>
      )}
      <Stats>
        <div>Avg ACT</div>
        <div>{Math.floor(ACT_AVG)}</div>
      </Stats>
      <Stats>
        <div>Avg SAT</div>
        <div>{SAT_AVG_ALL}</div>
      </Stats>
    </SubData>

    <SubData>
      <div>{ADD_NOTES ?? ""}</div>
    </SubData>

    <SubData>
      <a href={`/list/${DOCUMENT_ID}`}>
        <EditIcon />
      </a>

      <DeleteIcon onClick={deleteCollege} />
    </SubData>
  </>
</Card>
  );
}

