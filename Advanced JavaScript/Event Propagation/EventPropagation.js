//*=================================== 
//*Event Propagation: 
//*===================================

//? Event propagation refers to the process of how events propagate or travel through the DOM (Document Object Model) hierarchy. 
// In JavaScript, there are two phases of event  propagation: 
//** */ 1.Capturing phase
//** */ 2.Bubbling phase. 
// 
// Understanding event propagation is crucial for managing and handling events in complex web applications. 


// =================================== 
// Phases of Event Propagation: 
// ===================================

//! Capturing Phase:
// The event starts from the root of the DOM and goes down to the target element.
// Handlers registered for the capturing phase are executed.

//! Target Phase:
// The event reaches the target element.
// The handler registered for the target phase is executed.

//! Bubbling Phase:
// The event starts from the target element and bubbles up to the root of the DOM.
// Handlers registered for the bubbling phase are executed.

// !event.stopPropagation()
// The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.