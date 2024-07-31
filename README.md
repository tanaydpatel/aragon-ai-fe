# India Agriculture Crop Production

## Setup instructions

- Verify you've node 18+. Suggested version 20.9.0
- Run `npm install`
- To start the frontend run `npm run dev`

## Objectives of project

Develop a minimalistic dashboard in front-end offering the below features:

- Drop down to select a state.
- A bar chart depicting the production in tonnes per year.
- A bar chart depicting the production in tonnes per crop.
- A sortable table with following fields
  - Year
  - Crop
  - District
  - Area
  - Production
  - Yield
- Selecting a portion of chart should filter the data in table automatically.

## Implementation

- Used React Js to develop the UI components
- Axios for data fetching
- Redux Js for maintaing state across various components
- JWT based user authentication

## Features

- User can login to dashboard to access the secured APIs
- State list is populated form the API on login
- By default, data for 'India' is shown in two charts (per year/crop)
- Clickable bar charts to select specific item from the chart
- Auto-population of table on selecting either state/year/crop
- Pagination on report table
- Multiple field sorting

##

Project is hosted for testing purpose on
[https://tanaypatel-take-home-assignment.vercel.app/](https://tanaypatel-take-home-assignment.vercel.app/)
