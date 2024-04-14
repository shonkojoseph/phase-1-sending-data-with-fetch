// Add your code here


function registerSelf() {
    return fetch("http://guestbook.example.com/register", {
      "method": "POST",
      "body": JSON.stringify({
        "firstName": "BYRONIUS KARBITUS MARIS",
        "registryMessage": "SALVETE AMICI!"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      if (!response.ok) {
        throw new Error('Failed to register');
      }
      return response.json();
    }).then(function(json) {
      return json.message;
    }).catch(function(error) {
      console.error('Error registering:', error);
      return ":(";
    });
  }
  
  function errorSelf() {
    return fetch("http://guestbook.example.com/register-error", {
      "method": "POST",
      "body": JSON.stringify({
        "firstName": "Byron the Poodle",
        "registryMessage": "Bite!"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      if (!response.ok) {
        throw new Error('Failed to register due to an error');
      }
      return response.json();
    }).then(function(json) {
      return json.message;
    }).catch(function(error) {
      console.error('Error registering:', error);
      return ":(";
    });
  }
  
  function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email
        })
      })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Failed to submit data');
        }
        return response.json();
      })
      .then(function(object) {
        document.body.innerHTML = object["id"];
      })
      .catch(function(error) {
        console.error('Error submitting data:', error);
        document.body.innerHTML = error.message;
      });
  }
  