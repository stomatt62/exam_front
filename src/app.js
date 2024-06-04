randomBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(
      "https://exam-back-z7c7.onrender.com/api/v1/blagues/random"
    );
    const data = await res.json();

    if (data.result) {
      const blague = data.result;
      console.log(data);
      result.innerHTML = `<p><strong>Question:</strong> ${blague.question}</p><p><strong>Réponse:</strong> ${blague.reponse}</p>`;
    } else {
      result.textContent = "Aucune blague trouvée";
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la blague:", error);
    result.textContent = "Erreur lors de la récupération de la blague";
  }
});
