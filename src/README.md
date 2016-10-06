- One SINGLE state for the WHOLE application
- The state tree is READ only. Dispatching an action allow to "change" the state tree. Structure MUST contain a "type" property, and can contain anything else
- The reducer takes 2 parameters : the current state and the action (object). It return the new state of the whole application
- Store : createStore receive the reducer function in parameter. It has 3 methods :
  - getState() : Return the current state of the APP
  - dispatch(action) : action = {type:'ACTION_NAME', whatever:whatyouwant}.
  - subscribe(callback): callback = function. Called after any action has been dispatch

- ./components : All files contained in this folder are "Presentationnal components". They do NOT contain any logic
- ./containers : All files containes in this folder are "Containers components".

- Use provider ONLY for injection dependency
