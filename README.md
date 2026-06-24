## Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```txt
http://localhost:3000
```

## API Endpoints

```txt
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
PATCH  /api/tasks/:id/toggle
```

## Design Decisions

Tasks are stored in memory as required by the assignment, so the data resets when the backend server restarts.

The endless carousel is implemented with React and regular CSS only, without external carousel libraries. The task list is duplicated inside the carousel track to create a continuous loop animation.

## Time Spent

Backend: about 1 hour 20 minutes;

Frontend core features: 2 hours;

Styling, testing and debugging: about 40 minutes
