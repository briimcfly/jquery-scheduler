var today = dayjs();
$(`#currentDay`).text(today.format(`dddd, MMMM YYYY`))

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
  hourBlock
  .clone()
  .appendTo(`#schedule`)
  .children().eq(0).text(dayjs().hour(shiftHour).format(`h A`));

  //add the Shift hour as an ID to each Text Area to reference later with stored events
  $(`.description`).last().attr(`id`, dayjs().hour(shiftHour).format(`h A`));

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



$(`button`).click(function(){
  let userEvent = $(this).prev('.description').val();
  let eventHour = $(this).siblings(`.hour`).text();

  let userEventData = {
    userEvent: userEvent,
    eventHour: eventHour
  };

  //Check localstorage for any eventData
  let existingDataJSON = localStorage.getItem(`eventData`);
  //If data exists, parse it.. else, return an empty array
  let existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

  //Check to see if a userEvent has already been applied to an eventHour
  let existingEvent = existingData.findIndex((event) => event.eventHour === eventHour);
  //If so... Update that hours entry with the new userEvent
  if(existingEvent !== -1) {
    existingData[existingEvent].userEvent = userEvent;
  }
  //if not... create new userEventData entry
  else {
    existingData.push(userEventData);
  }

  //set to local storage
  localStorage.setItem(`eventData`, JSON.stringify(existingData));
});

//Check Local Storage and Fill Text Area with Existing Data 

  let fromStorage = JSON.parse(localStorage.getItem(`eventData`));

  fromStorage.forEach(function(event){
    let storedEvent = event.eventHour;

    $(`.description`).each(function(){
      if($(this).attr("id") == storedEvent){
        $(this).val(event.userEvent);
      }
    })

  })










