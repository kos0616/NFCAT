<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

type onlineStatus = 'Online' | 'Offline' | 'Reconnected' | 'Disconnected Offline';

const ONLINE_STATUS = window.navigator.onLine === true ? 'Online' : 'Offline';
const status = ref<onlineStatus>(ONLINE_STATUS);
const lastOnline = ref('');
const results = ref<string[]>([]);

const counter = useCounterStore();

const sendData = () => {
  if (status.value === 'Offline') {
    offlineStorage();
    return;
  }
  results.value.unshift('Data submit successed!');

  function offlineStorage() {
    const day = new Date().toLocaleTimeString();
    localStorage.setItem('lastOnline', day);
    lastOnline.value = `SAVE DATA, Last Online: ${day}`;
  }
};

function log(str: string) {
  results.value.unshift(str);
}

if (!('NDEFReader' in window)) {
  log('Web NFC is not available. Use Chrome on Android.');
}

// scanButton.addEventListener('click', async () => {
//   log('User clicked scan button');

//   try {
//     const ndef = new NDEFReader();
//     await ndef.scan();
//     log('> Scan started');

//     ndef.addEventListener('readingerror', () => {
//       log('Argh! Cannot read data from the NFC tag. Try another one?');
//     });

//     ndef.addEventListener('reading', ({ message, serialNumber }) => {
//       log(`> Serial Number: ${serialNumber}`);
//       log(`> Records: (${message.records.length})`);
//     });
//   } catch (error) {
//     log('Argh! ' + error);
//   }
// });

// writeButton.addEventListener('click', async () => {
//   log('User clicked write button');

//   try {
//     const ndef = new NDEFReader();
//     await ndef.write('Hello world!');
//     log('> Message written');
//   } catch (error) {
//     log('Argh! ' + error);
//   }
// });

// makeReadOnlyButton.addEventListener('click', async () => {
//   log('User clicked make read-only button');

//   try {
//     const ndef = new NDEFReader();
//     await ndef.makeReadOnly();
//     log('> NFC tag has been made permanently read-only');
//   } catch (error) {
//     log('Argh! ' + error);
//   }
// });
const aa = import.meta.env;
console.log(aa);
</script>
<template>
  <div class="py-20">
    <button @click="sendData" type="button" class="btn">
      <span id="status">{{ status }}</span>
      BTN
      {{ counter }}
      {{ aa }}
    </button>

    <div>{{ lastOnline }}</div>
    <article>{{ results }}</article>
    <!-- <button id="scanButton">Scan</button>
    <button id="writeButton">Write</button>
    <button id="makeReadOnlyButton">Make Read-Only</button> -->
  </div>
</template>
