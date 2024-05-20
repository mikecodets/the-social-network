function calculateProbability(ra, rb) {
  return 1 / (1 + Math.pow(10, (rb - ra) / 400));
}

function updateRatings(ra, rb, result, k) {
  const ea = calculateProbability(ra, rb);
  const eb = calculateProbability(rb, ra);

  const sa = result === "win" ? 1 : result === "loss" ? 0 : 0.5;
  const sb = 1 - sa;

  const newRa = ra + k * (sa - ea);
  const newRb = rb + k * (sb - eb);

  return [newRa, newRb];
}

const playerARating = 1400;
const playerBRating = 1500;
const result = "win";
const kFactor = 32;

const [newPlayerARating, newPlayerBRating] = updateRatings(
  playerARating,
  playerBRating,
  result,
  kFactor
);

console.log("Novo rating do Jogador A:", newPlayerARating);
console.log("Novo rating do Jogador B:", newPlayerBRating);
