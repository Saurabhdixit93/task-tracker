# Task Tracker Web App

This is a Task Tracker web application built using React. It helps teams in organizations manage their tasks efficiently.

## Features

- Task properties include:
  - Title
  - Description
  - Start Date (automatically set to the task creation date)
  - End Date (only present in tasks marked as Completed)
  - Status (Pending, In Progress, Completed, Deployed, Deferred)
  - Assignee (task owner)
  - Priority (P0, P1, P2)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Saurabhdixit93/task-tracker.git
   ```

2. Navigate to the project directory:

   ```
   cd task-tracker
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Functionality

- Each task status has its own column.
- Tasks can be sorted by Priority and Start/End Date.
- Tasks can be filtered based on:
  - Date range (task created date from and to range)
  - Assignee
  - Priority
- Multiple filter combinations can be applied.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
