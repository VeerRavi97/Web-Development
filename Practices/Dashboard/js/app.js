class Member {
    constructor(name, email, role, country) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.country = country;
        this.isAdmin = false;
        this.id = 0;
    }
}
let members = [];
let flagMapper = {
    "India": "in",
    "Australia": "au",
    "New Zealand": "nz",
    "Kenya": "kn",
    "South Korea": "kr"
};

class UI {

    static addMember(member) {
        const list = document.querySelector("#team__member-list");
        const row = document.createElement('tr');
        const cntry = flagMapper[member.country];
        const imgliteral = `images\\flag-svg\\${cntry}.svg"`;
        // row.className = "member__desc";
        row.innerHTML =
            `
            <td class="member__desc">
            <span id="member__avatar"></span>
            <span id="member__name">${member.name}</span>
            <span id="member__role">${member.role}</span>
          </td>
          <td class="member__country">
          <img src=${imgliteral}>
          <span>${member.country}</span>
          </td>
          <td class="member_actions">
          <span class="member__parent">
          <img src="images/admin.png">
            <a href="#" class="member__admin--make">Make Admin</a>
            </span>
            <span>
            <img src="images/remove.png">
            <a href="#" class="member--remove">Remove</a>
            </span>
          </td>
        
    `;
        list.appendChild(row);
        members.push(member);
        console.log(members);
    }

    static ClearFields() {
        document.querySelector("#name").value = "";
        document.querySelector("#role").value = "";
        document.querySelector("#country").value = "";
        document.querySelector("#email").value = "";

    }
    static changeMember(el) {
        if (el.classList.contains("member--remove")) {
            const tr = el.parentElement.parentElement.parentElement;
            tr.remove();
            const name = tr.children[0].children[1].innerText;
            console.log(`${name} removed `);
            let num = +document.querySelector(".doughnut__num").innerText;
            console.log(num);
            if (num - 1 < 0) num = 0;
            else num = num - 1;
            console.log(num);
            document.querySelector(".doughnut__num").innerText = num;

        }

        if (el.classList.contains('member__admin--make')) {
            const tr = el.parentElement.parentElement.parentElement;
            console.log(tr);

            const name = tr.children[0].children[1].innerText;
            console.log(`${name} is a admin now `);
            const td = tr.querySelector(".member__desc");
            const span = document.createElement('span');
            span.innerText = "ADMIN";
            span.id = "member__badge";
            //  console.log(td);
            td.appendChild(span); 
            el.parentElement.remove();

        }

    }

    static changeDonut() {
        const num = +document.querySelector(".doughnut__num").innerText;
        document.querySelector(".doughnut__num").innerText = num + 1;

    }


    // static saveMember


}



const addMember = (e) => {
    e.preventDefault();
    // Get Form Values
    const name = document.querySelector("#name").value;
    const role = document.querySelector("#role").value;
    const country = document.querySelector("#country").value;
    const email = document.querySelector("#email").value;
    const member = new Member(name, email, role, country);
    // console.log(member);

    UI.addMember(member);
    UI.ClearFields();
    UI.changeDonut();

}



const getData = () => {
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
                    document.querySelector(".team__member-list").innerHTML = members;

                });
            }
        })
        .catch(error => {
            console.log("Something went Wrong");
            console.log(err);

        });
}

const sendData = () => {
    // console.log(JSON.stringify(members));
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


// Event: add Member to List
document.querySelector(".team__form").addEventListener('submit', addMember);


// Event : delete Member
document.querySelector("#team__member-list").addEventListener("click", (e) => {
    UI.changeMember(e.target); // e.target gives what clicked on
});
document.querySelector(".save").addEventListener("click", sendData);