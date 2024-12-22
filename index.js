function submitData(name, email) {
    const url = "http://localhost:3000/users";
  
    // Create the configuration object for the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ name, email }),
    };
  
    // Make the fetch request and return the promise chain
    return fetch(url, configurationObject)
      .then(response => {
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        // Append the new ID to the DOM
        const body = document.querySelector("body");
        const idElement = document.createElement("p");
        idElement.textContent = `ID: ${data.id}`;
        body.appendChild(idElement);
      })
      .catch(error => {
        // Handle errors and append the error message to the DOM
        const body = document.querySelector("body");
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
      });
  }
  