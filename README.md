# React useEffect: Incorrect State Modification
This example demonstrates a common error in React's `useEffect` hook: directly modifying a state variable without using the setter function.  This leads to the UI not updating correctly.

## Bug:
The `count` variable is directly incremented inside the `useEffect` hook. This bypasses React's state management system, causing the UI to not reflect the updated value of `count`.

## Solution:
The solution involves using the `setCount` function to update the state, ensuring that React re-renders the component and updates the UI.