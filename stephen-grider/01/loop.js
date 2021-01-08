const pendingTimers = [];
const pendingOSTask = [];
const pendingOperations = [];

// New timers, task, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {

  // Check one: Any pending setTimeout, setInterval, setInmediate
  // Check two: Any pending OS task? (Like server listening)
  // Check three: Any pending long running operations? (like fs module)
  return pendingTimers.length | pendingOSTask.length | pendingOperations.length;

}


while (shouldContinue()) {
  // 1. Node looks at pendingTimers and sees if any functions are to be called, setTimeout, setInterval
  // 2. node looks at pendingOSTask and pendingOperations and calls relevant callbacks
  // 3. Pause execution.. continue when
  //  - a new pendingOSTask is done
  //  - a new pendingOperation is done
  //  - a timer is aboit to complete
  // 4. Look at pendingTimers, Call any setImmediate
  // 5. Handle any 'close' event
}

