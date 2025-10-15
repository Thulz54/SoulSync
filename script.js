const API_URL = "http://localhost:5000/api/users";

document.getElementById("addUserBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const faith_mode = document.getElementById("faith_mode").checked ? 1 : 0;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, faith_mode })
  });

  const data = await res.json();
  alert(data.message);
});

document.getElementById("getUsersBtn").addEventListener("click", async () => {
  const res = await fetch(API_URL);
  const users = await res.json();
  const usersList = document.getElementById("usersList");
  usersList.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.email}) - Faith Mode: ${user.faith_mode}`;
    usersList.appendChild(li);
  });
});
