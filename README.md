# Next.js useEffect Cleanup and Memory Leaks

This repository demonstrates a common issue in Next.js applications: forgetting to include a cleanup function within the useEffect hook.  This can lead to memory leaks if not handled correctly.

The `bug.js` file showcases the problem, while `bugSolution.js` provides the corrected implementation.

## Problem

The `bug.js` file demonstrates a `useEffect` hook that sets up an interval timer.  Without a cleanup function, this timer will continue to run even after the component unmounts, resulting in a memory leak.

## Solution

The `bugSolution.js` file demonstrates the correct implementation. By returning a function from the `useEffect` hook, we ensure that `clearInterval` is called when the component unmounts. This prevents the interval from continuing to run unnecessarily and avoids memory leaks.

## How to Run

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary packages.
4. Run `npm run dev` to start the development server.

You can then observe the console output to see the difference between the faulty and corrected implementations.