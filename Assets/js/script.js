var today = dayjs();
$(`#currentDay`).text(today.format(`dddd, MMMM YYYY`))
  // $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  // });

//Hour Row
var hourBlock = 
$(`<div>`, {
  class: "row time-block"
})
.append($(`<div>`, {
    class: "col-2 col-md-1 hour text-center py-3"
  }))
.append($(`<textarea>`, {
  class: "col-8 col-md-10 description",
  rows: "3"
}))
.append($(`<button>`, {
    class: "btn saveBtn col-2 col-md-1",
    "aria-label": "save"
  })
  .append($(`<i>`, {
    class: "fas fa-save",
    "aria-hidden": "true"
  }))
  );

  //Shift Start Time (in 0-23)
  var shiftHour = 15;

  //Current Hour (in 0-23)
  var currentHour = today.hour();

  //Total Shift Length
  var shiftLength = 8;


//Generate a row for each hour in Shift Length and apply Present, Past, or Future class
for (i=0; i < shiftLength; i++){
  console.log(shiftHour);
  console.log(currentHour);
  console.log(`-----------`);
  hourBlock
  .clone()
  .appendTo(`#schedule`)
  .children().eq(0).text(dayjs().hour(shiftHour).format(`h A`));

  //if this row = current hour...
  if(shiftHour == currentHour) {
    $(`#schedule > div`).last().addClass("present");
  }
  //if this row = past hour...
  else if (shiftHour < currentHour){
    $(`#schedule > div`).last().addClass("past");
  }
  //if this row = future hour...
  else {
    $(`#schedule > div`).last().addClass("future");
  }

  shiftHour ++;
}
