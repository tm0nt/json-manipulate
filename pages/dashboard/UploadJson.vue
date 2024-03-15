<template>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <input
              type="file"
              accept=".jsonc, .json"
              @change="handleFileUpload"
              ref="fileInput"
              style="display: none;"
            />
            <v-btn
              label="Novo"
              color="primary"
              density="compact"
              append-icon="mdi-plus"
              block
              variant="outlined"
              solo
              @click="$refs.fileInput.click()"
            >
              Novo
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              color="primary"
              variant="outlined"
              block
              class="mb-4"
              append-icon="mdi-reload"
              :disabled="!fileLoaded"
              @click="reloadFile"
            >
              RESETAR
            </v-btn>
          </v-col>
        </v-row>
        <v-card rounded="xl" color="#f1f1f1" flat>
          <template v-slot:title>
            {{ uploadedFileName }}
          </template>
          <v-card-text>
            <v-btn color="primary" block @click="saveJson" :disabled="!fileLoaded"
              >SALVAR</v-btn
            >
            <v-expansion-panels class="my-4" variant="popout">
              <v-expansion-panel
                v-for="(value, key) in jsonData"
                :key="key"
                :title="key"
              >
                <template v-slot:text>
                  <v-row
                    v-for="(fieldValue, fieldName) in value"
                    :key="fieldName"
                  >
                    <v-col cols="6">
                      <v-text-field
                        :label="fieldName"
                        v-model="value[fieldName]"
                        @input="updatePreview"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="mt-2 mb-2">Pré-visualização</h2>
    <v-row>
      <v-col cols="12" md="12">
        <v-card rounded="xl" color="#f1f1f1" flat>
          <template v-slot:title>
            {{ uploadedFileName
            }}<v-btn
              class="ml-2"
              color="primary"
              size="x-small"
              append-icon="mdi-content-copy"
              @click="copyText"
              >Copiar</v-btn
            >
          </template>
          <v-card-text>
            <v-card
              color="#f1f1f1"
              rounded="xl"
              class="text-justify overflow-y-auto elevation-6"
              height="300"
            >
              <v-card-text>
                <pre>{{ previewData }}</pre>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const fileUploaded = ref(null);
  const uploadedFileName = ref("Nenhum arquivo aberto");
  const jsonData = ref({});
  const previewData = ref({});
  const comments = ref({});
  const fileLoaded = ref(false);
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadedFileName.value = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonDataParsed = JSON.parse(e.target.result);
        jsonData.value = jsonDataParsed;
        updatePreview();
        fileLoaded.value = true;
      };
      reader.readAsText(file);
    }
  };
  
  const clipBoard = navigator?.clipboard;
  const copyText = async () => {
    clipBoard.writeText(previewData?.value).then(() => {
      alert("Arquivo copiado com sucesso!");
    });
  };
  
  const reloadFile = () => {
    fileLoaded.value = false;
    uploadedFileName.value = "Nenhum arquivo aberto";
    jsonData.value = {};
    previewData.value = null;
    comments.value = {};
    file.value = null;
    fileUploaded.value = {};
  };
  
  const updatePreview = () => {
    const dataWithComments = JSON.parse(JSON.stringify(jsonData.value));
    previewData.value = JSON.stringify(dataWithComments, null, 2);
  };
  
  const saveJson = () => {
    const dataWithComments = JSON.parse(JSON.stringify(jsonData.value));
    for (const key in comments.value) {
      const [section, field] = key.split(".");
      if (dataWithComments[section] && dataWithComments[section][field]) {
        dataWithComments[section][field] = `${dataWithComments[section][field]} // ${comments.value[key]}`;
      }
    }
    // Aqui você implementaria a lógica para salvar o JSON em um arquivo .json
    console.log("JSON salvo:", dataWithComments);
  };
  </script>
  