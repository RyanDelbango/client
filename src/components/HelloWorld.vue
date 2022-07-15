<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex>
      <v-card
      class="mx-auto"
      max-width="500"
      color = 'blue lighten-5'
    >

<form>
        <v-col cols="12" sm="12">
            <v-select
            :items="items"
            label="Gender"
            dense
            v-model="Gender"
            required
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
            <v-text-field
            label="Initial Symptom Age"
            dense
            v-model="InitAge"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
            <v-text-field
            label="Diagnosis Age"
            dense
            v-model="DxAge"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
            <v-text-field
            label="Undiagnosed Length (Time Between Initial Symptom Age and Diagnosis Age)"
            dense
            v-model="UndiagnosedLength"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
            <v-text-field
            label="BMI"
            dense
            v-model="Bmi"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
            <v-text-field
            label="Age"
            dense
            v-model="Age"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
            <v-text-field
            label="Duration (Time Between Age and Initial Symptoms)"
            dense
            v-model="Duration"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="FirstFSHD"
            label="FirstFSHD"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
            <v-text-field
            label="Number of Medications Taken"
            dense
            v-model="NumMeds"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Medications"
            label="Medication Use"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="ACEInhibitor"
            label="Ace Inhibitor"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="anticholinergic"
            label="Anticholinergic"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="benzodiazepine"
            label="Benzodiazepine"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="BetaBlocker"
            label="Beta Blocker"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Bisphosphonate"
            label="Bisphosphonate"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Ccb"
            label="CCB"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="GABAAnalog"
            label="GABA Analog"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="mineral"
            label="Mineral"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Nsaid"
            label="NSAID"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Ssri"
            label="SSRI"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="vitamin"
            label="Vitamin"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Breathing"
            label="Breathing"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="HeartProbs"
            label="Heart Problems"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="HighBP"
            label="High Blood Pressure"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Asthma"
            label="Asthma"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="ThyroidProb"
            label="ThyroidProb"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Arthritis"
            label="Arthritis"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="StomachUlcers"
            label="Stomach Ulcers"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Pneumonia"
            label="Pneumonia"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="ProstateProb"
            label="Prostate Problems"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="HeartDis"
            label="Heart Disease"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="HighChol"
            label="High Cholesterol"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="SexualDys"
            label="Sexual Dysfunction"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="AcidReflux"
            label="Acid Reflux"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Constipation"
            label="Constipation"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="PsychProb"
            label="Psychological Problems"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="One"
            label="Initial Symptom: Face"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Two"
            label="Initial Symptom: Trunk"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            v-model="Three"
            label="Initial Symptom: Upper Extremity"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
                    <v-select
            v-model="Four"
            label="Initial Symptom: Lower Extremity"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
                    <v-select
            v-model="High"
            label="Smallallele 8-10"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
                    <v-select
            v-model="Low"
            label="Smallallele 4-7"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
                    <v-select
            v-model="Mid"
            label="Smallallele 1-3"
            required
            outlined
            :items="items"
            dense
          ></v-select>
        </v-col>
<v-btn @click="submit"
        :loading="loading3"
        :disabled="loading3"
        color="green"
        class="ma-2 white--text">submit</v-btn>
          <v-btn @click="clear"
                  :loading="loading3"
                  :disabled="loading3"
                  color="red"
                  class="ma-2 white--text">clear</v-btn>
        </form>
            </v-card>
<br/>
        <br/>
    <v-card
      class="mx-auto"
      max-width="750"
      color = "blue lighten-5"
    >
<h1><u>Probability of Wheelchair Use</u></h1>
<h2>Next Ten Years: {{ ten }}%</h2>
<h2>Ten to Twenty Years: {{ twenty }}%</h2>
<h2>Twenty to Thirty Years: {{ thirty }}%</h2>
<h2>Thirty to Forty Years: {{ forty }}%</h2>
    </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import axios from 'axios'
