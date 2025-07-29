const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  const is_success = true;
  const user_id = "kashish_gupta_23052004"; 
  const email = "kashish1768.be22@chitkara.edu.in";       
  const roll_number = "2210991768";              

  let even_numbers = [], odd_numbers = [], alphabets = [], special_characters = [];
  let sum = 0, concat_chars = [];

  for (let item of data) {
    const str = item.toString();
    if (/^\d+$/.test(str)) {
      let num = parseInt(str);
      sum += num;
      (num % 2 === 0 ? even_numbers : odd_numbers).push(str);
    } else if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
      concat_chars.push(str);
    } else {
      special_characters.push(str);
    }
  }


  let concat_string = concat_chars
    .join('')
    .split('')
    .reverse()
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join('');

  res.status(200).json({
    is_success,
    user_id,
    email,
    roll_number,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
