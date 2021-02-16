export async function getGuests() {
  const response = await fetch(`http://127.0.0.1:8000/snippets/`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return response;
}

export async function deleteItem(e, idNumber) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(
    `http://127.0.0.1:8000/snippets/${idNumber}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  return response;
}
