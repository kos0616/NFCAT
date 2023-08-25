<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useNetworkStatusStore } from '@/stores/networkStatus';

const networkStatusStore = useNetworkStatusStore();

const results = ref<string[]>([]);
const connectionStatus = computed(() => networkStatusStore.connectionStatus);
const lastOnline = computed(() => networkStatusStore.lastConnectionDate);

const sendData = () => {
  if (connectionStatus.value === 'disconnected') {
    offlineStorage();
    return;
  }
  results.value.unshift('Data submit successed!');
  function offlineStorage() {
    results.value.unshift('Data submit failed! ' + lastOnline.value);
  }
};

const log = (str: string) => results.value.unshift(str);

onMounted(() => {
  if (!('NDEFReader' in window)) {
    log('Web NFC is not available. Use Chrome on Android.');
  }
});

const handleScan = async () => {
  log('User clicked scan button');
  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    log('> Scan started');

    ndef.addEventListener('readingerror', () => {
      log('Argh! Cannot read data from the NFC tag. Try another one?');
    });

    ndef.addEventListener('reading', ({ message, serialNumber }: any) => {
      log(`> Serial Number: ${serialNumber}`);
      log(`> Records: (${message.records.length})`);
    });
  } catch (error) {
    log('Argh! ' + error);
  }
};

const handleWrite = async () => {
  log('User clicked write button');

  try {
    const ndef = new NDEFReader();
    await ndef.write('Hello world!');
    log('> Message written');
  } catch (error) {
    log('Argh! ' + error);
  }
};

const handleMakeReadOnly = async () => {
  log('User clicked make read-only button');

  try {
    const ndef = new NDEFReader();
    await ndef.makeReadOnly();
    log('> NFC tag has been made permanently read-only');
  } catch (error) {
    log('Argh! ' + error);
  }
};
</script>
<template>
  <div class="container mx-auto py-20">
    <h2>NFC testing area</h2>
    <div class="grid-cols-2 lg:grid">
      <div>
        <div class="py-3">
          <div><strong>Connection Status:</strong> {{ connectionStatus }}</div>
          <div v-if="lastOnline"><strong>Last online:</strong> {{ lastOnline }}</div>
        </div>

        <div class="lg:btn-group my-4 grid grid-cols-2 gap-4 lg:gap-0">
          <button @click="sendData" type="button" class="btn !m-0">Test submit</button>
          <button @click="handleScan" class="btn !m-0">Scan</button>
          <button @click="handleWrite" class="btn !m-0">Write</button>
          <button @click="handleMakeReadOnly" class="btn !m-0">Make Read-Only</button>
        </div>
      </div>

      <article class="max-h-40 overflow-y-scroll rounded border border-white/25 p-3">
        <ol>
          <li v-for="(str, i) in results" :key="`log${i}`">
            {{ str }}
          </li>
        </ol>
      </article>
    </div>
  </div>
</template>
