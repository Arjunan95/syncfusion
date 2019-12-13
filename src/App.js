import * as React from "react";
//import * as ReactDOM from "react-dom";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewsDirective,
  ViewDirective,
  TimelineViews
} from "@syncfusion/ej2-react-schedule";
import { L10n } from "@syncfusion/ej2-base";
import "./App.css";

//import { Item } from "@syncfusion/ej2-splitbuttons";
//import LocalData from "./SampleData";
//import { Item } from "@syncfusion/ej2-splitbuttons";
//import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

L10n.load({
  "en-US": {
    schedule: {
      saveButton: "submit",
      cancelButton: "Close",
      deleteButton: "Remove",
      newEvent: "Building Details"
    }
  }
});
class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      appointmentColor: "red"
    };
    this.data = [
      {
        Id: 1,
        buildingName: "Burj kalifa",
        orderID: 451515,
        StartTime: new Date(2019, 11, 15, 10, 0),
        EndTime: new Date(2019, 11, 15, 12, 30),
        status: "Assesed",
        appointmentTime: new Date(2019, 11, 15),
        integratorAdmin: "mohammed",
        integratorTeam: "salman But"
      },
      {
        Id: 2,
        buildingName: "Thule Air Crash Report",
        orderID: 21512,
        StartTime: new Date(2019, 11, 16, 10, 0),
        EndTime: new Date(2019, 11, 16, 12, 30),
        status: "Pending",
        appointmentTime: new Date(2019, 11, 16),
        integratorAdmin: "Ajmal",
        integratorTeam: "akmal"
      },
      {
        Id: 3,
        buildingName: "Blue Moon Eclipse",
        orderID: 336221,
        StartTime: new Date(2019, 11, 17, 10, 0),
        EndTime: new Date(2019, 11, 17, 12, 30),
        status: "Completed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Riyas",
        integratorTeam: "rashid khan"
      },
      {
        Id: 4,
        buildingName: "Meteor Showers in 2018",
        orderID: 84848,
        StartTime: new Date(2019, 11, 17, 10, 0),
        EndTime: new Date(2019, 11, 17, 12, 30),
        status: "Inprogress",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib"
      }
    ];
  }

  eventTemplate = data => {
    let { appointmentColor } = this.state;
    console.log("data==>", data);
    if (data.status === "Assesed") {
      // this.setState({ buildingname:data.buildingName  });
      return (
        <div
          //className="template-wrap"
          style={{
            background: appointmentColor,
            width: "100%",
            paddingHorizontal: "3%"
          }}
        >
          <label
            style={{
              textAlign: "center",
              paddingHorizontal: "5%",
              marginLeft: "5%",
              color: "black"
            }}
          >
            {data.buildingName}
          </label>
        </div>
      );
    } else if (data.status === "Pending") {
      return (
        <div
          //className="template-wrap"
          style={{
            background: "Yellow",
            width: "100%",
            paddingHorizontal: "3%"
          }}
        >
          <label
            style={{
              textAlign: "center",
              paddingHorizontal: "5%",
              marginLeft: "5%",
              color: "black"
            }}
          >
            {data.buildingName}
          </label>
        </div>
      );
    } else if (data.status === "Completed") {
      return (
        <div
          //className="template-wrap"
          style={{
            background: "green",
            width: "100%",
            paddingHorizontal: "3%",
            color: "black"
          }}
        >
          <label
            style={{
              textAlign: "center",
              paddingHorizontal: "5%",
              marginLeft: "5%"
            }}
          >
            {data.buildingName}
          </label>
        </div>
      );
    } else if (data.status === "Inprogress") {
      return (
        <div
          //className="template-wrap"
          style={{
            background: "grey",
            width: "100%",
            paddingHorizontal: "3%"
          }}
        >
          <label
            style={{
              textAlign: "center",
              paddingHorizontal: "5%",
              marginLeft: "5%",
              color: "black"
            }}
          >
            {data.buildingName}
          </label>
        </div>
      );
    }
  };
  editorWindowTemplate = () => {
    return (
      <table className="custom-event-editor">
        <tbody className="secondTableData">
          <tr>
            <td>Building Name</td>
            <td className="secondTableData">Order ID</td>
          </tr>
          <tr>
            <td>
              <input
                className="e-field Inputcommon"
                name="buildingName"
                type="text"
              />
            </td>
            <td>
              <input
                className="e-field Inputcommon"
                name="orderID"
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td>Status</td>
            <td>Appointment Time</td>
          </tr>
          <tr>
            <td>
              <input
                className="e-field Inputcommon"
                name="status"
                type="text"
              />
            </td>
            <td>
              <input
                className="e-field Inputcommon"
                name="appointmentTime"
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td>Integrator Admin</td>
            <td>Integrator Team</td>
          </tr>
          <tr>
            <td>
              <input
                className=" e-field Inputcommon"
                name="integratorAdmin"
                type="text"
              />
            </td>
            <td>
              <input
                className="e-field Inputcommon"
                name="integratorTeam"
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  render() {
    var d = new Date();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    var yy = d.getFullYear();

    var myDateString = yy + "," + mm + "," + dd; //(US)

    console.log(myDateString);
    return (
      <ScheduleComponent
        height="550px"
        selectedDate={new Date(myDateString)}
        IsBlock={true}
        // editable={false}

        eventSettings={{
          dataSource: this.data,
          IsBlock: true,
          template: this.eventTemplate
        }}
        editorTemplate={this.editorWindowTemplate}
      >
        <ViewsDirective>
          <ViewDirective
            option="Month"
            isSelected={true}
            IsBlock={true}

            //showWeekNumber={true}
            //showWeekend={false}
          ></ViewDirective>

          <ViewDirective option="Week"></ViewDirective>
          <ViewDirective option="Day"></ViewDirective>
          <ViewDirective option="Agenda"></ViewDirective>
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, TimelineViews, Month, Agenda]}
        />
      </ScheduleComponent>
    );
  }
}
export default App;
