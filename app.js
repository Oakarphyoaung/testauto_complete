// // Make a GET request to the GitHub API to fetch user data
// fetch("https://api.github.com/users")
//   .then(response => response.json()) // Parse the response as JSON
//   .then(data => {
//     // Do something with the array of user data
//     console.log(data);
//   })
//   .catch(error => console.error(error)); // Handle any errors that occur

  const url = "https://api.github.com/users";
  const containerDiv = document.getElementById("container1");

  let buildUI = (users) => {
    for (let i = 0; i < users.length; i++) {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <div
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
          <img class="imgTag " src=${users[i].avatar_url} width="100px" />
    
            <a href="">
              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
              >
                user name
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">info</p>
            <a
              href="#"
              class="inline-flex items-center text-blue-600 hover:underline"
            >
              See our guideline
            </a>
          </div>
        `;
        containerDiv.append(userDiv);
        
    }
   
  }
  const fetchData = async () => {
    const response = await fetch (url);
    const data = await response.json();
    buildUI(data);
  };
  fetchData();