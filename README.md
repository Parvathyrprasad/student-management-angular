# Student Management Application

A simple and interactive Student Management Application built using Angular. This project demonstrates Angular fundamentals, component communication, services, custom pipes, directives, and lifecycle hooks.

## Features

- Display student details using reusable student cards.
- Add new students using a form.
- Delete students from the list.
- Search students by name.
- Filter students by course.
- Display total student count.
- Highlight active student cards on mouse hover.
- Capitalize student names using a custom pipe.
- Display fees in Indian Rupees (INR).

## Technologies Used

- Angular 22
- TypeScript
- HTML
- CSS
- Vitest (unit testing)

## Project Structure

```text
src/app/
├── components/
│   ├── student-card/
│   ├── student-form/
│   └── student-list/
├── directives/
│   └── highlight.ts
├── models/
│   └── student.ts
├── pipes/
│   ├── capitalize-pipe.ts
│   └── currency-pipe.ts
├── services/
│   └── student.ts
├── app.ts
├── app.html
└── app.css
```

## Sample Student Data

| ID | Name | Course | Fees | Status |
|---|---|---|---:|---|
| 1 | A | Angular | ₹5,000 | Active |
| 2 | B | React | ₹4,000 | Active |
| 3 | C | Java | ₹3,000 | Inactive |

## How to Run the Project

### Prerequisites

- Node.js
- npm
- Angular CLI

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Parvathyrprasad/student-management-angular.git
```

2. Navigate to the project folder:

```bash
cd student-management-angular
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
ng serve
```

5. Open your browser and visit:

```text
http://localhost:4200/
```

## Build

To build the application:

```bash
ng build
```

## Run Unit Tests

To execute unit tests:

```bash
ng test
```

## Author

Parvathy R Prasad

## GitHub Repository

https://github.com/Parvathyrprasad/student-management-angular