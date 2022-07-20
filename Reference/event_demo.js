const EventEmitter = require('events')

// Create Class
class MyEmitter extends EventEmitter{ }

// Init Object
const myEmitter = new MyEmitter();

// Create Event Listerner
myEmitter.on('event', () => console.log('Event Fired!'))

// Init Event
myEmitter.emit('event');