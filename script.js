// add data to variable for easy access
var data = [
    {   
        "id": 1,
        "day": "Monday",
        "time": "08:00",
        "description": "Laugh to Your Heart’s Content" 
    },
    {   
        "id": 2,
        "day": "Monday",
        "time": "11:00",
        "description": "Dance Like No One’s Watching" 
    },
    {   
        "id": 3,
        "day": "Monday",
        "time": "16:00",
        "description": "Make Dinner for homeless guy" 
    },
    {   
        "id": 4,
        "day": "Tuesday",
        "time": "07:00",
        "description": "Change Your Morning Routine" 
    },
    {   
        "id": 5,
        "day": "Tuesday",
        "time": "10:00",
        "description": "Go People Watching" 
    },
    {   
        "id": 6,
        "day": "Tuesday",
        "time": "18:00",
        "description": "Do Something Stupid" 
    },
    {   
        "id": 7,
        "day": "Wednesday",
        "time": "08:00",
        "description": "Sing in the Shower" 
    },
    {   
        "id": 8,
        "day": "Wednesday",
        "time": "13:00",
        "description": "Listen to Nature Sounds" 
    },
    {   
        "id": 9,
        "day": "Wednesday",
        "time": "15:00",
        "description": "Join a Club" 
    },
    {   
        "id": 10,
        "day": "Thursday",
        "time": "06:00",
        "description": "Strike a Pose" 
    },
    {   
        "id": 11,
        "day": "Thursday",
        "time": "09:00",
        "description": " Challenge Yourself" 
    },
    {   
        "id": 12,
        "day": "Thursday",
        "time": "20:00",
        "description": "Reconnect with an Old Friend" 
    },
    {   
        "id": 13,
        "day": "Friday",
        "time": "09:00",
        "description": "Learn a Joke" 
    },
    {   
        "id": 14,
        "day": "Friday",
        "time": "12:00",
        "description": "Become an Expert" 
    },
    {   
        "id": 15,
        "day": "Friday",
        "time": "19:00",
        "description": "Take a Class" 
    },
    {   
        "id": 16,
        "day": "Saturday",
        "time": "07:00",
        "description": "Change Your Look" 
    },
    {   
        "id": 17,
        "day": "Saturday",
        "time": "12:00",
        "description": "Excite Your Palate" 
    },
    {   
        "id": 18,
        "day": "Saturday",
        "time": "21:00",
        "description": "Begin a Diary" 
    },
    {   
        "id": 19,
        "day": "Sunday",
        "time": "10:00",
        "description": "Embrace Your Curiosity" 
    },
    {   
        "id": 20,
        "day": "Sunday",
        "time": "11:00",
        "description": "Pretend to Be a Tourist" 
    },
    {   
        "id": 21,
        "day": "Sunday",
        "time": "17:00",
        "description": "Drive Away with No Destination in Mind" 
    }
];

