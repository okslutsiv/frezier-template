import React, { Component } from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function AccordionPanel(props) {
  return (
    <div className="accordion">
      <ExpansionPanel className="panel">
        <ExpansionPanelSummary
          className="summary"
          expandIcon={<ExpandMoreIcon fill="red" />}
        >
          <h5>Стрижка та укладання волосся</h5>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <table style={{ width: "80%", margin: "1rem auto" }}>
            <tbody>
              <tr>
                <td>Стрижка, миття голови, вкладання, стайлінг</td>
                <td>300</td>
              </tr>
              <tr>
                <td>Вкладання волосся</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Вечірня зачіcка</td>
                <td>600</td>
              </tr>
              <tr>
                <td>Весільна зачіcка</td>
                <td>1300</td>
              </tr>
            </tbody>
          </table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
