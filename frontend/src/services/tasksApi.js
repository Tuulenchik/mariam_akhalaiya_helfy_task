const API_URL = 'http://localhost:4000/api/tasks';

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}


async function httpGetTasks(){
    const response = await fetch(API_URL);
    return handleResponse(response);
}

async function httpPostTask(task) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  return handleResponse(response);
}

async function httpPutTask(id, task) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  return handleResponse(response);
}

async function httpDeleteTask(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  return handleResponse(response);
}

async function httpPatchTask(id) {
  const response = await fetch(`${API_URL}/${id}/toggle`, {
    method: 'PATCH',
  });

  return handleResponse(response);
}


export {httpGetTasks, httpPostTask, httpPutTask, httpDeleteTask, httpPatchTask}