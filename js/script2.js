$(document).ready(function () {
  var viewportWidth = window.innerWidth;
  if (viewportWidth <= 591) {
    $(".cards-holder").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      variableWidth: true,
      // autoplay: true,
      autoplaySpeed: 2000,
    });
  }
});

// Function to generate a calendar for a given month and year
function generateCalendar(year, month, specialDays) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // Create a new card-holder div for each month
  const $cardHolder = $('<div>').addClass('card-holder').appendTo('.calender-card-holder');
  const $calenderCard = $('<div>').addClass('calender-card').appendTo($cardHolder);
  const $table = $('<table>').appendTo($calenderCard);
  const $tbody = $('<tbody>').appendTo($table);
  const $caption = $('<caption>').text(`${monthNames[month]} ${year}`).appendTo($table);

  // Create header row with day names
  const $headerRow = $('<tr>').appendTo($tbody);
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dayNames.forEach(day => {
    $('<th>').text(day).appendTo($headerRow);
  });

  // Determine the number of weeks needed for the month
  const weeksInMonth = Math.ceil((firstDayOfWeek + daysInMonth) / 7);

  // Create the calendar days
  let dayCount = 1;
  for (let i = 0; i < weeksInMonth; i++) {
    const $row = $('<tr>').appendTo($tbody);
    for (let j = 0; j < 7; j++) {
      const $td = $('<td>').appendTo($row);
      if (i === 0 && j < firstDayOfWeek) {
        // Empty cells before the first day of the month
        $td.text('');
      } else if (dayCount <= daysInMonth) {
        // Fill in the days of the month
        $td.text(dayCount);

        // Check if the day is a special day and add the class
        const currentDay = new Date(year, month, dayCount).getDay();
        if (
          specialDays[monthNames[month]] &&
          (specialDays[monthNames[month]].includes(dayCount) || currentDay === 0 || currentDay === 6)
        ) {
          $td.addClass('special-day');
        }

        dayCount++;
      } else {
        // Break the loop if we've reached the end of the month
        break;
      }
    }
  }
}
// Define month names
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Define special days
const specialDays = {
  January: [1],
  December: [25, 26, 27, 28, 29, 30, 31],
  February: [],
  March:[],
  April:[],
  May:[],
  June:[],
  July:[],
  August:[],
  September:[],
  October:[],
  November:[],
};

// Set start and end dates
const startDate = new Date(2023, 11); // December 2023
const endDate = new Date(2024, 10); // November 2024

// Generate calendars for each month
for (
  let currentDate = new Date(startDate);
  currentDate <= endDate;
  currentDate.setMonth(currentDate.getMonth() + 1)
) {
  generateCalendar(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    specialDays
  );
}

// Initialize Slick Slider
$(".calender-card-holder").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<a class="slick-prev">&lt;</a>',
  nextArrow: '<a class="slick-next">&gt;</a>',
});
