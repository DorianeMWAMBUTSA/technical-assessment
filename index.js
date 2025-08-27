function countRoles(users) {
  const roleCounts = { admin: 0, instructor: 0, student: 0 };

  for (let i = 0; i < users.length; i++) {
    const role = users[i].role;

    if (role === "admin") {
      roleCounts.admin++;
    } else if (role === "instructor") {
      roleCounts.instructor++;
    } else if (role === "student") {
      roleCounts.student++;
    }
  }

  return roleCounts;
}

// Example usage:
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "student" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "instructor" },
  { name: "Eve", role: "student" }
];

console.log(countRoles(users));
// Output: { admin: 2, instructor: 1, student: 2 }




function findAdmins(users) {
  return users
    .filter(user => user.role === "admin")
    .map(user => user.name);
}

// Example:
console.log(findAdmins(users));
// Output: ["Alice", "Charlie"]






function countRoles(users) {
  const roleCounts = { admin: 0, instructor: 0, student: 0 };

  for (let i = 0; i < users.length; i++) {
    const role = users[i].role;

    if (role === "admin") {
      roleCounts.admin++;
    } else if (role === "instructor") {
      roleCounts.instructor++;
    } else if (role === "student") {
      roleCounts.student++;
    }
  }

  return roleCounts;
}