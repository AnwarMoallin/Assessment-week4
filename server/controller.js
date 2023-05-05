module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortune = [
      "A lifetime friend shall soon be made.",
      "A smile is your personal welcome mat.",
      "For the things we have to learn before we can do them, we learn by doing them.",
      "Fortune Not Found: Abort, Retry, Ignore?",
      "If a true sense of value is to be yours it must come through service.",
      "It is better to be an optimist and proven a fool than to be a pessimist and be proven right.",
      "You are generous to an extreme and always think of the other fellow.",
    ];

    // returns random fortune
    const randomIndex = Math.floor(Math.random() * fortune.length);
    const randomFortune = fortune[randomIndex];
    console.log(randomFortune);

    res.status(200).send(randomFortune);
  },
  postNum: (req, res) => {
    console.log(req.body);
    res.send(`Number received ${req.body.val}`);
  },
  deleteNum: (req, res) => {
    const data = req.params;
    console.log(data);
    res.send(`Number with id ${id} deleted`);
  },
};
