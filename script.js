// --------------- INVENTORY CODE --------------- //
console.log("window.location.href =", window.location.href);
console.log("window.location.search =", window.location.search);

function getInventoryString() {
  const params = new URLSearchParams(window.location.search);
  console.log("Inventory from URL:", params.get("inv")); // should log "001000"
  return params.get("inv") || "000000";
}

function loadInventory() {
  const inv = getInventoryString(); // e.g. "1010"

  if (inv[0] === "1")
    document.getElementById("inventory1").src = "images/radish.png";
  if (inv[1] === "1")
    document.getElementById("inventory2").src = "images/katana.png";
  if (inv[2] === "1")
    document.getElementById("inventory3").src = "images/AztecPotion.png";
  if (inv[3] === "1")
    document.getElementById("inventory4").src = "images/sea_serpent_scale.png";
  if (inv[4] === "1")
    document.getElementById("inventory5").src = "images/frost_giant_tears.png";
  if (inv[5] === "1")
    document.getElementById("inventory6").src = "images/power.png";
}

document.addEventListener("DOMContentLoaded", loadInventory);
// --------------- INVENTORY CODE --------------- //

window.onload = function () {
  document.getElementById("myModal3").style.display = "none";
  document.getElementById("myModal4").style.display = "none";
};
function modalOpen() {
  // essentially you have a second page that is "position: fixed" filling up the screen
  // but it is in "display: none" so you can't see it!
  window.location.replace(`https://nnn9t3.csb.app/`);
}

function modalClose() {
  document.getElementById("myModal").style.display = "none";
}
function modalOpen2() {
  // essentially you have a second page that is "position: fixed" filling up the screen
  // but it is in "display: none" so you can't see it!
  document.getElementById("myModal2").style.display = "flex";
}

function modalClose2() {
  document.getElementById("myModal2").style.display = "none";
  document.getElementById("sound ").play();
}

function modalOpen3() {
  // essentially you have a second page that is "position: fixed" filling up the screen
  // but it is in "display: none" so you can't see it!
  document.getElementById("myModal3").style.display = "flex";
}

function modalClose3() {
  document.getElementById("myModal3").style.display = "none";
}
function modalOpen4() {
  // essentially you have a second page that is "position: fixed" filling up the screen
  // but it is in "display: none" so you can't see it!
  document.getElementById("myModal4").style.display = "flex";
}
function modalClose4() {
  document.getElementById("myModal4").style.display = "none";
}
function showReward1() {
  if (document.getElementById("answer1").value == "A Sword") {
    console.log("Correct!");
    document.getElementById("Scroll").src = "images/sea_serpent_scale.png";
  }
  if (document.getElementById("answer1").value == "a sword") {
    console.log("Correct!");
    document.getElementById("Scroll").src = "images/sea_serpent_scale.png";
  }
  if (document.getElementById("answer1").value == "A sword") {
    console.log("Correct!");
    document.getElementById("Scroll").src = "images/sea_serpent_scale.png";
  }
  if (document.getElementById("answer1").value == "sword") {
    console.log("Correct!");
    document.getElementById("Scroll").src = "images/sea_serpent_scale.png";
  }
  if (document.getElementById("answer1").value == "Sword") {
    console.log("Correct!");
    document.getElementById("Scroll").src = "images/sea_serpent_scale.png";
  }
  if (
    document
      .getElementById("Scroll")
      .src.includes("images/sea_serpent_scale.png")
  ) {
    console.log("add");
    document.getElementById("inventory4").src = "images/sea_serpent_scale.png";
    sessionStorage.setItem("slot4", "images/sea_serpent_scale.png");
    document.getElementById("chest").src = "images/open_chest.png";
    document.getElementById("chest2").classList.remove("cant-see-me");
  }
}
function showReward2() {
  if (
    document.getElementById("answer2").value == "0" &&
    document.getElementById("answer3").value == "9" &&
    document.getElementById("answer4").value == "5" &&
    document.getElementById("answer5").value == "2"
  ) {
    console.log("Correct!");
    document.getElementById("KEY").src = "images/frost_giant_tears.png";
    document.getElementById("inventory5").src = "images/frost_giant_tears.png";
    document.getElementById("chest2").src = "images/chestopen_right.png";
    // this goes after your images are added to your inventory on teh screen
    // Update inventory string
    let inv = getInventoryString().split("");
    inv[3] = "1"; // slot 3 collected
    inv[4] = "1"; // slot 3 collected
    const newInv = inv.join("");
    console.log("Updated inventory:", newInv);

    // Redirect with UPDATED inventory
    setTimeout(function () {
      window.location.replace(`https://nnn9t3.csb.app/?inv=${newInv}`);
    }, 500);
  }
}
