const fs = require("fs");

const content = Math.random().toString(36).repeat(1000000);

fs.writeFileSync("/Users/utmalik/Scaler/ScalerFullStackAugust/Module4/InterviewPrep/Problem 1/bigFile",content);