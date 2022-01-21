//work_day_scheduler - James D.
//comment heavily for reference and learning purposes



// jQuery to set container value
var container = $(".container");
// subtract 9 from value for ease of use in for loop
var currentHour = moment().hour() - 9;
var workHour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]


var currentDay = moment().format("dddd MMMM Do" + ", " + "YYYY");
// arrow function to display current date
var displayDate = () => {
  $("#currentDay").text(currentDay);
};


//time block grid for standard business hours 9am-5pm (color code rows based on past/present/future time)
function eventScheduler() {
  //create row for 9 hour workday and assign attribute to time for styling past present and future
  for (i = 0; i < 9; i++) {
      if (i < currentHour) {
          var time = "past";
      }
      else if (i === currentHour) {
          var time = "present";
      }
      else if (i > currentHour) {
          var time = "future";
      }
// row setup: workhour| event-text | save-button - utilize provided style.css for attributes
      // create row and append to container
      var row = $("<div>");
          row.attr("class", "row");
          container.append(row);
      // create workhour label and append to row
      var label = $("<label>");
          label.attr("class", "col-2 col-sm-1 time-block hour");
          label.text(workHour[i]);
          row.append(label);
      // create multiline textarea and append to row
      var textArea = $("<textarea>");
          // add time class based on conditional to determine color of row
          textArea.attr("class", "col-8 col-sm-10 description " + time);
          // populate textarea with localStorage event info
          textArea.text(localStorage.getItem("btn" + i));
          row.append(textArea);
      // create button and append to row
      var button = $("<button>");
          button.attr("class", "col-2 col-sm-1 saveBtn fas fa-save");
          button.attr("id", "btn" + i);
          row.append(button);
  };
};

//TODO: saveEvent function onclick; change styling for readability

eventScheduler();
