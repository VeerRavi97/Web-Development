import { Donut } from "./donut.js";
import API from "./api.js";

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

class RoleItem {
  constructor(role, count, color) {
    this.role = role;
    this.count = count;
    this.color = color;
  }
}

class MemberItem {
  constructor(member) {
    this.member = member;
  }
  render() {
    const memberEl = document.createElement("tr");
    memberEl.className = "member__desc";
    const cntry = DOMHelper.flagMapper[this.member.country];
    // const cntry = "India";
    //console.log(cntry.length);
    const imgliteral = `images\/flag-svg\/${cntry}.svg`;
    const imgAdmin = `images\/admin.png`;
    const imgRemove = `images\/remove.png`;
    memberEl.innerHTML = `
        <td class=" flex-items member__desc">
           <span id="member__avatar"></span>
           <span id="member__name">${this.member.name}</span>
           <span id="member__role">${this.member.role}</span>
        </td>
        <td class=" flex-items member__country">
           <img src=${imgliteral}>
           <span>${this.member.country}</span>
        </td>
        <td class="flex-items member_actions">
            <div class="member__admin">
             <img src=${imgAdmin}>
             <a href="#" class="member__admin--make">Make Admin</a>
            </div>
            <div class="member__remove">
             <img src=${imgRemove}>
                <a href="#" class="member--remove">Remove</a>
            </div>
        </td>
    
       `;
    return memberEl;
  }
}

class MemberList {
  members = [
    new Member("VeerRavi", "veerravi258@gmail.com", "Developer", "India"),
    new Member("Ollie", "olliecode58@gmail.com", "Designer", "Australia"),
    new Member("Zig", "ziggy58@gmail.com", "HR", "Kenya"),
    new Member(
      "DeeDee",
      "deedee258@gmail.com",
      "Technical Support",
      "New Zealand"
    ),
    new Member("Sharko", "Sharko@gmail.com", "HR", "South Korea"),
  ];

  roles = [
    new RoleItem("HR", 2, "#80d19f"),
    new RoleItem("Designer", 1, "#db9491"),
    new RoleItem("Technical Support", 1, "#e0e092"),
    new RoleItem("Developer", 1, "#87a4de"),
  ];
  total = this.members.length;

  render() {
    const memberList = document.querySelector("#team__member-list");
    // const memberList = document.createElement('tr');
    for (let member of this.members) {
      const memberItem = new MemberItem(member);
      const memberEl = memberItem.render();
      memberList.append(memberEl);
    }
    // renderHook.append(memberList);
  }
  addToRoles(role) {
    for (let roleItem of this.roles) {
      if (roleItem.role === role) roleItem.count++;
    }
  }
  removeRole(role) {
    for (let roleItem of this.roles) {
      if (roleItem.role === role) {
        roleItem.count--;
        if (roleItem.count < 0) roleItem.count = 1;
      }
    }
  }

  AddMemberToList(event) {
    event.preventDefault();
    // Get Form Values
    let name = document.querySelector("#name").value;
    let role = document.querySelector("#role").value;
    let country = document.querySelector("#country").value;
    let email = document.querySelector("#email").value;
    let member = new Member(name, email, role, country);
    const memberList = document.querySelector("#team__member-list");
    const memberItem = new MemberItem(member);
    const memberEl = memberItem.render();
    memberList.append(memberEl);
    this.members.push(member);
    this.addToRoles(role);
    // console.log(this.members);
    const donut = new Donut();
    this.total += 1;
    donut.redraw(this.roles, this.total);
    this.ClearFields();
  }
  ClearFields() {
    document.querySelector("#name").value = "";
    document.querySelector("#role").value = "";
    document.querySelector("#country").value = "";
    document.querySelector("#email").value = "";
  }
  changeMember(el) {
    if (el.classList.contains("member--remove")) {
      const tr = el.parentElement.parentElement.parentElement;
      tr.remove();
      console.log(tr);
      const role = tr.children[0].children[2].innerText;
      console.log(`${role} removed `);
      console.log(this.total);
      if (this.total - 1 < 0) this.total = 0;
      else this.total = this.total - 1;
      console.log(this.total);
      this.removeRole(role);
      const donut = new Donut();
      donut.redraw(this.roles, this.total);
    }

    if (el.classList.contains("member__admin--make")) {
      const tr = el.parentElement.parentElement.parentElement;
      console.log(tr);

      const name = tr.children[0].children[1].innerText;
      console.log(`${name} is a admin now `);
      const td = tr.querySelector(".member__desc");
      const span = document.createElement("span");
      span.innerText = "ADMIN";
      span.id = "member__badge";
      td.appendChild(span);
      el.parentElement.remove();
    }
  }
}

class DOMHelper {
  static flagMapper = {
    India: "in",
    Australia: "au",
    "New Zealand": "nz",
    Kenya: "kn",
    "South Korea": "kr",
  };
}

class App {
  static Init() {
    const memberList = new MemberList();
    const donut = new Donut();
    memberList.render();
    donut.draw(memberList.roles, memberList.total);
    document
      .querySelector(".team__form")
      .addEventListener("submit", memberList.AddMemberToList.bind(memberList));
    document
      .querySelector("#team__member-list")
      .addEventListener("click", (e) => {
        let changeMember = memberList.changeMember.bind(memberList);
        changeMember(e.target);
      });
    const api = new API();
    document.querySelector(".save").addEventListener("click", () => {
      api.sendData(memberList.members);
    });
  }
}

App.Init();
