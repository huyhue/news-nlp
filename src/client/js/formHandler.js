function handleSubmit(event) {
  event.preventDefault();

  let inputUrl = document.getElementById("url").value;
  if (inputUrl == null || inputUrl == "") {
    alert("The input field cannot be blank");
    return false;
  }

  if (Client.validUrl(inputUrl)) {
    console.log("Submit");
    fetch("http://localhost:3000/api", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: inputUrl }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("UI Design");
        document.getElementById("polarity").innerHTML =
          "- " + polarityDefine(res.score_tag);
        document.getElementById("agreement").innerHTML = `- ${res.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `- ${res.subjectivity}`;
        let textArticle = "";
        res.sentence_list.forEach((i) => (textArticle += i.text + ", "));
        document.getElementById("textArticle").innerHTML = `- ${textArticle}`;
      })
      .catch((error) => console.log(error));
  } else {
    alert("Error valid Url");
  }
}

const polarityDefine = (score_tag) => {
  let textPolarity;
  switch (score_tag) {
    case "P+":
      textPolarity = "STRONG POSITION";
      break;
    case "P":
      textPolarity = "POSITIVE";
      break;
    case "NEU":
      textPolarity = "NEUTRAL";
      break;
    case "N":
      textPolarity = "NEGATIVE";
      break;
    case "N+":
      textPolarity = "STRONG NEGATIVE";
      break;
    case "NONE":
      textPolarity = "WITHOUT POLARITY";
  }
  return textPolarity;
};

export { handleSubmit };
export { polarityDefine };
