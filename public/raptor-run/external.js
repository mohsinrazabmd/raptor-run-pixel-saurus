async function aFunctionImplementedInExternalJsFile(score) {
  score = Number(score);
  
  start_time = Math.floor(Date.now() / 1000);

  const body = {
    user: metaUser?._id,
    score,
    start_time,
  };

  if (challenge) {
    body.challenge = challenge;
  }

  if (competitionId) {
    body.competition = competitionId;
  }

  const stringified = JSON.stringify(body);

  const encryprtedBody = CryptoJS.AES.encrypt(
    stringified,
    secretKey
  ).toString();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   authorization: `Bearer ${grandToken}`,
    },
    body: JSON.stringify({ data: encryprtedBody }),
  };

  const url = `${backendUrl}create-game-score`;

  await fetch(url, options);
}
