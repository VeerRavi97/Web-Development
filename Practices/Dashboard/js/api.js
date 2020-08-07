export default class {

    constructor() {}
    sendData(members) {
        console.log("Sending Data");
        console.log(JSON.stringify(members));
        let url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url, {
                method: 'POST',
                body: JSON.stringify(members)
            }).then((response) => {
                if (!response.ok) {
                    console.log(response.status);
                    return response.status;
                } else {
                    response.json().then(data => {
                        console.log(data);
                    });
                }
            })
            .catch(error => {
                console.log("Something went Wrong");
                console.log(err);

            });


    }


    getData() {
        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then((response) => {
                if (!response.ok) {
                    console.log(response.status);
                    return response.status;
                } else {
                    response.json().then(data => {
                        // console.log(data);
                        let members = "";
                        for (const member of data) {
                            members +=
                                ` 
                             <tr><td class="member__desc">
                            <span id="member__avatar"></span>
                            <span id="member__name">${member.name}</span>
                            <span id="member__role">${member.role}</span>
                          </td>
                          <td class="member__country">${member.country}</td>
                          <td class="member_actions">
                          <span>
                            <a href="#" class="member__admin--make">Make Admin</a>
                            </span>
                            <a href="#" class="member--remove">Remove</a>
                          </td> </tr>
    `;
                        }
                        console.log(document.querySelector("#team__member-list"));
                        document.querySelector("#team__member-list").innerHTML = members;

                    });
                }
            })
            .catch(error => {
                console.log("Something went Wrong");
                console.log(err);

            });
    }

}