export default {
    name: 'HelloWorld',
    data: () => ({
      Gender: '',
      InitAge: '',
      DxAge: '',
      UndiagnosedLength: '',
      Bmi: '',
      Age: '',
      Duration: '',
      FirstFSHD: '',
      NumMeds: '',
      Medications: '',
      ACEInhibitor: '',
      anticholinergic: '',
      benzodiazepine: '',
      BetaBlocker: '',
      Bisphosphonate: '',
      Ccb: '',
      GABAAnalog: '',
      mineral: '',
      Nsaid: '',
      Ssri: '',
      vitamin: '',
      Breathing: '',
      HeartProbs: '',
      HighBP: '',
      Asthma: '',
      ThyroidProb: '',
      Arthritis: '',
      StomachUlcers: '',
      Pneumonia: '',
      ProstateProb: '',
      HeartDis: '',
      HighChol: '',
      SexualDys: '',
      AcidReflux: '',
      Constipation: '',
      PsychProb: '',
      One: '',
      Two: '',
      Three: '',
      Four: '',
      High: '',
      Low: '',
      Mid: '',
      ten: '',
      twenty: '',
      thirty: '',
      forty: '',
      items: [0,1]
    }),
    methods: {
    submit () {
      axios.post('http://127.0.0.1:5000/predict', {
        Gender: this.Gender,
        InitAge: this.InitAge,
        DxAge: this.DxAge,
        UndiagnosedLength: this.UndiagnosedLength,
        Bmi: this.Bmi,
        Age: this.Age,
        Duration: this.Duration,
        FirstFSHD: this.FirstFSHD,
        NumMeds: this.NumMeds,
        Medications: this.Medications,
        ACEInhibitor: this.ACEInhibitor,
        anticholinergic: this.anticholinergic,
        benzodiazepine: this.benzodiazepine,
        BetaBlocker: this.BetaBlocker,
        Bisphosphonate: this.Bisphosphonate,
        Ccb: this.Ccb,
        GABAAnalog: this.GABAAnalog,
        mineral: this.mineral,
        Nsaid: this.Nsaid,
        Ssri: this.Ssri,
        vitamin: this.vitamin,
        Breathing: this.Breathing,
        HeartProbs: this.HeartProbs,
        HighBP: this.HighBP,
        Asthma: this.Asthma,
        ThyroidProb: this.ThyroidProb,
        Arthritis: this.Arthritis,
        StomachUlcers: this.StomachUlcers,
        Pneumonia: this.Pneumonia,
        ProstateProb: this.ProstateProb,
        HeartDis: this.HeartDis,
        HighChol: this.HighChol,
        SexualDys: this.SexualDys,
        AcidReflux: this.AcidReflux,
        Constipation: this.Constipation,
        PsychProb: this.PsychProb,
        One: this.One,
        Two: this.Two,
        Three: this.Three,
        Four: this.Four,
        High: this.High,
        Low: this.Low,
        Mid: this.Mid,
      })
      .then((response) => {
        console.log(response);
        this.ten = response.data.ten,
        this.twenty = response.data.twenty,
        this.thirty = response.data.thirty,
        this.forty = response.data.forty
      })
    },
    clear () {
      this.Gender = ''
      this.InitAge = ''
      this.DxAge = ''
      this.UndiagnosedLength = ''
      this.Bmi = ''
      this.Age = ''
      this.Duration = ''
      this.FirstFSHD = ''
      this.NumMeds = ''
      this.Medications = ''
      this.ACEInhibitor = ''
      this.anticholinergic = ''
      this.benzodiazepine = ''
      this.BetaBlocker = ''
      this.Bisphosphonate = ''
      this.Ccb = ''
      this.GABAAnalog = ''
      this.mineral = ''
      this.Nsaid = ''
      this.Ssri = ''
      this.vitamin = ''
      this.Breathing = ''
      this.HeartProbs = ''
      this.HighBP = ''
      this.Asthma = ''
      this.ThyroidProb = ''
      this.Arthritis = ''
      this.StomachUlcers = ''
      this.Pneumonia = ''
      this.ProstateProb = ''
      this.HeartDis = ''
      this.HighChol = ''
      this.SexualDys = ''
      this.AcidReflux = ''
      this.Constipation = ''
      this.PsychProb = ''
      this.One = ''
      this.Two = ''
      this.Three = ''
      this.Four = ''
      this.High = ''
      this.Low = ''
      this.Mid = ''
    }
  }
}
</script>