const inspiration = [
    {  
        "text":"The only people who never fail are those who never try.",
        "from":"Ilka Chase"
     },
     {  
        "text":"Failure is just another way to learn how to do something right.",
        "from":"Marian Wright Edelman"
     },
     {  
        "text":"I failed my way to success.",
        "from":"Thomas Edison"
     },
     {  
        "text":"Every failure brings with it the seed of an equivalent success.",
        "from":"Napoleon Hill"
     },
     {  
        "text":"Only those who dare to fail greatly can ever achieve greatly.",
        "from":"John F. Kennedy"
     },
     {  
        "text":"It is hard to fail, but it is worse never to have tried to succeed.",
        "from":"Theodore Roosevelt"
     },
     {  
        "text":"Imagination is more important than knowledge.",
        "from":"Albert Einstein"
     },
     {  
        "text":"Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
        "from":"Langston Hughes"
     },
     {  
        "text":"The future belongs to those who believe in the beauty of their dreams.",
        "from":"Eleanor Roosevelt"
     },
     {  
        "text":"Go confidently in the direction of your dreams. Live the life you have imagined.",
        "from":"Henry David Thoreau"
     },
     {  
        "text":"You cannot depend on your eyes when your imagination is out of focus.",
        "from":"Mark Twain"
     },
     {  
        "text":"Commitment leads to action. Action brings your dream closer.",
        "from":"Marcia Wieder"
     },
     {  
        "text":"I never think of the future",
        "from":"it comes soon enough.\""
     },
     {  
        "text":"Don't waste your life in doubts and fears: Spend yourself on the work before you, well assured that the right performance of this hour's duties will be the best preparation for the hours or ages that follow it.",
        "from":"Ralph Waldo Emerson"
     },
     {  
        "text":"Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
        "from":"Benjamin Franklin"
     },
     {  
        "text":"Take time to deliberate; but when the time for action arrives, stop thinking and go in.",
        "from":"Andrew Jackson"
     },
     {  
        "text":"The mind that is anxious about future events is miserable.",
        "from":"Seneca"
     },
     {  
        "text":"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influences of each.",
        "from":"Henry David Thoreau"
     },
     {  
        "text":"The art of leadership is saying no, not yes. It is very easy to say yes.",
        "from":"Tony Blair"
     },
     {  
        "text":"A leader is a dealer in hope.",
        "from":"Napoleon Bonaparte"
     },
     {  
        "text":"While a good leader sustains momentum, a great leader increases it.",
        "from":"John C. Maxwell"
     },
     {  
        "text":"A general is just as good or just as bad as the troops under his command make him.",
        "from":"General Douglas MacArthur"
     },
     {  
        "text":"To do great things is difficult; but to command great things is more difficult.",
        "from":"Friedrich Nietzsche"
     }
]

// set months array for easy parsing
const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

// weekdays start on sunday
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// set global variables
var date = new Date();
var year = date.getFullYear();
var month = months[date.getMonth()];
var day = date.getDate();
var weekDay = weekdays[date.getDay()];
var hour = date.getHours();
var minutes = date.getMinutes();
var activeDay = weekDay;

// Function declarations

// event handler for select color method
function changeColor(e) {
    document.body.style.backgroundColor = e.value;
    document.getElementById('main').style.backgroundColor = e.value;
}

// event handler for name change method, has to pass parameter name
function changeName(name) {
    document.getElementById('name').innerHTML = name.value.length !== 0 ? name.value : 'User';
}

// displays average temperature and weather condition in Copenhagen
function getForecast() {
    // define simple url with predefined location
    var URL = 'https://api.aerisapi.com/forecasts/Copenhagen,DK?client_id=xHdB08opZ2q5M41k073Ww&client_secret=oANwcdZtXeOgYjXTgb6XuqvJTyHpVYB5g1eQVU4X';

    fetch(URL, {
        method: "GET"
    }).then(response => {
        // try parsing json from the request
        response.json().then(resp => {
            // if successfull choose the first period and first part of response
            var weather = resp.response[0].periods[0];
            var temp = weather.avgTempC;
            var type = weather.weather.toLowerCase();
            // set the element to weather string
            document.getElementById('weather').innerHTML = `Today in Copenhagen is ${type} and the tempareture is approximately ${temp} degrees of celsius or ${273 + temp}K`
        }); 
    }).catch(err => {
        console.error(err);
    })
}

// add tasks from the input field #new-task
function addTask() {
    var task = document.getElementById('new-task').value;
    var time = document.getElementById('new-task-time').value;

    if(task.length === 0 || time.length === 0)
        return;
    
    var obj = {
        // gen id
        id: Math.floor(Math.random() * 1000),
        day: activeDay,
        time: time,
        description: task
    };

    data.push(obj);
    addTaskToList(obj);
}

// updates the list displayed, does not change any of the global variables
function updateList(day = activeDay) {
    data.forEach(file => {
        if(file.day === day)
            addTaskToList(file);
    });
}

