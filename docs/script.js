const scanButton = document.getElementById("scanButton");
const writeButton = document.getElementById("writeButton");
const makeReadOnlyButton = document.getElementById("makeReadOnlyButton");

let ONLINE_STATUS = window.navigator.onLine === true ? "Online" : "Offline";
setStatus(ONLINE_STATUS);

/** reconnect */
window.ononline = () => {
  ONLINE_STATUS = "Reconnected";
  setStatus(ONLINE_STATUS);
};

// disconnect
window.onoffline = () => {
  ONLINE_STATUS = "Offline";
  setStatus(`Disconnected ${ONLINE_STATUS}`);
};

function sendBtn() {
  if (ONLINE_STATUS === "Offline") {
    offlineStorage();
    return;
  }
  alert("SEND DATA");
}

function offlineStorage() {
  const day = new Date().toLocaleTimeString();
  localStorage.setItem("lastOnline", day);
  const lastOnline = document.getElementById("lastOnline");
  lastOnline.innerText = `SAVE DATA, Last Online: ${day}`;
}

/** 將網路狀態顯示 */
function setStatus(str) {
  const result = document.getElementById("status");
  result.innerText = str;
}

function log(str) {
  const result = document.getElementById("result");
  const msg = document.createElement("p");
  msg.innerText = str;
  result.appendChild(msg);
}

let deferredPrompt;
const addBtn = document.querySelector("#add-button");

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  console.log(e);
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";

  addBtn.addEventListener("click", () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});

if (!("NDEFReader" in window)) {
  log("Web NFC is not available. Use Chrome on Android.");
}

scanButton.addEventListener("click", async () => {
  log("User clicked scan button");

  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    log("> Scan started");

    ndef.addEventListener("readingerror", () => {
      log("Argh! Cannot read data from the NFC tag. Try another one?");
    });

    ndef.addEventListener("reading", ({ message, serialNumber }) => {
      log(`> Serial Number: ${serialNumber}`);
      log(`> Records: (${message.records.length})`);
    });
  } catch (error) {
    log("Argh! " + error);
  }
});

writeButton.addEventListener("click", async () => {
  log("User clicked write button");

  try {
    const ndef = new NDEFReader();
    await ndef.write("Hello world!");
    log("> Message written");
  } catch (error) {
    log("Argh! " + error);
  }
});

makeReadOnlyButton.addEventListener("click", async () => {
  log("User clicked make read-only button");

  try {
    const ndef = new NDEFReader();
    await ndef.makeReadOnly();
    log("> NFC tag has been made permanently read-only");
  } catch (error) {
    log("Argh! " + error);
  }
});
