# Task Manager - Next.js Application

This is a simple task management application built using [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The application allows users to manage tasks with different priorities (high, medium, low), and persists task data using `localStorage`.

## Getting Started

### Prerequisites
Before getting started, make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Trilokrana/task-management.git
   cd task

2. Install dependencies:
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install

3. Run the development server:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


File Structure
app/page.js: Main page component that handles task list and task form.
components/TaskList.js: Component that displays the list of tasks.
components/TaskForm.js: Component that provides a form for adding new tasks.
This project also utilizes next/font to load custom fonts (Inter from Google Fonts) for enhanced performance and readability.

Task Sorting by Priority
Approach<br>
The task list in the application is sorted based on the priority of each task. Tasks can have one of the following priorities:

High
Medium
Low
Sorting Mechanism
When rendering tasks in the TaskList component, tasks are sorted in the following order:

High priority tasks appear at the top.
Medium priority tasks follow.
Low priority tasks appear at the bottom.
This ensures that more urgent tasks are visible first, making it easier for users to prioritize their work. The sorting logic is handled within the TaskList component, where tasks are sorted based on their priority field before rendering.

<h5> Note :</h5> I am using app directory , the app/ directory introduces a new way of handling data fetching, layouts, and rendering components. The App Router no longer supports traditional Next.js data fetching methods such as getServerSideProps, getStaticProps, and getInitialProps. These methods are only available in the Pages Router (projects using the pages/ directory).



   