// creates new element in list container
function addTaskToList(task) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(`${task.description} | ${task.time}`);

    var d = new Date();

    var time =  parseInt(d.getHours().toString() + (d.getMinutes() < 10 ? '0' + d.getMinutes().toString() : d.getMinutes().toString()));
    var taskTime = '';

    task.time.split(':').forEach(elem => {
        taskTime += elem;
    });

    taskTime = parseInt(taskTime);

    var button = document.createElement('input');

    button.setAttribute('onclick', `deleteTask(${task.id})`);
    button.setAttribute('value', 'X');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'delete-btn');
    button.setAttribute('class', 'btn');

    // attach disabled class if the time has already passed
    if(time > taskTime && weekDay === task.day)
        node.setAttribute('class', 'disabled');

    node.appendChild(textNode);
    node.appendChild(button);
    document.getElementById('task-list').appendChild(node);
}

// event handler for changing tabs today's/tomorrow's tasks
function displayTasks(e, day) {
    Array.from(document.getElementsByClassName('tab-link')).forEach(el => {
        el.classList.remove('active');
    });

    e.classList.add('active');
    document.getElementById('task-list').innerHTML = '';
    activeDay = day === 'today' ? weekDay : weekdays[date.getDay() + 1];

    updateList(activeDay);
}

// event handler for deleting tasks, updates the list and view
function deleteTask(id){
    data = data.filter(item => {
        return id !== item.id;
    });

    document.getElementById('task-list').innerHTML = '';
    updateList()    
}

// sets appropriate greeting depending on time
function setGreeting(hour) {
    var greeting;
    if(hour >= 4 && hour < 10) {
        greeting = 'Good morning';
    } else if( hour >= 10 && hour < 14) {
        greeting = 'Good day';
    } else if(hour >= 14 && hour < 18) {
        greeting = 'Good afternoon';
    } else if(hour >= 18 && hour < 24) {
        greeting = 'Good evening';
    } else {
        greeting = 'Hello';
    }

    document.getElementById('greeting').innerHTML = greeting;
}

// initialize quote and start the timer
function initQuote() {
    displayQuote();
    setTimeout(setQuote, 5000);
}

function setQuote() {
    fadeOut(document.getElementById('quote-container'))
        .then(res => {
            displayQuote();
            fadeIn(document.getElementById('quote-container'));
        });
}

function displayQuote() {
    var quote = inspiration[Math.floor(Math.random() * inspiration.length)];

    document.getElementById('quote').innerHTML = quote.text;
    document.getElementById('quote-author').innerHTML = quote.from;
}

var getDay = day => {
    if(day % 10 === 1 && day !== 11) {
        return `${day}st`;
    }
    if(day % 10 === 2 && day !== 12) {
        return `${day}nd`;
    }
    if(day % 10 === 3 && day !== 13) {
        return `${day}rd`;
    }
    return `${day}th`;
}

var formatTime = (hour, minute) => {
    var prefix = hour < 12 ? 'AM' : 'PM';
    var hr = hour % 12 !== 0 ? hour % 12 : hour;
    var min = minute < 10 ? '0' + minute : minute;
    hr = hr < 10 ? '0' + hr : hr;
    return `${hr}:${min} ${prefix}`;
}

// target has to be selected element already 
function fadeOut(target) {
    return new Promise(resolve => {
        var fade = setInterval(() => {
            if(!target.style.opacity) {
                target.style.opacity = 1;
            }
    
            if(target.style.opacity >= 0) {
                target.style.opacity -= 0.1;
            } else {
                clearInterval(fade);
                resolve();
            }
        }, 100);
    });
}

// target has to be selected element already
function fadeIn(target) {
    target.style.opacity = 1;
}

// time interval for updating the time element
var timeInterval = setInterval(() => {
    var d = new Date();

    var hour = d.getHours();
    var minutes = d.getMinutes();

    document.getElementById('time').innerHTML = formatTime(hour, minutes);
}, 2000);

// update list every 2 minutes
var updateTaskInterval = setInterval(() => {
    document.getElementById('task-list').innerHTML = '';
    updateList();
}, 120000);
// startup code down

document.getElementById('date').innerHTML = `${weekDay} ${getDay(day)} ${month} ${year}`;
document.getElementById('time').innerHTML = formatTime(hour, minutes);

getForecast();
updateList();
setGreeting(hour);
initQuote();

// time interval for switching quotes
var quoteInterval = setInterval(setQuote(), 10000);