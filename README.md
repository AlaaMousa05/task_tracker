# Task Tracker

A simple Task display application built with **Next.js 15.2.1**

## ✨ Key Features

- **Display Tasks**: Shows the first 8 tasks from an API in a beautiful dynamic grid
- **Responsive Design**: Adapts to all screen sizes (mobile, tablet, desktop)
- **Task Status**: Displays the status of each task (completed or incomplete) with a visual icon
- **Task Details**: You can click on any task to navigate to the details page

## 📁 Project Structure

- **app/**: Main application pages
- **components/**: Reusable components (such as TaskItem)
- **services/**: Data fetching services from API
- **types/**: TypeScript type definitions for data structures

## 🛠️ Technology Stack

- **Next.js 15.2.1**: Advanced React framework
- **React 19**: User interface library
- **TypeScript**: For data type safety
- **Tailwind CSS**: For responsive and easy styling

## 📊 Data Source

Data is fetched from a free API:
`https://jsonplaceholder.typicode.com/todos`

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Run development environment
npm run dev

# Build for production
npm run build

# Run production
npm start
