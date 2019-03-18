console.log("Hello")
fetch("http://localhost:9099/parks")
        .then(function (response) {
                return response.json();
        })
        .then(function (parks) {
                parks = JSON.stringify(parks);
                parks = JSON.parse(parks);
                console.log(parks);
                parks.forEach((park) => {
                        const displayContainer = document.querySelector("#display-container")
                        const parkWrapper = document.createElement("div")
                        parkWrapper.className = "yellow"
                        const parkCard = `
                        <article>
                        <h3>${park.name}</h3>
                        <p>${park.state}</p>
                        </article>`
                        if (park.visited !== false) {
                        parkWrapper.className = "blue"
                        }
                        parkWrapper.innerHTML = parkCard
                        displayContainer.appendChild(parkWrapper)
                })
        });



