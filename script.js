function mincost(arr) { 
  // If there's only one rope, no cost to connect
  if (arr.length <= 1) return 0;

  // Convert array into a min-heap behavior using sorting
  // We will repeatedly connect two smallest ropes
  let cost = 0;

  while (arr.length > 1) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Take the two smallest ropes
    const first = arr.shift();
    const second = arr.shift();

    // Cost to connect them
    const newRope = first + second;
    cost += newRope;

    // Push the new rope length back into the array
    arr.push(newRope);
  }

  // Return total minimum cost
  return cost;
}

module.exports = mincost;
