// Importing events
const EventEmitter = require("events");

// Initializing event emitter instances
var eventEmitter = new EventEmitter();

// Register to error
eventEmitter.on("error", (err) => {
  console.error("Attention! There was an error");
});

// Register to newListener
eventEmitter.on("newListener", (event, listener) => {
  console.log(`The listener is added to ${event}`);
});

// Register to removeListener
eventEmitter.on("removeListener", (event, listener) => {
  console.log(`The listener is removed from ${event}`);
});

// Declaring listener myEvent1
var rohit1 = (msg) => {
  console.log("Message from rohit patil 40 " + msg);
};

// Declaring listener  myEvent2
var rohit2 = (msg) => {
  console.log("Message from 40 rohit " + msg);
};

// Listening to myEvent with rohit1 and rohit2
eventEmitter.on("myEvent", rohit1);
eventEmitter.on("myEvent", rohit2);

// Removing listener
eventEmitter.off("myEvent", rohit1);

// Triggering myEvent
eventEmitter.emit("myEvent", "Event occurred");

// Triggering error
eventEmitter.emit("error", new Error("Attention!"));
