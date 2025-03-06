const bcrypt = require("bcryptjs");

async function HashPage() {
  const plainPassword = "admin123"; // Ganti dengan password yang ingin di-hash
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  console.log("Hashed Password:", hashedPassword);
}

HashPage();