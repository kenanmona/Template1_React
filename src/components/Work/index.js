import React, { Component } from "react";
import axios from "axios";
import {
  WorkSection,
  WorkTitle,
  WorkPart,
  WorkContent,
  Icon,
  PartTitle,
  Line,
  PartDesc,
} from "./style";
class Work extends Component {
  state = {
    work: [],
  };

  componentDidMount() {
    axios
      .get("js/data.json")
      .then((res) => this.setState({ work: res.data.works }));
  }
  render() {
    const { work } = this.state;
    const workList = work.map((workItem) => {
      return (
        <WorkPart key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>{workItem.body}</PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <span>My</span> Work
          </WorkTitle>
          <WorkContent>{workList}</WorkContent>
        </div>
      </WorkSection>
    );
  }
}
export default Work;
